import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  try {
    const { items, shipping } = await req.json()

    const lineItems = items.map((item: {
      product: { name: string; imageUrl: string; price: number }
      quantity: number
    }) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.product.name,
          images: item.product.imageUrl.startsWith('http')
            ? [item.product.imageUrl]
            : [],
        },
        unit_amount: Math.round(item.product.price * 100),
      },
      quantity: item.quantity,
    }))

    // Add shipping as a line item if not free
    if (shipping.cost > 0) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: { name: shipping.label },
          unit_amount: Math.round(shipping.cost * 100),
        },
        quantity: 1,
      })
    }

    const origin = req.headers.get('origin') ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      locale: 'fr',
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU'],
      },
      billing_address_collection: 'auto',
      payment_intent_data: {
        description: 'Commande Meta Art',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: 'Erreur lors de la création du paiement' }, { status: 500 })
  }
}
