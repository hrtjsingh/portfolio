'use client'
import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"

const Header = dynamic(() => import('@/components/Header'))
const About = dynamic(() => import('@/components/About'))
const WorkExperience = dynamic(() => import('@/components/WorkExperience'))
const Education = dynamic(() => import('@/components/Education'))
const Skills = dynamic(() => import('@/components/Skills'))
const ProfessionalProjects = dynamic(() => import('@/components/ProfessionalProjects'))
const PersonalProjects = dynamic(() => import('@/components/PersonalProjects'))

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const main = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    main?.current?.offsetHeight
    canvas.width = main?.current?.offsetWidth ?? window.innerWidth
    canvas.height = main?.current?.offsetHeight ?? window.innerHeight

    const particles: { x: number; y: number; radius: number; vx: number; vy: number }[] = []

    for (let i = 0; i < 240; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.fill()
      })
    }
    console.log(main?.current?.offsetHeight)
    animate()

    const handleResize = () => {
      canvas.width = main?.current?.offsetWidth ?? window.innerWidth
      canvas.height = main?.current?.offsetHeight ?? window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div ref={main} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 p-8 relative overflow-hidden pt-10">
      <canvas
        ref={canvasRef}
        className=" inset-0 pointer-events-none  fixed"
        style={{ mixBlendMode: 'screen' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <Header />
        <About />
        <WorkExperience />
        {/* <Education /> */}
        <Skills />
        <ProfessionalProjects />
        <PersonalProjects />
      </div>
    </div>
  )
}