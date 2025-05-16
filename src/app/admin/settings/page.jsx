"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { 
  Save, 
  AlertCircle,
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Check
} from "lucide-react"
import LoadingSpinner from "@/components/admin/loading-spinner"
import Alert from "@/components/admin/alert"
import ImageUpload from "@/components/admin/image-upload"

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    siteName: "",
    siteDescription: "",
    logo: "",
    logoAlt: "",
    logoWidth: 180,
    logoHeight: 45,
    favicon: "",
    phoneNumber: "",
    email: "",
    supportEmail: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    address1: {
      address: "",
      number: "",
      country: ""
    },
    address2: {
      address: "",
      number: "",
      country: ""
    },
    socialLinks: [
      { icon: "iconoir-dribbble", url: "#" },
      { icon: "iconoir-twitter", url: "#" },
      { icon: "iconoir-instagram", url: "#" },
      { icon: "iconoir-linkedin", url: "#" }
    ],
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    googleAnalyticsId: ""
  })

  useEffect(() => {
    if (status === "loading") return
    
    if (!session) {
      return
    }
    
    fetchSettings()
  }, [session, status])

  const fetchSettings = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/settings')
      
      if (response.ok) {
        const data = await response.json()
        setFormData(data)
      } else {
        console.error('Failed to fetch settings')
      }
    } catch (error) {
      console.error('Error fetching settings:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name.startsWith('social.')) {
      const [_, index, field] = name.split('.')
      const updatedSocialLinks = [...formData.socialLinks]
      
      if (updatedSocialLinks[index]) {
        updatedSocialLinks[index] = {
          ...updatedSocialLinks[index],
          [field]: value
        }
        
        setFormData({
          ...formData,
          socialLinks: updatedSocialLinks
        })
      }
    } else if (name.startsWith('address1.') || name.startsWith('address2.')) {
      const [addressKey, field] = name.split('.')
      
      setFormData({
        ...formData,
        [addressKey]: {
          ...formData[addressKey],
          [field]: value
        }
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleLogoUpload = (imagePath) => {
    setFormData({
      ...formData,
      logo: imagePath
    })
  }

  const handleFaviconUpload = (imagePath) => {
    setFormData({
      ...formData,
      favicon: imagePath
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSuccess(false)
    
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccess(false)
        }, 3000)
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to update settings')
      }
    } catch (error) {
      console.error('Error updating settings:', error)
      setError('An error occurred while updating settings')
    } finally {
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
        <h1 className="text-3xl font-bold">Site Settings</h1>
        <p className="text-gray-400 mt-1">Manage your website settings</p>
      </div>

      {error && (
        <Alert 
          type="error" 
          message={error} 
          className="mb-6"
        />
      )}
      
      {success && (
        <Alert 
          type="success" 
          message="Settings updated successfully" 
          className="mb-6"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-md"
      >
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">General Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="siteName" className="block text-sm font-medium text-gray-400 mb-1">
                    Site Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="siteName"
                      name="siteName"
                      value={formData.siteName}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="JSB Global Infotech"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-400 mb-1">
                    Site Description
                  </label>
                  <input
                    type="text"
                    id="siteDescription"
                    name="siteDescription"
                    value={formData.siteDescription}
                    onChange={handleChange}
                    className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="IT Solutions and Services"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageUpload
                  onImageUpload={handleLogoUpload}
                  defaultImage={formData.logo}
                  label="Logo"
                />
                
                <ImageUpload
                  onImageUpload={handleFaviconUpload}
                  defaultImage={formData.favicon}
                  label="Favicon"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-400 mb-1">
                    Contact Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="contact@jsbglobalinfotech.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-400 mb-1">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-400 mb-1">
                  Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-500" />
                  </div>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="123 Business Street, City, Country"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Social Media Links</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="social.facebook" className="block text-sm font-medium text-gray-400 mb-1">
                    Facebook
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Facebook className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="url"
                      id="social.facebook"
                      name="social.facebook"
                      value={formData.socialLinks.facebook}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="https://facebook.com/jsbglobalinfotech"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="social.twitter" className="block text-sm font-medium text-gray-400 mb-1">
                    Twitter
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Twitter className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="url"
                      id="social.twitter"
                      name="social.twitter"
                      value={formData.socialLinks.twitter}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="https://twitter.com/jsbglobalinfotech"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="social.instagram" className="block text-sm font-medium text-gray-400 mb-1">
                    Instagram
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Instagram className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="url"
                      id="social.instagram"
                      name="social.instagram"
                      value={formData.socialLinks.instagram}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="https://instagram.com/jsbglobalinfotech"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="social.linkedin" className="block text-sm font-medium text-gray-400 mb-1">
                    LinkedIn
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Linkedin className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="url"
                      id="social.linkedin"
                      name="social.linkedin"
                      value={formData.socialLinks.linkedin}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="https://linkedin.com/company/jsbglobalinfotech"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="social.youtube" className="block text-sm font-medium text-gray-400 mb-1">
                    YouTube
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Youtube className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="url"
                      id="social.youtube"
                      name="social.youtube"
                      value={formData.socialLinks.youtube}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="https://youtube.com/c/jsbglobalinfotech"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">SEO Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-400 mb-1">
                    Default Meta Title
                  </label>
                  <input
                    type="text"
                    id="metaTitle"
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleChange}
                    className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="JSB Global Infotech - IT Solutions and Services"
                  />
                </div>
                
                <div>
                  <label htmlFor="googleAnalyticsId" className="block text-sm font-medium text-gray-400 mb-1">
                    Google Analytics ID
                  </label>
                  <input
                    type="text"
                    id="googleAnalyticsId"
                    name="googleAnalyticsId"
                    value={formData.googleAnalyticsId}
                    onChange={handleChange}
                    className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    placeholder="G-XXXXXXXXXX or UA-XXXXXXXX-X"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-400 mb-1">
                  Default Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows="3"
                  className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                  placeholder="JSB Global Infotech provides IT solutions and services to help businesses transform digitally..."
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-750 px-6 py-4 flex justify-end">
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
                  Save Settings
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}