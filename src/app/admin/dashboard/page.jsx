"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { 
  FileText, 
  Image as ImageIcon, 
  MessageSquare, 
  Users, 
  ArrowUpRight,
  Bell,
  CheckCircle,
  Clock
} from "lucide-react"
import Link from "next/link"
import StatCard from "@/components/admin/stat-card"
import LoadingSpinner from "@/components/admin/loading-spinner"
import Alert from "@/components/admin/alert"

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const [stats, setStats] = useState({
    services: 0,
    banners: 0,
    contactForms: 0,
    popupForms: 0,
    unreadForms: 0
  })
  const [isLoading, setIsLoading] = useState(true)
  const [recentSubmissions, setRecentSubmissions] = useState([])

  useEffect(() => {
    // Only fetch data if the user is authenticated
    if (status === "loading") return;
    
    if (!session) {
      return;
    }
    
    const fetchDashboardData = async () => {
      try {
        // Fetch services count
        const servicesRes = await fetch('/api/services')
        const servicesData = await servicesRes.json()
        
        // Fetch banners count
        const bannersRes = await fetch('/api/banners')
        const bannersData = await bannersRes.json()
        
        // Fetch contact forms
        const contactFormsRes = await fetch('/api/forms?type=contact')
        const contactFormsData = await contactFormsRes.json()
        
        // Fetch popup forms
        const popupFormsRes = await fetch('/api/forms?type=popup')
        const popupFormsData = await popupFormsRes.json()
        
        // Fetch unread forms
        const unreadFormsRes = await fetch('/api/forms?isRead=false')
        const unreadFormsData = await unreadFormsRes.json()
        
        // Update stats
        setStats({
          services: servicesData.length || 0,
          banners: bannersData.length || 0,
          contactForms: contactFormsData.length || 0,
          popupForms: popupFormsData.length || 0,
          unreadForms: unreadFormsData.length || 0
        })
        
        // Get recent submissions (combine and sort by date)
        const allForms = [...contactFormsData, ...popupFormsData]
        const sortedForms = allForms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        setRecentSubmissions(sortedForms.slice(0, 5))
        
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchDashboardData()
  }, [session, status])

  const statCards = [
    {
      title: "Total Services",
      value: stats.services,
      icon: <FileText className="h-6 w-6" />,
      color: "bg-blue-500",
      link: "/admin/services"
    },
    {
      title: "Hero Banners",
      value: stats.banners,
      icon: <ImageIcon className="h-6 w-6" />,
      color: "bg-purple-500",
      link: "/admin/banners"
    },
    {
      title: "Contact Forms",
      value: stats.contactForms,
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-green-500",
      link: "/admin/forms/contact"
    },
    {
      title: "Popup Forms",
      value: stats.popupForms,
      icon: <Bell className="h-6 w-6" />,
      color: "bg-yellow-500",
      link: "/admin/forms/popup"
    }
  ]

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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome to your admin dashboard</p>
      </div>

      {status === "loading" ? (
        <div className="h-64">
          <LoadingSpinner />
        </div>
      ) : !session ? (
        <Alert 
          type="error" 
          message="You must be signed in to view this page. Please sign in to continue." 
          className="mb-6"
        />
      ) : isLoading ? (
        <div className="h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
                link={stat.link}
                index={index}
              />
            ))}
          </div>

          {/* Unread Forms Alert */}
          {stats.unreadForms > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mb-8"
            >
              <div className="bg-indigo-900/50 border border-indigo-800 rounded-lg p-4 flex items-center">
                <div className="p-2 bg-indigo-800 rounded-full mr-4">
                  <Bell className="h-6 w-6 text-indigo-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-200">You have {stats.unreadForms} unread form submissions</h3>
                  <p className="text-indigo-300 text-sm">Check your inbox to respond to new inquiries</p>
                </div>
                <Link href="/admin/forms" className="ml-auto bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  View All
                </Link>
              </div>
            </motion.div>
          )}

          {/* Recent Submissions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-md"
          >
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Recent Form Submissions</h2>
            </div>
            <div className="divide-y divide-gray-700">
              {recentSubmissions.length > 0 ? (
                recentSubmissions.map((submission, index) => (
                  <div key={index} className="p-6 hover:bg-gray-750 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full mr-4 ${submission.isRead ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                          {submission.isRead ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <Clock className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{submission.name}</h3>
                          <p className="text-gray-400 text-sm">{submission.email}</p>
                          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{submission.message}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">{formatDate(submission.createdAt)}</span>
                        <span className={`block mt-1 text-xs px-2 py-1 rounded-full ${
                          submission.formType === 'contact' 
                            ? 'bg-green-900/30 text-green-400' 
                            : 'bg-yellow-900/30 text-yellow-400'
                        }`}>
                          {submission.formType === 'contact' ? 'Contact' : 'Popup'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-gray-500">
                  No recent submissions found
                </div>
              )}
            </div>
            {/* <div className="p-4 border-t border-gray-700 bg-gray-750">
              <Link href="/admin/forms" className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center justify-center">
                View All Submissions
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
            </div> */}
          </motion.div>
        </>
      )}
    </div>
  )
}