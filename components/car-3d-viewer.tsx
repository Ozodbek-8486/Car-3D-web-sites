"use client"

import { Suspense, useRef, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PorscheModel from "@/components/PorscheModel" // 🔄 import yo‘li to‘g‘ri bo‘lishi kerak

function LoadingSpinner() {
  return (
    <Html center>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
    </Html>
  )
}

export default function Car3DViewer() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="3d-view" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6">
            Interactive
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              3D Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore every angle of our premium vehicles with our interactive 3D viewer. Drag to rotate, zoom to inspect details.
          </p>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black">
          {!show3D ? (
            <>
              <img
                src="/models/porsche-2022.glb" // Placeholder image
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShow3D(true)}
                className="absolute bottom-6 right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg shadow-lg transition"
              >
                View in 3D
              </button>
            </>
          ) : (
            <>
              <Canvas camera={{ position: [0, 1, 6], fov: 45 }} style={{ background: "transparent" }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={<LoadingSpinner />}>
                  <PorscheModel />
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls />
              </Canvas>

              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-sm space-y-1">
                  <div>🖱️ Drag to rotate</div>
                  <div>🔍 Scroll to zoom</div>
                  <div>📱 Touch & drag on mobile</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="font-bold text-lg mb-2">Featured 3D Model</h3>
                <p className="text-blue-400 font-semibold">Porsche GT 911</p>
                <p className="text-sm text-gray-300 mt-1">Rotate to see every detail</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
