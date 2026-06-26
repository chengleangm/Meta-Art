import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// TODO: Replace this placeholder check with real auth (NextAuth, Supabase Auth, etc.)
// Check for admin session cookie/token here
export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'

  // Placeholder: read a simple cookie named 'admin-session'
  const adminSession = request.cookies.get('admin-session')

  if (isAdminRoute && !isLoginPage && !adminSession) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
