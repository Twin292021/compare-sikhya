"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  course: string
  image: string
  message: string
}

const testimonialsContent = {
  badge: "Testimonials",
  heading: "What Students Say About Compare Shiksha",
  description:
    "Hear directly from students who trusted Compare Shiksha for guidance, admissions, and online degree success.",

  testimonials: [
    {
      name: "Rohit Sharma",
      role: "Student",
      course: "B.Com (Online)",
      image: "/testimonials/user1.jpg", // add your image here
      message:
        "Compare Shiksha completely changed the way I approached my education. Their guidance helped me select the right online degree course, and the admission process was smoother than I ever expected. The team was supportive, knowledgeable, and always just a call away."
    },
    {
      name: "Priya Verma",
      role: "Student",
      course: "MBA (Online)",
      image: "/testimonials/user2.jpg",
      message:
        "I was confused between multiple universities, but Compare Shiksha gave me honest comparisons and clear guidance. I felt confident and supported throughout my admission journey."
    },
    {
      name: "Ankita Singh",
      role: "Student",
      course: "MCA (Online)",
      image: "/testimonials/user3.jpg",
      message:
        "From shortlisting universities to final enrollment, everything was handled professionally. I highly recommend Compare Shiksha to anyone planning online education."
    }
  ] as Testimonial[]
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">

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
            {testimonialsContent.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {testimonialsContent.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-gray-600"
          >
            {testimonialsContent.description}
          </motion.p>
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsContent.testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col rounded-sm bg-white
                         p-6 shadow-sm transition hover:shadow-lg"
            >
              {/* Quote Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center
                              rounded-full bg-purple-100 text-purple-600">
                <Quote className="h-5 w-5" />
              </div>

              {/* Message */}
              <p className="mb-6 text-sm text-gray-600 sm:text-base">
                “{item.message}”
              </p>

              {/* User Info */}
              <div className="mt-auto flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {item.course}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
