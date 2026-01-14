"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  GraduationCap,
  Wallet,
  BookOpenCheck,
  FileCheck,
  Target,
  Compass
} from "lucide-react"

const servicesContent = {
  sectionTitle: "Services",
  heading: "End-to-End Support for Your Online Degree Admission Needs",
  description:
    "We provide complete guidance and support throughout your online education journey — from choosing the right course to post-degree planning.",

  image: {
    src: "/images/service.svg", // replace with your image
    alt: "Online education and admission support"
  },

  services: [
    {
      icon: GraduationCap,
      title: "Education Consulting",
      text: "Guidance to simplify admissions and support your academic goals."
    },
    {
      icon: Wallet,
      title: "Financial Service",
      text: "Expert consulting to drive growth and operational success."
    },
    {
      icon: BookOpenCheck,
      title: "Course Consulting",
      text: "Guidance to help you choose and succeed in the right online graduation courses."
    },
    {
      icon: FileCheck,
      title: "Application Review & Support",
      text: "Thorough guidance and reliable support to ensure your admission process is smooth and secure."
    },
    {
      icon: Target,
      title: "Enrollment Strategy",
      text: "Developing customized admission plans to help you achieve your educational goals efficiently."
    },
    {
      icon: Compass,
      title: "Post Degree Guidance",
      text: "Support and advice for your educational journey after graduation."
    }
  ]
}

export default function Services() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* ================= HEADING ================= */}
        <div className="mb-14 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-purple-100 px-4 py-2
                       text-sm font-medium text-purple-700"
          >
            {servicesContent.sectionTitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {servicesContent.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-gray-600"
          >
            {servicesContent.description}
          </motion.p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-sm"
          >
            <Image
              src={servicesContent.image.src}
              alt={servicesContent.image.alt}
              width={1000}
              height={800}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* ================= SERVICES LIST ================= */}
          <div className="space-y-6">
            {servicesContent.services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 rounded-sm bg-white p-5 shadow-sm
                             hover:shadow-md transition"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center
                                  rounded-sm bg-purple-100 text-purple-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm sm:text-base">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
