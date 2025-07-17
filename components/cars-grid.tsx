"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Share2, Star, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { carsDatabase } from "@/lib/cars-data"

export default function CarsGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              y: 100,
              opacity: 0,
              rotationY: index % 2 === 0 ? -15 : 15,
              scale: 0.8,
            },
            {
              y: 0,
              opacity: 1,
              rotationY: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  const cars = Object.values(carsDatabase)

  return (
    <section id="cars" ref={gridRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Premium
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of the world's most prestigious automobiles, each representing the
            pinnacle of engineering excellence and luxury craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105"
            >
              {/* Car Image */}
              <div className="relative overflow-hidden">
                <img
                  src={car.images[0] || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm rounded-full">
                    {car.category}
                  </span>
                  {car.isNew && (
                    <span className="px-3 py-1 bg-green-500/80 backdrop-blur-sm text-white text-sm rounded-full">
                      New
                    </span>
                  )}
                  {car.isFeatured && (
                    <span className="px-3 py-1 bg-orange-500/80 backdrop-blur-sm text-white text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Availability Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 backdrop-blur-sm text-white text-sm rounded-full ${
                      car.availability === "In Stock"
                        ? "bg-green-500/80"
                        : car.availability === "Limited Stock"
                          ? "bg-orange-500/80"
                          : "bg-red-500/80"
                    }`}
                  >
                    {car.availability}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-white text-sm">{car.rating}</span>
                </div>

                {/* Discount Badge */}
                {car.discount && (
                  <div className="absolute bottom-4 right-4 bg-red-500/80 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-white text-sm font-semibold">{car.discount}</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 text-sm font-medium">{car.brand}</span>
                  <span className="text-gray-400 text-sm">{car.year}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{car.model}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <p className="text-3xl font-bold text-orange-400">{car.price}</p>
                  {car.originalPrice && (
                    <p className="text-lg text-gray-500 line-through">{car.originalPrice}</p>
                  )}
                </div>

                {/* Key Specifications */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Zap className="w-4 h-4 text-blue-400 mr-2" />
                    {car.specs.Acceleration || car.specs["Acceleration"]}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Shield className="w-4 h-4 text-orange-400 mr-2" />
                    {car.specs.Horsepower || car.specs["Horsepower"]}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-4 h-4 bg-red-400 rounded-full mr-2" />
                    {car.specs["Drive Type"] || car.specs["Drive"]}
                  </div>
                </div>

                {/* Financing Info */}
                {car.financing && (
                  <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                    <div className="text-sm text-gray-300">
                      <span className="text-green-400 font-semibold">{car.financing.monthlyPayment}/mo</span>
                      <span className="text-gray-400 ml-2">• {car.financing.apr} APR</span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link href={`/cars/${car.id}`}>
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 group/btn">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <div className="flex items-center space-x-3 text-gray-400">
                    <button className="hover:text-blue-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{car.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
