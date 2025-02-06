"use client"

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-[40%] -left-[20%] w-[140%] h-[140%] bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-40" />
      <div className="absolute -top-[40%] -right-[20%] w-[140%] h-[140%] bg-gradient-radial from-pink-900/20 via-transparent to-transparent opacity-40" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#0F172A]/60 backdrop-blur-3xl" />
    </div>
  )
}

