"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CarsGrid from "@/components/cars-grid"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

// 👇 Car3DViewer endi faqat browserda yuklanadi
const Car3DViewer = dynamic(() => import("@/components/car-3d-viewer"), {
  ssr: false,
  loading: () => <div className="text-center text-gray-400 py-10">Loading 3D viewer...</div>, // optional
})

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <CarsGrid />
        <Car3DViewer />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
