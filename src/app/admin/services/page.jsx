"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Eye, 
  ArrowUpDown,
  Search, 
  CheckCircle,
  X,
  Link as LinkIcon
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LoadingSpinner from "@/components/admin/loading-spinner"
import Alert from "@/components/admin/alert"
import Modal from "@/components/admin/modal"

export default function ServicesPage() {
  const { data: session, status } = useSession()
  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState("order")
  const [sortDirection, setSortDirection] = useState("asc")
  const [selectedService, setSelectedService] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [deleteError, setDeleteError] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (status === "loading") return
    
    if (!session) {
      return
    }
    
    fetchServices()
  }, [session, status])

  const fetchServices = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/services?all=true')
      if (response.ok) {
        const data = await response.json()
        setServices(data)
      } else {
        console.error('Failed to fetch services')
      }
    } catch (error) {
      console.error('Error fetching services:', error)
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

  const handleViewService = (service) => {
    setSelectedService(service)
    setIsViewModalOpen(true)
  }

  const handleDeleteClick = (service) => {
    // Use _id if available, otherwise use id
    const serviceId = service._id || service.id
    setDeleteId(serviceId)
    setDeleteError("")
    setIsDeleteModalOpen(true)
  }

  const handleDeleteService = async () => {
    if (!deleteId) return
    
    setIsDeleting(true)
    setDeleteError("")
    
    try {
      const response = await fetch(`/api/services?id=${deleteId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Remove from local state
        setServices(services.filter(service => service._id !== deleteId && service.id !== deleteId))
        
        // Add a small delay before closing the modal
        setTimeout(() => {
          setIsDeleteModalOpen(false)
          setIsDeleting(false)
        }, 300)
      } else {
        const data = await response.json()
        setDeleteError(data.error || 'Failed to delete service')
        setIsDeleting(false)
      }
    } catch (error) {
      console.error('Error deleting service:', error)
      setDeleteError('An error occurred while deleting the service')
      setIsDeleting(false)
    }
  }

  const toggleServiceStatus = async (service) => {
    try {
      const response = await fetch('/api/services', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...service,
          isActive: !service.isActive
        }),
      })

      if (response.ok) {
        // Update local state
        setServices(services.map(s => 
          s.id === service.id ? { ...s, isActive: !s.isActive } : s
        ))
      }
    } catch (error) {
      console.error('Error toggling service status:', error)
    }
  }

  // Filter and sort services
  const filteredServices = services
    .filter(service => {
      // Filter by search term
      const searchLower = searchTerm.toLowerCase()
      return (
        service.title?.toLowerCase().includes(searchLower) ||
        service.description?.toLowerCase().includes(searchLower) ||
        service.shortDescription?.toLowerCase().includes(searchLower)
      )
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
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-gray-400 mt-1">Manage your services</p>
        </div>
        <Link
          href="/admin/services/new"
          className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Service
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Services Table */}
      {status === "loading" || isLoading ? (
        <div className="h-64">
          <LoadingSpinner />
        </div>
      ) : !session ? (
        <Alert 
          type="error" 
          message="You must be signed in to view this page. Please sign in to continue." 
          className="mb-6"
        />
      ) : (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-md">
          {filteredServices.length > 0 ? (
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
                      Icon
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
                  {filteredServices.map((service, index) => (
                    <motion.tr 
                      key={service.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-gray-750 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{service.order}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-10 h-10 relative rounded overflow-hidden bg-gray-700 flex items-center justify-center">
                          {service.icon ? (
                            <Image
                              src={service.icon}
                              alt={service.title}
                              width={24}
                              height={24}
                              className="object-contain"
                              onError={(e) => {
                                e.target.src = "/placeholder.svg";
                              }}
                            />
                          ) : (
                            <div className="text-gray-400 text-xs">No icon</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white truncate max-w-xs">{service.title}</div>
                        <div className="text-xs text-gray-400 truncate max-w-xs">{service.shortDescription}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleServiceStatus(service)}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            service.isActive 
                              ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50' 
                              : 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
                          }`}
                        >
                          {service.isActive ? (
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
                          onClick={() => handleViewService(service)}
                          className="text-indigo-400 hover:text-indigo-300 mr-3"
                          title="View Service"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <Link
                          href={`/admin/services/edit/${service.id}`}
                          className="text-blue-400 hover:text-blue-300 mr-3"
                          title="Edit Service"
                        >
                          <Pencil className="h-5 w-5" />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(service)}
                          className="text-red-400 hover:text-red-300"
                          title="Delete Service"
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
              No services found. <Link href="/admin/services/new" className="text-indigo-400 hover:text-indigo-300">Create your first service</Link>
            </div>
          )}
        </div>
      )}

      {/* View Service Modal */}
      {isViewModalOpen && selectedService && (
        <Modal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          title="Service Details"
          size="lg"
          actions={
            <>
              <Link
                href={`/admin/services/edit/${selectedService.id}`}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Edit Service
              </Link>
              <button
                type="button"
                onClick={() => setIsViewModalOpen(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </>
          }
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              {selectedService.icon && (
                <div className="w-16 h-16 relative rounded-md overflow-hidden bg-gray-700 flex items-center justify-center">
                  <Image
                    src={selectedService.icon}
                    alt={selectedService.title}
                    width={40}
                    height={40}
                    className="object-contain"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold text-white">{selectedService.title}</h2>
                <div className="flex items-center mt-1">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedService.isActive 
                      ? 'bg-green-900/30 text-green-400' 
                      : 'bg-red-900/30 text-red-400'
                  }`}>
                    {selectedService.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <span className="ml-2 text-gray-400 text-sm">Order: {selectedService.order}</span>
                </div>
              </div>
            </div>
            
            {selectedService.image && (
              <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg";
                  }}
                />
              </div>
            )}
            
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Short Description</h3>
              <p className="text-white">{selectedService.shortDescription}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Full Description</h3>
              <div className="bg-gray-750 p-4 rounded-md text-white">
                {selectedService.description}
              </div>
            </div>
            
            {selectedService.slug && (
              <div className="flex items-center">
                <LinkIcon className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">Slug: </span>
                <span className="ml-1 text-indigo-400">{selectedService.slug}</span>
              </div>
            )}
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => !isDeleting && setIsDeleteModalOpen(false)}
          title="Delete Service"
          size="sm"
          zIndex={60}
          actions={
            <>
              <button
                type="button"
                onClick={handleDeleteService}
                disabled={isDeleting}
                className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white ${
                  isDeleting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
              >
                {isDeleting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                disabled={isDeleting}
                className={`mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-gray-300 ${
                  isDeleting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
              >
                Cancel
              </button>
            </>
          }
        >
          <div>
            <p className="text-gray-300">Are you sure you want to delete this service? This action cannot be undone.</p>
            
            {deleteError && (
              <div className="mt-4 p-3 bg-red-900/50 border border-red-800 rounded-md text-red-200 text-sm">
                {deleteError}
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  )
}