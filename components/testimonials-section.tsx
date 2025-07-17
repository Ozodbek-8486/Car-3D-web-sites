"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CEO, Tech Innovations",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Exceptional service and an incredible selection of premium vehicles. The team went above and beyond to find the perfect car for my needs.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Investment Banker",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The 3D viewing experience was revolutionary. I could examine every detail of my dream car before making the purchase. Absolutely fantastic!",
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Entrepreneur",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Premium Motors redefined luxury car buying for me. The personalized service and attention to detail is unmatched in the industry.",
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers who have experienced the Premium Motors
            difference.
          </p>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400/50"
                />
                <div>
                  <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="testimonial-card bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400/50"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">"{testimonials[currentIndex].text}"</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-400" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
