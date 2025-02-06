"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-300" : "bg-gray-300"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-black ml-10 hover:text-blue-700 transition-colors">
            
          </Link>
          <img
        src="https://www.aganitha.ai/wp-content/uploads/2023/05/aganitha-logo.png"
        alt="Aganitha Logo"
        className="h-12 w-auto"
      />

          <nav className="hidden md:flex items-center justify-center space-x-6 flex-grow">
            
            <Link href="#" className="text-black hover:text-blue-800 transition-colors hover:scale-105">
              Disease Areas
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 transition-colors hover:scale-105">
              Solutions
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 transition-colors hover:scale-105">
              Services
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 transition-colors hover:scale-105">
              Case Studies
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 transition-colors hover:scale-105">
              Company
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 transition-colors hover:scale-105">
              Blogs
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-500/50 transition-all">
              Contact Us
            </Button>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 backdrop-blur-md border-t border-gray-700 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-105">
                Disease Areas
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-105">
                Solutions
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-105">
                Services
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-105">
                Case Studies
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-105">
                Company
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-105">
                Blogs
              </Link>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-purple-500/50 transition-all">
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
