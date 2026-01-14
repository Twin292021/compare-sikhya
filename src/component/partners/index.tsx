"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Partner = {
  name: string
  logo: string
  courses: string
}

const partnersContent = {
  badge: "Partners",
  heading: "Our Trusted University Partners",
  description:
    "We collaborate with top universities across India to offer recognized and career-focused online degree programs.",

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
    { name: "Uttaranchal University Online", logo: "/partners/uttranchalOnline.webp", courses: "10" },
    { name: "Shoolini University", logo: "/partners/shoolini.webp", courses: "20" },
    { name: "OP Jindal University", logo: "/partners/opJindalUniversityOnline.webp", courses: "6" },
    { name: "Vignan University", logo: "/partners/vignan.webp", courses: "15" }
  ] as Partner[]
}

export default function Partners() {
  return (
    <section className="bg-gradient-to-b from-purple-100/60 to-white py-16 lg:py-24">
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
            {partnersContent.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {partnersContent.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-gray-600"
          >
            {partnersContent.description}
          </motion.p>
        </div>

        {/* ================= PARTNERS GRID ================= */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partnersContent.partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center justify-center rounded-sm
                         border border-gray-200 bg-white p-6 text-center
                         transition-all hover:shadow-lg"
            >
              {/* Logo */}
              <div className="relative mb-4 h-16 w-32">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="mb-2 text-sm font-semibold text-gray-800">
                {partner.name}
              </h3>

              {/* Courses */}
              <span className="mt-auto inline-flex items-center rounded-full
                               bg-purple-100 px-3 py-1 text-xs font-medium
                               text-purple-700">
                {partner.courses} Courses
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
