"use client"

import { BookOpen, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const aboutContent = {
  badge: "About Us",
  title: "Helping Students Choose the Right Future",
  description:
    "Compare Shiksha is a modern education counseling platform designed to help students discover, compare, and select the best colleges, courses, and career paths with confidence.",

  highlights: [
    {
      icon: GraduationCap,
      text: "Compare colleges, courses, fees, and placements in one platform"
    },
    {
      icon: BookOpen,
      text: "Get personalized guidance from experienced education counselors"
    },
    {
      icon: Users,
      text: "Trusted by students and parents across India"
    }
  ],

  image: {
    src: "/about/about.svg",
    alt: "Students planning their education future"
  }
}

export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">

        {/* ================= HEADING ================= */}
        <div className="mb-12 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-purple-400/10 px-4 py-2
                       text-sm font-medium text-purple-600"
          >
            {aboutContent.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
          >
            {aboutContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-gray-600"
          >
            {aboutContent.description}
          </motion.p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl"
          >
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              width={1200}
              height={800}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* ================= CONTENT ================= */}
          <div className="space-y-6">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              {aboutContent.description}
            </motion.p>

            <ul className="space-y-4 pt-4">
              {aboutContent.highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center
                                     rounded-lg bg-purple-100 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-gray-700 sm:text-base">
                      {item.text}
                    </p>
                  </motion.li>
                )
              })}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
