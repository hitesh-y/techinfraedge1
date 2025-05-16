"use client"

import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronDown,
  ChevronRight
} from "lucide-react"

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  // Check if user is authenticated
  useEffect(() => {
    if (status === "unauthenticated" && !pathname.includes("/admin/login")) {
      router.push("/admin/login")
    }
  }, [status, router, pathname])

  // Skip layout if not authenticated and not on login page
  if (status === "unauthenticated" && !pathname.includes("/admin/login")) {
    return null
  }

  // Skip layout on login page
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSubmenu = (menu) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(menu)
    }
  }

  const isActive = (path) => {
    return pathname === path
  }

  const isSubmenuActive = (paths) => {
    return paths.some(path => pathname.includes(path))
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/admin/dashboard",
    },
    {
      title: "Services",
      icon: <FileText className="h-5 w-5" />,
      submenu: true,
      submenuItems: [
        { title: "All Services", path: "/admin/services" },
        { title: "Add New Service", path: "/admin/services/new" },
      ],
      isActive: isSubmenuActive(["/admin/services"]),
    },
    {
      title: "Hero Banners",
      icon: <ImageIcon className="h-5 w-5" />,
      submenu: true,
      submenuItems: [
        { title: "All Banners", path: "/admin/banners" },
        { title: "Add New Banner", path: "/admin/banners/new" },
      ],
      isActive: isSubmenuActive(["/admin/banners"]),
    },
    {
      title: "Form Submissions",
      icon: <MessageSquare className="h-5 w-5" />,
      submenu: true,
      submenuItems: [
        { title: "Contact Forms", path: "/admin/forms/contact" },
        { title: "Popup Forms", path: "/admin/forms/popup" },
      ],
      isActive: isSubmenuActive(["/admin/forms"]),
    },
    {
      title: "Users",
      icon: <Users className="h-5 w-5" />,
      path: "/admin/users",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "/admin/settings",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar for desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:flex ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
            <Link href="/admin/dashboard" className="flex items-center">
              <Image
                src="https://jsbglobalinfotech.com/_next/image?url=%2Fassets%2Fimgs%2FLogo.jpeg&w=384&q=75"
                alt="globalinfotech Logo"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-semibold text-white">Admin</span>
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-1 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white lg:hidden"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md group transition-colors ${
                        item.isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-3">{item.title}</span>
                      </div>
                      {activeSubmenu === item.title ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {activeSubmenu === item.title && (
                      <div className="mt-1 ml-4 space-y-1">
                        {item.submenuItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className={`flex items-center pl-3 pr-2 py-2 text-sm font-medium rounded-md transition-colors ${
                              isActive(subItem.path)
                                ? "bg-indigo-600 text-white"
                                : "text-gray-400 hover:bg-gray-700 hover:text-white"
                            }`}
                          >
                            <span className="ml-3">{subItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? "bg-indigo-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-700">
            {session?.user && (
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                    {session.user.name?.charAt(0) || "A"}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{session.user.name || "Admin"}</p>
                  <p className="text-xs text-gray-400">{session.user.email}</p>
                </div>
              </div>
            )}
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="mt-4 flex items-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-1 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none hidden lg:block"
              >
                <Menu className="h-6 w-6" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-1 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center">
              {/* Add any header elements here */}
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75" onClick={toggleMobileMenu}></div>
            <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-gray-800 overflow-y-auto">
              <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
                <Link href="/admin/dashboard" className="flex items-center">
                  <Image
                    src="/assets/imgs/logo.svg"
                    alt="TechInfraEdge Logo"
                    width={40}
                    height={40}
                  />
                  <span className="ml-2 text-xl font-semibold text-white">Admin</span>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-1 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="px-2 py-4 space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.title)}
                          className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md group transition-colors ${
                            item.isActive
                              ? "bg-gray-700 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center">
                            {item.icon}
                            <span className="ml-3">{item.title}</span>
                          </div>
                          {activeSubmenu === item.title ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                        {activeSubmenu === item.title && (
                          <div className="mt-1 ml-4 space-y-1">
                            {item.submenuItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.path}
                                onClick={toggleMobileMenu}
                                className={`flex items-center pl-3 pr-2 py-2 text-sm font-medium rounded-md transition-colors ${
                                  isActive(subItem.path)
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                                }`}
                              >
                                <span className="ml-3">{subItem.title}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={toggleMobileMenu}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive(item.path)
                            ? "bg-indigo-600 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        {item.icon}
                        <span className="ml-3">{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 text-white">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}