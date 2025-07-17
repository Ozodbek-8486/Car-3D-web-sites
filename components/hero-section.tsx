"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Award } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" },
      )

      gsap.fromTo(
        subtitleRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" },
      )

      gsap.fromTo(
        buttonsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.1, ease: "power3.out" },
      )

      gsap.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.4, ease: "power3.out" },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToCars = () => {
    const element = document.getElementById("cars")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://www.bilsport.se/api/images/d16625-d1-d7325-d8755555555555555/1980x1320/68e4b538-7714-5be8-88ce-357298f3bf5c.jpg"
          alt="Luxury car background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse hidden lg:block" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Drive the
              <span className="block bg-gradient-to-r from-blue-400 via-orange-400 to-red-400 bg-clip-text text-transparent gradient-animate">
                Future
              </span>
            </h1>

            <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Experience luxury redefined with our premium collection of the world's finest automobiles. Where
              performance meets perfection.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={scrollToCars}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg group"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg group bg-transparent"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">Award Winning</span>
              </div>
              <div className="text-white font-semibold">2500+ Happy Customers</div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur-3xl" />
              {/* <img
                // src="https://www.cnet.com/a/img/resize/0adc9549cd453bb4205641d38fd72adc32aef6d7/hub/2017/06/08/b73b8ca4-8785-489e-bc11-3d95f31a475d/2018-porsche-911-turbo-s-exclusive-3.jpg?auto=webp&fit=crop&height=1200&width=1200"
                alt="Featured luxury car"
                className="relative z-10 w-full max-w-2xl mx-auto float"
                style={{ borderRadius: "2.5rem" }}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
