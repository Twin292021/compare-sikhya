"use client"

import { motion } from "framer-motion"
import Image from "next/image"

/* =====================
   TYPES
===================== */
type Partner = {
  name: string
  logo: string
  courses: string
}

/* =====================
   CONSTANT DATA
===================== */
const partnersContent = {
  badge: "Partners",
  heading: "Our Trusted University Partners",
  description:
    "We collaborate with India's leading universities to offer recognized, flexible, and career-focused online degree programs.",

  partners: [
    { name: "Sharda University", logo: "/partners/sharada.png", courses: "8" },
    { name: "NMIMS Online", logo: "/partners/nmims.png", courses: "8" },
    { name: "IIM Kozhikode", logo: "/partners/iimklogofull.png", courses: "5" },
    { name: "Manipal University Jaipur", logo: "/partners/jaipurManipalOnline.webp", courses: "7" },
    { name: "DY Patil Pune Online", logo: "/partners/dyPatilPuneUniversityOnline.webp", courses: "28" },
    { name: "LPU Online", logo: "/partners/lpuOnline.webp", courses: "26" },
    { name: "DY Patil Mumbai University", logo: "/partners/dyPatilMumbaiUniversityOnline.webp", courses: "12" },
    { name: "CU Online", logo: "/partners/chandigarhUniversityOnline.webp", courses: "26" },
    { name: "Amity University Online", logo: "/partners/amity_noida_logo.png", courses: "12" },
    { name: "Rushford Business School", logo: "/partners/rush-ford.webp", courses: "15" },
    { name: "UPES University Online", logo: "/partners/upes-university.webp", courses: "21" },
    { name: "Uttaranchal Online University", logo: "/partners/uttranchalOnline.webp", courses: "10" },
    { name: "Shoolini University", logo: "/partners/shoolini.webp", courses: "20" },
    { name: "OP Jindal University", logo: "/partners/opJindalUniversityOnline.webp", courses: "6" },
    { name: "Vignan University", logo: "/partners/vignan.webp", courses: "15" }
  ] as Partner[]
}

/* =====================
   PAGE
===================== */
export default function Page() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block rounded-full bg-purple-100 px-4 py-2
                       text-sm font-medium text-purple-700"
          >
            {partnersContent.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {partnersContent.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-gray-600"
          >
            {partnersContent.description}
          </motion.p>

        </div>
      </section>

      {/* ================= PARTNERS GRID ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partnersContent.partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.92, rotateX: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.04
                }}
                whileHover={{
                  y: -10,
                  rotateZ: 0.3
                }}
                className="group relative flex flex-col items-center
                           rounded-sm border border-gray-200 bg-white p-8
                           text-center shadow-sm transition hover:shadow-xl"
              >
                {/* LOGO */}
                <div className="relative mb-6 flex h-24 w-full items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="max-h-20 object-contain transition-transform
                               group-hover:scale-105"
                  />
                </div>

                {/* NAME */}
                <h3 className="mb-3 text-sm font-semibold text-gray-800">
                  {partner.name}
                </h3>

                {/* COURSES */}
                <span className="mt-auto inline-flex items-center rounded-full
                                 bg-purple-100 px-4 py-1.5 text-xs font-medium
                                 text-purple-700">
                  {partner.courses} Courses Available
                </span>

                {/* Hover Accent */}
                <div className="pointer-events-none absolute inset-0
                                rounded-sm ring-1 ring-transparent
                                group-hover:ring-purple-300 transition" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
