"use client"

import { useState, useEffect } from "react"
import { Menu, X, Share2, Eye, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Cars", href: "#cars" },
  { name: "3D View", href: "#3d-view" },
  { name: "About", href: "#stats" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Premium Motors - Luxury Car Dealership",
        text: "Discover our premium collection of luxury vehicles",
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element instanceof HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }
}


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              PREMIUM MOTORS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-green-400">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button variant="ghost" size="sm" onClick={handleShare} className="text-white hover:text-blue-400">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <div className="flex items-center text-sm text-gray-400">
              <Eye className="w-4 h-4 mr-1" />
              1,247
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-white hover:text-blue-400 hover:bg-white/5"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <Button variant="ghost" size="sm" className="text-white hover:text-green-400">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button variant="ghost" size="sm" onClick={handleShare} className="text-white hover:text-blue-400">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <div className="flex items-center text-sm text-gray-400">
                <Eye className="w-4 h-4 mr-1" />
                1,247
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
