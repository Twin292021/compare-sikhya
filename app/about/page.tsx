"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  Smile,
  TrendingUp,
  ThumbsUp,
  CheckCircle,
  ArrowRight
} from "lucide-react"

/* ================= COUNTER ================= */

function Counter({
  value,
  suffix = "",
  duration = 1500
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="text-2xl font-bold text-purple-600">
      {count}
      {suffix}
    </span>
  )
}

/* ================= DATA ================= */

const progressContent = {
  heading: "Guiding Students Toward Smarter, Brighter Careers",
  image: "/about/about.svg",
  stats: [
    {
      label: "Student Satisfaction",
      value: 92,
      suffix: "%",
      icon: Smile
    },
    {
      label: "Enrollment Growth",
      value: 81,
      suffix: "%",
      icon: TrendingUp
    },
    {
      label: "Graduates Who Recommend Us",
      value: 95,
      suffix: "%",
      icon: ThumbsUp
    },
    {
      label: "Application Accuracy",
      value: 99,
      suffix: "%",
      icon: CheckCircle
    }
  ]
}

const missionVisionContent = {
  image: "/about/vision.svg",
  mission: {
    title: "Our Mission",
    text:
      "We empower students by simplifying access to trusted online education. Compare Shiksha provides expert guidance and personalized support for future-ready careers."
  },
  vision: {
    title: "Our Vision",
    text:
      "To become India's most trusted education guidance platform, helping learners make informed decisions and build successful careers."
  }
}

const processContent = {
  badge: "Process",
  heading: "Our Streamlined Process for Education Guidance",
  image: "/about/process.svg",
  steps: [
    {
      title: "Learn",
      text:
        "Explore top online programs tailored to your goals with expert guidance."
    },
    {
      title: "Grow",
      text:
        "Gain skills, confidence, and clarity as you progress through the right course."
    },
    {
      title: "Lead",
      text:
        "Turn your education into opportunities and take charge of your future."
    }
  ]
}

/* ================= PAGE ================= */

export default function Page() {
  return (
    <main>

      {/* ================= PROGRESS / COUNTERS ================= */}
      <section className="bg-gradient-to-l from-white to-purple-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                {progressContent.heading}
              </h1>

              <div className="grid grid-cols-2 gap-6">
                {progressContent.stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="rounded-sm bg-white p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center
                                      rounded-sm bg-purple-100 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                      />

                      <p className="mt-1 text-sm text-gray-600">
                        {stat.label}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-sm"
            >
              <Image
                src={progressContent.image}
                alt="About illustration"
                width={600}
                height={500}
                className="h-full w-full object-cover transform -scale-x-100"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-sm"
            >
              <Image
                src={missionVisionContent.image}
                alt="Mission illustration"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  {missionVisionContent.mission.title}
                </h2>
                <p className="text-gray-600">
                  {missionVisionContent.mission.text}
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  {missionVisionContent.vision.title}
                </h2>
                <p className="text-gray-600">
                  {missionVisionContent.vision.text}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">

          {/* Heading */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-2
                             text-sm font-medium text-purple-700">
              {processContent.badge}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {processContent.heading}
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Steps */}
            <div className="space-y-6">
              {processContent.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-sm bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center
                                  rounded-sm bg-purple-100 text-purple-600 font-semibold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {step.text}
                    </p>
                  </div>

                  {index !== processContent.steps.length - 1 && (
                    <ArrowRight className="ml-auto mt-2 h-5 w-5 text-purple-400" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-sm"
            >
              <Image
                src={processContent.image}
                alt="Process illustration"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  )
}
