"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Save, 
  AlertCircle,
  Type,
  AlignLeft,
  Hash,
  Link as LinkIcon,
  Loader2
} from "lucide-react"
import Link from "next/link"
import Alert from "@/components/admin/alert"
import ImageUpload from "@/components/admin/image-upload"
import LoadingSpinner from "@/components/admin/loading-spinner"

export default function EditServicePage({ params }) {
  const { id } = params
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    shortDescription: "",
    description: "",
    icon: "",
    image: "",
    slug: "",
    order: 0,
    isActive: true
  })

  useEffect(() => {
    if (status === "loading") return
    
    if (!session) {
      return
    }
    
    fetchService()
  }, [session, status, id])

  const fetchService = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/services?id=${id}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch service')
      }
      
      const data = await response.json()
      setFormData(data)
    } catch (error) {
      console.error('Error fetching service:', error)
      setError('Failed to load service data')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleIconUpload = (imagePath) => {
    setFormData({
      ...formData,
      icon: imagePath
    })
  }

  const handleImageUpload = (imagePath) => {
    setFormData({
      ...formData,
      image: imagePath
    })
  }

  const generateSlug = () => {
    if (!formData.title) return
    
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    setFormData({
      ...formData,
      slug
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch('/api/services', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin/services')
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to update service')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error updating service:', error)
      setError('An error occurred while updating the service')
      setIsSubmitting(false)
    }
  }

  if (status === "loading" || isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    )
  }

  if (!session) {
    return (
      <Alert 
        type="error" 
        message="You must be signed in to view this page. Please sign in to continue." 
        className="mb-6"
      />
    )
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/services"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>
        <h1 className="text-3xl font-bold">Edit Service</h1>
        <p className="text-gray-400 mt-1">Update service information</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/50 border border-red-800 rounded-md flex items-center text-red-200">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-md"
      >
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">
                  Title <span className="text-indigo-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Type className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="Service Title"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-400 mb-1">
                  Slug <span className="text-indigo-400">*</span>
                </label>
                <div className="relative flex">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Hash className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="service-slug"
                  />
                  <button
                    type="button"
                    onClick={generateSlug}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition-colors"
                  >
                    Generate
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Used in URLs: /services/your-slug</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-400 mb-1">
                Short Description <span className="text-indigo-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AlignLeft className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  required
                  className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                  placeholder="Brief description (displayed in cards and previews)"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
                Full Description <span className="text-indigo-400">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                placeholder="Detailed description of the service..."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ImageUpload
                onImageUpload={handleIconUpload}
                defaultImage={formData.icon}
                label="Service Icon (SVG or small image)"
              />
              
              <ImageUpload
                onImageUpload={handleImageUpload}
                defaultImage={formData.image}
                label="Service Image (featured image)"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="order" className="block text-sm font-medium text-gray-400 mb-1">
                  Display Order
                </label>
                <input
                  type="number"
                  id="order"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  min="0"
                  className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                />
                <p className="mt-1 text-xs text-gray-500">Lower numbers appear first</p>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-300">
                  Active (visible on website)
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-750 px-6 py-4 flex justify-end">
            <Link
              href="/admin/services"
              className="mr-4 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'
              } transition-colors`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}