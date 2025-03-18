"use client"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  AlertCircle,
  BarChart3,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  X,
  Calendar,
  Users,
} from "lucide-react"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleLogout = () => {
    router.push("/login")
  }

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { path: "/studies", label: "Studies", icon: <BarChart3 className="h-5 w-5" /> },
    { path: "/patients", label: "Patients", icon: <Users className="h-5 w-5" /> },
    { path: "/chat", label: "Protocol Assistant", icon: <MessageSquare className="h-5 w-5" /> },
    { path: "/events", label: "Adverse Events", icon: <AlertCircle className="h-5 w-5" /> },
    { path: "/calendar", label: "Calendar", icon: <Calendar className="h-5 w-5" /> },
    { path: "/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/cerino.png"
              alt="Cerino.AI Logo"
              width={110}
              height={30}
              priority
            />
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button variant={isActive(item.path) ? "default" : "ghost"} className="w-full justify-start">
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Button>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full border-t p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1 lg:ml-0" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}

