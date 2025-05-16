"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle, 
  Clock, 
  Search, 
  Trash2, 
  Eye, 
  ArrowUpDown,
  Download,
  Filter
} from "lucide-react"

export default function PopupFormsPage() {
  const [forms, setForms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState("createdAt")
  const [sortDirection, setSortDirection] = useState("desc")
  const [filterRead, setFilterRead] = useState("all")
  const [selectedForm, setSelectedForm] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  useEffect(() => {
    fetchForms()
  }, [])

  const fetchForms = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/forms?type=popup')
      if (response.ok) {
        const data = await response.json()
        setForms(data)
      } else {
        console.error('Failed to fetch forms')
      }
    } catch (error) {
      console.error('Error fetching forms:', error)
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
    setFilterRead(e.target.value)
  }

  const handleViewForm = (form) => {
    setSelectedForm(form)
    setIsViewModalOpen(true)
  }

  const handleMarkAsRead = async (id) => {
    try {
      const response = await fetch('/api/forms', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: id,
          isRead: true
        }),
      })

      if (response.ok) {
        // Update local state
        setForms(forms.map(form => 
          form._id === id ? { ...form, isRead: true } : form
        ))
      }
    } catch (error) {
      console.error('Error marking form as read:', error)
    }
  }

  const handleDeleteForm = async (id) => {
    if (!confirm('Are you sure you want to delete this form submission?')) {
      return
    }

    try {
      const response = await fetch(`/api/forms?id=${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Remove from local state
        setForms(forms.filter(form => form._id !== id))
      }
    } catch (error) {
      console.error('Error deleting form:', error)
    }
  }

  const exportToCSV = () => {
    // Create CSV content
    const headers = ['Name', 'Email', 'Phone', 'Service', 'Budget', 'Message', 'Date', 'Status']
    const csvContent = [
      headers.join(','),
      ...filteredForms.map(form => [
        `"${form.name || ''}"`,
        `"${form.email || ''}"`,
        `"${form.phone || ''}"`,
        `"${form.service || ''}"`,
        `"${form.budget || ''}"`,
        `"${form.message?.replace(/"/g, '""') || ''}"`,
        `"${new Date(form.createdAt).toLocaleString()}"`,
        `"${form.isRead ? 'Read' : 'Unread'}"`,
      ].join(','))
    ].join('\\n')

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `popup-forms-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Filter and sort forms
  const filteredForms = forms
    .filter(form => {
      // Filter by search term
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = 
        form.name?.toLowerCase().includes(searchLower) ||
        form.email?.toLowerCase().includes(searchLower) ||
        form.service?.toLowerCase().includes(searchLower) ||
        form.message?.toLowerCase().includes(searchLower)
      
      // Filter by read status
      const matchesReadStatus = 
        filterRead === "all" || 
        (filterRead === "read" && form.isRead) || 
        (filterRead === "unread" && !form.isRead)
      
      return matchesSearch && matchesReadStatus
    })
    .sort((a, b) => {
      // Sort by field
      if (sortField === "createdAt") {
        return sortDirection === "asc" 
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt)
      }
      
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1
      return 0
    })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Popup Form Submissions</h1>
        <p className="text-gray-400 mt-1">Manage and respond to popup form inquiries</p>
      </div>

      {/* Filters and Actions */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search forms..."
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
              value={filterRead}
              onChange={handleFilterChange}
              className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-40"
            >
              <option value="all">All Status</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </div>
        </div>
        
        <button
          onClick={exportToCSV}
          className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
        >
          <Download className="h-5 w-5 mr-2" />
          Export CSV
        </button>
      </div>

      {/* Forms Table */}
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-md">
          {filteredForms.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center">
                        Name
                        {sortField === "name" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("email")}
                    >
                      <div className="flex items-center">
                        Email
                        {sortField === "email" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("service")}
                    >
                      <div className="flex items-center">
                        Service
                        {sortField === "service" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("createdAt")}
                    >
                      <div className="flex items-center">
                        Date
                        {sortField === "createdAt" && (
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("isRead")}
                    >
                      <div className="flex items-center">
                        Status
                        {sortField === "isRead" && (
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
                  {filteredForms.map((form, index) => (
                    <motion.tr 
                      key={form._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`${!form.isRead ? 'bg-indigo-900/10' : ''} hover:bg-gray-750 transition-colors`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{form.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{form.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300 truncate max-w-xs">{form.service}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-400">{formatDate(form.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          form.isRead 
                            ? 'bg-green-900/30 text-green-400' 
                            : 'bg-yellow-900/30 text-yellow-400'
                        }`}>
                          {form.isRead ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Read
                            </>
                          ) : (
                            <>
                              <Clock className="h-3 w-3 mr-1" />
                              Unread
                            </>
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleViewForm(form)}
                          className="text-indigo-400 hover:text-indigo-300 mr-3"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteForm(form._id)}
                          className="text-red-400 hover:text-red-300"
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
              No popup form submissions found
            </div>
          )}
        </div>
      )}

      {/* View Form Modal */}
      {isViewModalOpen && selectedForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsViewModalOpen(false)}>
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-white mb-4">
                      Popup Form Submission Details
                    </h3>
                    
                    <div className="bg-gray-750 p-4 rounded-md mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Submitted on</span>
                        <span className="text-gray-300 text-sm">{formatDate(selectedForm.createdAt)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Status</span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          selectedForm.isRead 
                            ? 'bg-green-900/30 text-green-400' 
                            : 'bg-yellow-900/30 text-yellow-400'
                        }`}>
                          {selectedForm.isRead ? 'Read' : 'Unread'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                      <div className="bg-gray-750 p-3 rounded-md text-white">{selectedForm.name}</div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <div className="bg-gray-750 p-3 rounded-md text-white">{selectedForm.email}</div>
                    </div>
                    
                    {selectedForm.phone && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                        <div className="bg-gray-750 p-3 rounded-md text-white">{selectedForm.phone}</div>
                      </div>
                    )}
                    
                    {selectedForm.service && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Service</label>
                        <div className="bg-gray-750 p-3 rounded-md text-white">{selectedForm.service}</div>
                      </div>
                    )}
                    
                    {selectedForm.budget && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Budget</label>
                        <div className="bg-gray-750 p-3 rounded-md text-white">{selectedForm.budget}</div>
                      </div>
                    )}
                    
                    {selectedForm.message && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <div className="bg-gray-750 p-3 rounded-md text-white whitespace-pre-wrap">{selectedForm.message}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-750 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {!selectedForm.isRead && (
                  <button
                    type="button"
                    onClick={() => {
                      handleMarkAsRead(selectedForm._id)
                      setSelectedForm({...selectedForm, isRead: true})
                    }}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Mark as Read
                  </button>
                )}
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
    </div>
  )
}