"use client"

import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
  ],
  services: [
    { name: "Buy a Car", href: "#" },
    { name: "Sell Your Car", href: "#" },
    { name: "Financing", href: "#" },
    { name: "Insurance", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "#" },
    { name: "Service Center", href: "#" },
    { name: "Warranty", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
              PREMIUM MOTORS
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience luxury redefined with our premium collection of the world's finest automobiles. Your dream car
              awaits.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Premium Motors. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-900/50 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
