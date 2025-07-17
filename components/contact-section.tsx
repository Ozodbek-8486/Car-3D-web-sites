"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get in
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to find your dream car? Contact our expert team for personalized assistance and exclusive offers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="contact-item">
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">
                      123 Premium Drive, Luxury District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@premiummotors.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Hours</h4>
                    <p className="text-gray-300">
                      Mon - Fri: 9:00 AM - 8:00 PM
                      <br />
                      Sat - Sun: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-item">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-300">Interactive Map</p>
                  <p className="text-sm text-gray-400 mt-2">Premium Motors Showroom Location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-item">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer bg-gray-900/50 border-white/20 text-white placeholder-transparent focus:border-blue-400 h-12"
                    required
                  />
                  <label className="absolute left-3 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400">
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer bg-gray-900/50 border-white/20 text-white placeholder-transparent focus:border-blue-400 h-12"
                    required
                  />
                  <label className="absolute left-3 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer bg-gray-900/50 border-white/20 text-white placeholder-transparent focus:border-blue-400 h-12"
                />
                <label className="absolute left-3 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400">
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={6}
                  className="peer bg-gray-900/50 border-white/20 text-white placeholder-transparent focus:border-blue-400 resize-none"
                  required
                />
                <label className="absolute left-3 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400">
                  Message
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold py-4 text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
