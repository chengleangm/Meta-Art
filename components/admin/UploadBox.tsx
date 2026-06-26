'use client'

import { useState, useRef, type DragEvent, type ChangeEvent } from 'react'
import { Upload, File, X } from 'lucide-react'

interface UploadBoxProps {
  label?: string
  accept?: string
  onChange?: (file: File | null) => void
}

export default function UploadBox({ label, accept, onChange }: UploadBoxProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File | null) => {
    setSelectedFile(file)
    onChange?.(file)
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0] || null
    handleFile(file)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    handleFile(file)
  }

  const clearFile = () => {
    setSelectedFile(null)
    onChange?.(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      )}
      {selectedFile ? (
        <div className="flex items-center gap-3 p-3 border border-lime-300 bg-lime-50 rounded-xl">
          <File className="w-5 h-5 text-lime-600 flex-shrink-0" />
          <span className="text-sm text-gray-700 truncate flex-1">{selectedFile.name}</span>
          <button
            onClick={clearFile}
            className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
            isDragging
              ? 'border-lime-400 bg-lime-50'
              : 'border-gray-200 hover:border-lime-300 hover:bg-gray-50'
          }`}
        >
          <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-600">Cliquer pour téléverser</p>
          <p className="text-xs text-gray-400 mt-1">ou glisser-déposer</p>
          {accept && (
            <p className="text-xs text-gray-400 mt-1">{accept.split(',').join(', ')}</p>
          )}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        className="hidden"
      />
    </div>
  )
}
