'use client'

import { useState } from 'react'
import { Trash2, Image as ImageIcon, Box } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import UploadBox from '@/components/admin/UploadBox'
import ConfirmDeleteModal from '@/components/admin/ConfirmDeleteModal'

interface MockFile {
  id: string
  name: string
  type: 'image' | '3d'
  size: string
  date: string
  url: string
}

const initialImages: MockFile[] = [
  { id: '1', name: 'bambu-x1-carbon.jpg', type: 'image', size: '245 Ko', date: '2024-01-15', url: 'https://picsum.photos/seed/img1/80/80' },
  { id: '2', name: 'filament-rouge.png', type: 'image', size: '112 Ko', date: '2024-01-16', url: 'https://picsum.photos/seed/img2/80/80' },
  { id: '3', name: 'resine-grise.jpg', type: 'image', size: '187 Ko', date: '2024-01-20', url: 'https://picsum.photos/seed/img3/80/80' },
  { id: '4', name: 'dragon-medieval.jpg', type: 'image', size: '320 Ko', date: '2024-01-22', url: 'https://picsum.photos/seed/img4/80/80' },
  { id: '5', name: 'prusa-mk4.webp', type: 'image', size: '89 Ko', date: '2024-02-01', url: 'https://picsum.photos/seed/img5/80/80' },
]

const initialModels: MockFile[] = [
  { id: '10', name: 'dragon-medieval.stl', type: '3d', size: '12.4 Mo', date: '2024-01-08', url: '' },
  { id: '11', name: 'buste-napoleon.3mf', type: '3d', size: '8.1 Mo', date: '2024-01-22', url: '' },
  { id: '12', name: 'architecture-gothique.zip', type: '3d', size: '45.2 Mo', date: '2024-02-10', url: '' },
  { id: '13', name: 'figurines-anime.stl', type: '3d', size: '22.7 Mo', date: '2024-02-15', url: '' },
]

export default function UploadsPage() {
  // TODO: Connect to Supabase Storage or AWS S3 for real file uploads
  const [images, setImages] = useState<MockFile[]>(initialImages)
  const [models, setModels] = useState<MockFile[]>(initialModels)
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; file: MockFile | null }>({
    open: false,
    file: null,
  })

  const handleDeleteFile = (file: MockFile) => {
    if (file.type === 'image') {
      setImages((prev) => prev.filter((f) => f.id !== file.id))
    } else {
      setModels((prev) => prev.filter((f) => f.id !== file.id))
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fichiers & Uploads</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {/* TODO: Connect to Supabase Storage or AWS S3 for real file uploads */}
            Gérez vos images produits et fichiers 3D.
          </p>
        </div>

        {/* Images section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Images produits</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <UploadBox
              label="Ajouter des images"
              accept="image/*"
              onChange={(file) => {
                if (file) {
                  // TODO: Upload to Supabase Storage
                  const newFile: MockFile = {
                    id: Date.now().toString(),
                    name: file.name,
                    type: 'image',
                    size: `${Math.round(file.size / 1024)} Ko`,
                    date: new Date().toISOString().split('T')[0],
                    url: URL.createObjectURL(file),
                  }
                  setImages((prev) => [newFile, ...prev])
                }
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((file) => (
              <div key={file.id} className="bg-white rounded-2xl shadow-sm overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-3">
                  <p className="text-xs font-medium text-gray-900 truncate" title={file.name}>
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{file.size}</p>
                  <p className="text-xs text-gray-400">{file.date}</p>
                  <button
                    onClick={() => setDeleteModal({ open: true, file })}
                    className="mt-2 flex items-center gap-1 text-xs text-red-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Files section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Fichiers 3D</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <UploadBox
              label="Ajouter des fichiers 3D"
              accept=".stl,.obj,.3mf,.zip"
              onChange={(file) => {
                if (file) {
                  // TODO: Upload to Supabase Storage or AWS S3
                  const newFile: MockFile = {
                    id: Date.now().toString(),
                    name: file.name,
                    type: '3d',
                    size: `${(file.size / (1024 * 1024)).toFixed(1)} Mo`,
                    date: new Date().toISOString().split('T')[0],
                    url: '',
                  }
                  setModels((prev) => [newFile, ...prev])
                }
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {models.map((file) => (
              <div key={file.id} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-2">
                <div className="w-full aspect-square rounded-xl bg-gray-100 flex items-center justify-center">
                  <Box className="w-10 h-10 text-gray-300" />
                </div>
                <p className="text-xs font-medium text-gray-900 truncate" title={file.name}>
                  {file.name}
                </p>
                <p className="text-xs text-gray-400">{file.size} · {file.date}</p>
                <button
                  onClick={() => setDeleteModal({ open: true, file })}
                  className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, file: null })}
        onConfirm={() => deleteModal.file && handleDeleteFile(deleteModal.file)}
        itemName={deleteModal.file?.name ?? ''}
      />
    </AdminLayout>
  )
}
