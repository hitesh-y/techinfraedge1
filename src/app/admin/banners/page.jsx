"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Eye, 
  ArrowUpDown,
  Search,
  Filter,
  CheckCircle,
  X,
  Image as ImageIcon,
  Link as LinkIcon,
  Type
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LoadingSpinner from "@/components/admin/loading-spinner"
import Alert from "@/components/admin/alert"
import Modal from "@/components/admin/modal"
import ImageUpload from "@/components/admin/image-upload"

export default function BannersPage() {
  const [banners, setBanners] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState("order")
  const [sortDirection, setSortDirection] = useState("asc")
  const [filterPage, setFilterPage] = useState("all")
  const [selectedBanner, setSelectedBanner] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editForm, setEditForm] = useState({
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

  useEffect(() => {
    fetchBanners()
  }, [])

  const fetchBanners = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/banners')
      if (response.ok) {
        const data = await response.json()
        setBanners(data)
      } else {
        console.error('Failed to fetch banners')
      }
    } catch (error) {
      console.error('Error fetching banners:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterPage(e.target.value)
  }

  const handleViewBanner = (banner) => {
    setSelectedBanner(banner)
    setIsViewModalOpen(true)
  }

  const handleEditBanner = (banner) => {
    setSelectedBanner(banner)
    setEditForm({
      _id: banner._id,
      title: banner.title,
      subtitle: banner.subtitle,
      description: banner.description,
      image: banner.image,
      cta: {
        text: banner.cta.text,
        link: banner.cta.link
      },
      order: banner.order,
      isActive: banner.isActive,
      page: banner.page
    })
    setIsEditModalOpen(true)
  }

  const handleEditFormChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name.startsWith('cta.')) {
      const ctaField = name.split('.')[1]
      setEditForm({
        ...editForm,
        cta: {
          ...editForm.cta,
          [ctaField]: value
        }
      })
    } else {
      setEditForm({
        ...editForm,
        [name]: type === 'checkbox' ? checked : value
      })
    }
  }

  const handleUpdateBanner = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/banners', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      })

      if (response.ok) {
        const updatedBanner = await response.json()
        
        // Update local state
        setBanners(banners.map(banner => 
          banner._id === updatedBanner._id ? updatedBanner : banner
        ))
        
        setIsEditModalOpen(false)
      } else {
        console.error('Failed to update banner')
      }
    } catch (error) {
      console.error('Error updating banner:', error)
    }
  }

  const handleDeleteBanner = async (id) => {
    if (!confirm('Are you sure you want to delete this banner?')) {
      return
    }

    try {
      const response = await fetch(`/api/banners?id=${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Remove from local state
        setBanners(banners.filter(banner => banner._id !== id))
      }
    } catch (error) {
      console.error('Error deleting banner:', error)
    }
  }

  const toggleBannerStatus = async (banner) => {
    try {
      const response = await fetch('/api/banners', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...banner,
          isActive: !banner.isActive
        }),
      })

      if (response.ok) {
        // Update local state
        setBanners(banners.map(b => 
          b._id === banner._id ? { ...b, isActive: !b.isActive } : b
        ))
      }
    } catch (error) {
      console.error('Error toggling banner status:', error)
    }
  }

  // Filter and sort banners
  const filteredBanners = banners
    .filter(banner => {
      // Filter by search term
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = 
        banner.title?.toLowerCase().includes(searchLower) ||
        banner.subtitle?.toLowerCase().includes(searchLower) ||
        banner.description?.toLowerCase().includes(searchLower)
      
      // Filter by page
      const matchesPage = 
        filterPage === "all" || 
        banner.page === filterPage
      
      return matchesSearch && matchesPage
    })
    .sort((a, b) => {
      // Sort by field
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1
      return 0
    })

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Hero Banners</h1>
          <p className="text-gray-400 mt-1">Manage your website hero banners</p>
        </div>
        <Link
          href="/admin/banners/new"
          className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Banner
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search banners..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-64"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={filterPage}
            onChange={handleFilterChange}
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-40"
          >
            <option value="all">All Pages</option>
            <option value="home">Home</option>
            <option value="services">Services</option>
            <option value="about">About</option>
            <option value="contact">Contact</option>
          </select>
        </div>
      </div>

      {/* Banners Table */}
      {isLoading ? (
        <div className="h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-md">
          {filteredBanners.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("order")}
                    >
                      <div className="flex items-center">
                        Order
                        {sortField === "order" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Image
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("title")}
                    >
                      <div className="flex items-center">
                        Title
                        {sortField === "title" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("page")}
                    >
                      <div className="flex items-center">
                        Page
                        {sortField === "page" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("isActive")}
                    >
                      <div className="flex items-center">
                        Status
                        {sortField === "isActive" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredBanners.map((banner, index) => (
                    <motion.tr 
                      key={banner._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-gray-750 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{banner.order}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-16 h-10 relative rounded overflow-hidden">
                          <Image
                            src={banner.image}
                            alt={banner.title}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.target.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white truncate max-w-xs">{banner.title}</div>
                        <div className="text-xs text-gray-400 truncate max-w-xs">{banner.subtitle}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300 capitalize">
                          {banner.page}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleBannerStatus(banner)}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            banner.isActive 
                              ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50' 
                              : 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
                          }`}
                        >
                          {banner.isActive ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Active
                            </>
                          ) : (
                            <>
                              <X className="h-3 w-3 mr-1" />
                              Inactive
                            </>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleViewBanner(banner)}
                          className="text-indigo-400 hover:text-indigo-300 mr-3"
                          title="View Banner"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleEditBanner(banner)}
                          className="text-blue-400 hover:text-blue-300 mr-3"
                          title="Edit Banner"
                        >
                          <Pencil className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteBanner(banner._id)}
                          className="text-red-400 hover:text-red-300"
                          title="Delete Banner"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No banners found. <Link href="/admin/banners/new" className="text-indigo-400 hover:text-indigo-300">Create your first banner</Link>
            </div>
          )}
        </div>
      )}

      {/* View Banner Modal */}
      {isViewModalOpen && selectedBanner && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsViewModalOpen(false)}>
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-white mb-4">
                      Banner Details
                    </h3>
                    
                    <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src={selectedBanner.image}
                        alt={selectedBanner.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    
                    <div className="bg-gray-750 p-4 rounded-md mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Page</span>
                        <span className="text-gray-300 text-sm capitalize">{selectedBanner.page}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Order</span>
                        <span className="text-gray-300 text-sm">{selectedBanner.order}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Status</span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          selectedBanner.isActive 
                            ? 'bg-green-900/30 text-green-400' 
                            : 'bg-red-900/30 text-red-400'
                        }`}>
                          {selectedBanner.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                      <div className="bg-gray-750 p-3 rounded-md text-white">{selectedBanner.title}</div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Subtitle</label>
                      <div className="bg-gray-750 p-3 rounded-md text-white">{selectedBanner.subtitle}</div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                      <div className="bg-gray-750 p-3 rounded-md text-white">{selectedBanner.description}</div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-1">CTA Button</label>
                      <div className="bg-gray-750 p-3 rounded-md text-white">
                        <div className="flex justify-between">
                          <span>{selectedBanner.cta.text}</span>
                          <span className="text-indigo-400">{selectedBanner.cta.link}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-750 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => handleEditBanner(selectedBanner)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Edit Banner
                </button>
                <button
                  type="button"
                  onClick={() => setIsViewModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Banner Modal */}
      {isEditModalOpen && selectedBanner && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsEditModalOpen(false)}>
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleUpdateBanner}>
                <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-white mb-4">
                        Edit Banner
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">
                            Title
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Type className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              value={editForm.title}
                              onChange={handleEditFormChange}
                              required
                              className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-400 mb-1">
                            Subtitle
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Type className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                              type="text"
                              id="subtitle"
                              name="subtitle"
                              value={editForm.subtitle}
                              onChange={handleEditFormChange}
                              required
                              className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
                            Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            value={editForm.description}
                            onChange={handleEditFormChange}
                            required
                            rows="3"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          ></textarea>
                        </div>
                        
                        <div>
                          <label htmlFor="image" className="block text-sm font-medium text-gray-400 mb-1">
                            Image URL
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <ImageIcon className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                              type="text"
                              id="image"
                              name="image"
                              value={editForm.image}
                              onChange={handleEditFormChange}
                              required
                              className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cta.text" className="block text-sm font-medium text-gray-400 mb-1">
                              CTA Text
                            </label>
                            <input
                              type="text"
                              id="cta.text"
                              name="cta.text"
                              value={editForm.cta.text}
                              onChange={handleEditFormChange}
                              required
                              className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="cta.link" className="block text-sm font-medium text-gray-400 mb-1">
                              CTA Link
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LinkIcon className="h-5 w-5 text-gray-500" />
                              </div>
                              <input
                                type="text"
                                id="cta.link"
                                name="cta.link"
                                value={editForm.cta.link}
                                onChange={handleEditFormChange}
                                required
                                className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="order" className="block text-sm font-medium text-gray-400 mb-1">
                              Order
                            </label>
                            <input
                              type="number"
                              id="order"
                              name="order"
                              value={editForm.order}
                              onChange={handleEditFormChange}
                              required
                              min="0"
                              className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="page" className="block text-sm font-medium text-gray-400 mb-1">
                              Page
                            </label>
                            <select
                              id="page"
                              name="page"
                              value={editForm.page}
                              onChange={handleEditFormChange}
                              required
                              className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            >
                              <option value="home">Home</option>
                              <option value="services">Services</option>
                              <option value="about">About</option>
                              <option value="contact">Contact</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="isActive"
                            name="isActive"
                            checked={editForm.isActive}
                            onChange={handleEditFormChange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
                          />
                          <label htmlFor="isActive" className="ml-2 block text-sm text-gray-300">
                            Active
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-750 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}