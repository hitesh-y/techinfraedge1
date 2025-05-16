"use client"

import { useState, useRef } from "react"
import { Upload, X, Image as ImageIcon, Check, Loader2 } from "lucide-react"
import Image from "next/image"

export default function ImageUpload({ 
  onImageUpload, 
  defaultImage = "", 
  className = "",
  label = "Upload Image" 
}) {
  const [image, setImage] = useState(defaultImage)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState("")
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef(null)

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    if (!validTypes.includes(file.type)) {
      setError("Please upload a valid image file (JPEG, PNG, GIF, WEBP)")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB")
      return
    }

    setError("")
    setIsUploading(true)
    setUploadSuccess(false)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to upload image')
      }

      const data = await response.json()
      setImage(data.filePath)
      setUploadSuccess(true)
      
      // Call the callback function with the image path
      if (onImageUpload) {
        onImageUpload(data.filePath)
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      setError(error.message || 'Failed to upload image')
    } finally {
      setIsUploading(false)
      
      // Reset success message after 3 seconds
      if (uploadSuccess) {
        setTimeout(() => {
          setUploadSuccess(false)
        }, 3000)
      }
    }
  }

  const handleRemoveImage = () => {
    setImage("")
    if (onImageUpload) {
      onImageUpload("")
    }
  }

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        {image ? (
          <div className="relative border border-gray-700 rounded-md overflow-hidden bg-gray-800">
            <div className="relative w-full h-48">
              <Image
                src={image}
                alt="Uploaded image"
                fill
                className="object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg"
                }}
              />
            </div>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                type="button"
                onClick={handleImageClick}
                className="p-1 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors"
                title="Change image"
              >
                <Upload className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="p-1 bg-red-600 rounded-md text-white hover:bg-red-700 transition-colors"
                title="Remove image"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div
            onClick={handleImageClick}
            className="border-2 border-dashed border-gray-600 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 transition-colors bg-gray-800"
          >
            <ImageIcon className="h-12 w-12 text-gray-500 mb-2" />
            <p className="text-sm text-gray-400">Click to upload an image</p>
            <p className="text-xs text-gray-500 mt-1">JPEG, PNG, GIF, WEBP (max 5MB)</p>
          </div>
        )}
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/jpeg,image/png,image/gif,image/webp"
          className="hidden"
        />
      </div>
      
      {isUploading && (
        <div className="mt-2 flex items-center text-sm text-indigo-400">
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Uploading image...
        </div>
      )}
      
      {error && (
        <div className="mt-2 text-sm text-red-400">
          {error}
        </div>
      )}
      
      {uploadSuccess && !isUploading && !error && (
        <div className="mt-2 flex items-center text-sm text-green-400">
          <Check className="h-4 w-4 mr-2" />
          Image uploaded successfully
        </div>
      )}
    </div>
  )
}