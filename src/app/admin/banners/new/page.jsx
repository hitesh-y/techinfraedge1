"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { 
  ArrowLeft, 
  Type, 
  Image as ImageIcon, 
  Link as LinkIcon,
  Save,
  AlertCircle
} from "lucide-react"
import ImageUpload from "@/components/admin/image-upload"

export default function NewBannerPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
    cta: {
      text: "",
      link: ""
    },
    order: 0,
    isActive: true,
    page: "home"
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name.startsWith('cta.')) {
      const ctaField = name.split('.')[1]
      setFormData({
        ...formData,
        cta: {
          ...formData.cta,
          [ctaField]: value
        }
      })
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch('/api/banners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin/banners')
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to create banner')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error creating banner:', error)
      setError('An error occurred while creating the banner')
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/banners"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Banners
        </Link>
        <h1 className="text-3xl font-bold">Add New Banner</h1>
        <p className="text-gray-400 mt-1">Create a new hero banner for your website</p>
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
                    placeholder="Banner Title"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subtitle" className="block text-sm font-medium text-gray-400 mb-1">
                  Subtitle <span className="text-indigo-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Type className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="Banner Subtitle"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
                Description <span className="text-indigo-400">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                placeholder="Banner description text..."
              ></textarea>
            </div>
            
            <div className="mb-6">
              <ImageUpload
                onImageUpload={(imagePath) => setFormData({...formData, image: imagePath})}
                defaultImage={formData.image}
                label="Banner Image (recommended size: 1920x700px)"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="cta.text" className="block text-sm font-medium text-gray-400 mb-1">
                  CTA Button Text <span className="text-indigo-400">*</span>
                </label>
                <input
                  type="text"
                  id="cta.text"
                  name="cta.text"
                  value={formData.cta.text}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                  placeholder="Explore Services"
                />
              </div>
              
              <div>
                <label htmlFor="cta.link" className="block text-sm font-medium text-gray-400 mb-1">
                  CTA Button Link <span className="text-indigo-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="cta.link"
                    name="cta.link"
                    value={formData.cta.link}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="/services"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
              
              <div>
                <label htmlFor="page" className="block text-sm font-medium text-gray-400 mb-1">
                  Page <span className="text-indigo-400">*</span>
                </label>
                <select
                  id="page"
                  name="page"
                  value={formData.page}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                >
                  <option value="home">Home</option>
                  <option value="services">Services</option>
                  <option value="about">About</option>
                  <option value="contact">Contact</option>
                </select>
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
              href="/admin/banners"
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
                  Creating...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Create Banner
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}