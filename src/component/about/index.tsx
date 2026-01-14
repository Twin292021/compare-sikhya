import { BookOpen, CheckCircle, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

const aboutContent = {
  badge: "About Compare Sikhya",
  title: "Helping Students Choose the Right Future",
  description:
    "Compare Sikhya is a modern education counseling platform designed to help students discover, compare, and select the best colleges, courses, and career paths with confidence.",

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
    src: "images/hero2.svg",
    alt: "Students planning their education future"
  }
}


export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= CONTENT ================= */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5
                             text-xs font-medium text-purple-700">
              {aboutContent.badge}
            </span>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {aboutContent.title}
            </h2>

            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              {aboutContent.description}
            </p>

            <ul className="space-y-4 pt-4">
              {aboutContent.highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center
                                     rounded-lg bg-purple-100 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-gray-700 sm:text-base">
                      {item.text}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ================= BIG IMAGE ================= */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={aboutContent.image.src}
                alt={aboutContent.image.alt}
                width={1200}
                height={800}
                priority
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
