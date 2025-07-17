"use client"

import { useEffect, useRef, useState } from "react"
import { useParams } from "next/navigation"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Eye, Star, Shield, Zap, Settings, Car } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PresentationControls } from "@react-three/drei"
import { carsDatabase } from "@/lib/cars-data"

function CarModel3D({ carName }: { carName: string }) {
  const meshRef = useRef()

  // Different car models based on car name
  const getCarColor = (name: string) => {
    if (name.includes("Tesla")) return "#1e40af"
    if (name.includes("BMW")) return "#0f172a"
    if (name.includes("Porsche")) return "#dc2626"
    if (name.includes("Mercedes")) return "#374151"
    if (name.includes("Audi")) return "#059669"
    if (name.includes("Lamborghini")) return "#f59e0b"
    return "#1e40af"
  }

  return (
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      {/* Main Body */}
      <mesh ref={meshRef} position={[0, -1, 0]} scale={2}>
        <boxGeometry args={[2, 0.5, 4]} />
        <meshStandardMaterial color={getCarColor(carName)} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cabin */}
      <mesh position={[0, -0.3, 0]} scale={2}>
        <boxGeometry args={[1.8, 0.8, 3.5]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Wheels */}
      {[-1.5, 1.5].map((x, i) => (
        <group key={i}>
          <mesh position={[x, -1.2, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2]} />
            <meshStandardMaterial color="#2d3748" />
          </mesh>
          <mesh position={[x, -1.2, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2]} />
            <meshStandardMaterial color="#2d3748" />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      <mesh position={[0.8, -0.8, 2]} scale={[0.3, 0.2, 0.1]}>
        <sphereGeometry />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.8, -0.8, 2]} scale={[0.3, 0.2, 0.1]}>
        <sphereGeometry />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
    </PresentationControls>
  )
}

export default function CarDetailPage() {
  const params = useParams()
  const carId = params.id as string
  const car = carsDatabase[carId]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  if (!car) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link href="/">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: car.name,
        text: `Check out this ${car.name} at Premium Motors`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Car },
    { id: "specs", label: "Specifications", icon: Settings },
    { id: "performance", label: "Performance", icon: Zap },
    { id: "safety", label: "Safety", icon: Shield },
  ]

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-blue-400">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Collection
              </Button>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleShare} className="text-white hover:text-blue-400">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <div className="flex items-center text-sm text-gray-400">
                <Eye className="w-4 h-4 mr-1" />
                {car.views}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Car Header */}
        <div className="fade-in text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-blue-400 text-lg font-medium">{car.brand}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{car.year}</span>
            <span className="text-gray-400">•</span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                car.availability === "In Stock"
                  ? "bg-green-500/20 text-green-400"
                  : car.availability === "Limited Stock"
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-red-500/20 text-red-400"
              }`}
            >
              {car.availability}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">{car.model}</h1>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <span className="text-3xl font-bold text-orange-400">{car.price}</span>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
              <span className="text-lg">{car.rating}</span>
            </div>
            <span className="text-gray-400 text-lg">{car.category}</span>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{car.detailedDescription}</p>
        </div>

        {/* Image Gallery */}
        <div className="fade-in mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Image */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src={car.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${car.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm">
                    {currentImageIndex + 1} / {car.images.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="space-y-4">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-full h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex ? "border-blue-400 scale-105" : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${car.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {index === currentImageIndex && <div className="absolute inset-0 bg-blue-400/20" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="fade-in mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="fade-in mb-16">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg border border-white/10 hover:border-blue-400/30 transition-colors"
                    >
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Specs */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(car.specs)
                    .slice(0, 8)
                    .map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg border border-white/10"
                      >
                        <span className="text-blue-400 font-medium">{key}</span>
                        <span className="text-white font-semibold">{value}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Engine */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Engine</h3>
                <div className="space-y-3">
                  {Object.entries(car.engine).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Performance</h3>
                <div className="space-y-3">
                  {Object.entries(car.performance).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-red-400">Dimensions</h3>
                <div className="space-y-3">
                  {Object.entries(car.dimensions).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interior */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-green-400">Interior</h3>
                <div className="space-y-3">
                  {Object.entries(car.interior).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warranty */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Warranty</h3>
                <div className="space-y-3">
                  {Object.entries(car.warranty).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Performance Metrics</h3>
                <div className="space-y-6">
                  {Object.entries(car.performance).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{key.replace(/([A-Z])/g, " $1")}</span>
                        <span className="text-white font-bold">{value}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Engine Details</h3>
                <div className="space-y-4">
                  {Object.entries(car.engine).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300 font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">Safety Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {car.safety.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg border border-green-400/20"
                    >
                      <Shield className="w-5 h-5 text-green-400 mr-4 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Warranty Coverage</h3>
                <div className="space-y-4">
                  {Object.entries(car.warranty).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-6 bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-lg border border-purple-400/20"
                    >
                      <h4 className="text-purple-400 font-semibold mb-2 capitalize">{key} Warranty</h4>
                      <p className="text-white text-lg font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3D Model Viewer */}
        <div className="fade-in mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Interactive 3D Model</h2>
          <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: "transparent" }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, -10, -5]} intensity={0.5} />
              <spotLight position={[0, 10, 0]} intensity={0.5} />

              <Suspense fallback={null}>
                <CarModel3D carName={car.name} />
                <Environment preset="city" />
              </Suspense>

              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={3}
                maxDistance={15}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 6}
              />
            </Canvas>

            {/* 3D Controls Info */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-sm space-y-1">
                <div>🖱️ Drag to rotate</div>
                <div>🔍 Scroll to zoom</div>
                <div>📱 Touch & drag on mobile</div>
              </div>
            </div>

            {/* Car Model Info */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-bold text-lg mb-1">{car.brand}</h3>
              <p className="text-blue-400 font-semibold">{car.model}</p>
              <p className="text-sm text-gray-300 mt-1">3D Interactive Model</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-in text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience This {car.brand}?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our expert team to schedule a test drive, get personalized financing options, or learn more about
              this exceptional vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 text-lg"
              >
                Schedule Test Drive
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Get Financing Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-400/30 text-orange-400 hover:bg-orange-400/10 px-8 py-4 text-lg bg-transparent"
              >
                Contact Specialist
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
