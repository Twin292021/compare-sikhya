"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Wallet,
  BookOpenCheck,
  FileCheck,
  Target,
  Compass
} from "lucide-react"

/* ================= DATA ================= */

const servicesContent = {
  heading: "Expert Guidance for Every Step of Your Online Education",
  subheading:
    "From choosing the right course to planning your future after graduation, Compare Shiksha supports you at every stage of your journey.",

  image: "/services/service.svg",

  services: [
    {
      title: "Education Consulting",
      icon: GraduationCap,
      text:
        "Personalized consulting to help you make confident decisions about your online graduation journey, aligned with your academic background and career goals."
    },
    {
      title: "Financial Guidance",
      icon: Wallet,
      text:
        "Clear guidance on fees, EMI options, scholarships, and flexible payment plans so finances never become a barrier to education."
    },
    {
      title: "Course Consulting",
      icon: BookOpenCheck,
      text:
        "Expert support to identify future-ready courses that match your interests, strengths, and long-term career ambitions."
    },
    {
      title: "Admission Review & Support",
      icon: FileCheck,
      text:
        "End-to-end admission assistance including application review, document checks, and submission tracking."
    },
    {
      title: "Enrollment Strategy",
      icon: Target,
      text:
        "Smart enrollment planning with timelines, shortlisting, and priority decisions for a smooth academic start."
    },
    {
      title: "Post-Degree Guidance",
      icon: Compass,
      text:
        "Continued career and higher-education guidance after graduation to help you maximize your degree’s value."
    }
  ]
}

/* ================= PAGE ================= */

export default function Page() {
  return (
    <main className="bg-gradient-to-l from-white to-purple-50">

      {/* ================= HERO ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {servicesContent.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-gray-600"
          >
            {servicesContent.subheading}
          </motion.p>
        </div>
      </section>

      {/* ================= SPLIT LAYOUT ================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid gap-14 lg:grid-cols-2">

            {/* ================= STICKY IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-28 hidden h-fit overflow-hidden rounded-sm lg:block"
            >
              <Image
                src={servicesContent.image}
                alt="Services illustration"
                width={600}
                height={700}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* ================= SERVICES CARDS ================= */}
            <div className="space-y-8">
              {servicesContent.services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-sm
                               border border-gray-200 bg-white p-6
                               transition hover:border-purple-300 hover:shadow-md"
                  >
                    {/* Accent bar */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 scale-y-0
                                    origin-top transition group-hover:scale-y-100" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center
                                      rounded-sm bg-purple-100 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                          {service.title}
                        </h2>
                        <p className="mt-2 text-gray-600">
                          {service.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-white"
          >
            Ready to Take the Next Step in Your Education?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-purple-100"
          >
            Get expert guidance and personalized support from Compare Shiksha today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center
                         rounded-sm bg-white px-8 py-3
                         text-sm font-semibold text-purple-600
                         transition hover:bg-purple-50"
            >
              Apply for Counseling
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
