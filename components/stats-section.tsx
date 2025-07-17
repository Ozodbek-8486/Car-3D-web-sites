"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const stats = [
  { number: 2500, label: "Cars Sold", suffix: "+" },
  { number: 15000, label: "Happy Customers", suffix: "+" },
  { number: 150, label: "Models in Stock", suffix: "" },
  { number: 25, label: "Years Experience", suffix: "" },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          stats.forEach((stat, index) => {
            gsap.to(
              {},
              {
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  const progress = this.progress()
                  const currentValue = Math.floor(stat.number * progress)
                  setAnimatedStats((prev) => {
                    const newStats = [...prev]
                    newStats[index] = currentValue
                    return newStats
                  })
                },
              },
            )
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has made us the premier destination for luxury automotive experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
                    {animatedStats[index].toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
