"use client"

import { motion } from "framer-motion"
import {
  Clock,
  Mail,
  MapPin,
  Phone
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

/* ================= DATA ================= */

const ONLINE_COURSES = [
  { label: "Online MBA", value: "online mba" },
  { label: "Online MCA", value: "online mca" },
  { label: "Online BBA", value: "online bba" },
  { label: "Online BCA", value: "online bca" },
  { label: "Online M.Com", value: "online mcom" },
  { label: "Online B.Com", value: "online bcom" },
  { label: "Career Counselling", value: "career counselling" },
  { label: "Fee & EMI Details", value: "fee emi details" }
]

/* ================= PAGE ================= */

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "online mba",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzDjAWSTa-w7M8tzMaoJ13CagrvGnqtWZmCRuaUsrW_-sFLG99UULb_Y0pBIF7nwpEaPQ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(formData)
        }
      )

      setSubmitStatus("success")
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "online mba",
        message: ""
      })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(""), 3000)
    }
  }

  return (
    <main className="bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block rounded-full bg-purple-100 px-4 py-2
                       text-sm font-medium text-purple-700"
          >
            Contact Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Book Your Free Counselling Session
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-gray-600"
          >
            Get expert guidance on courses, fees, admissions, and career paths —
            tailored to your goals.
          </motion.p>
        </div>
      </section>

      {/* ================= FORM + IMAGE ================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-2 items-start">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-28 hidden lg:block rounded-sm overflow-hidden"
            >
              <Image
                src="/contact/contact.svg"
                alt="Counselling Illustration"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-sm bg-white p-8 shadow-md relative"
            >
              {submitStatus && (
                <div
                  className={`mb-6 rounded-sm px-4 py-3 text-sm ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus === "success"
                    ? "Form submitted successfully!"
                    : "Something went wrong. Please try again."}
                </div>
              )}

              <div className="space-y-5">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  maxLength={10}
                  pattern="[6-9]{1}[0-9]{9}"
                  className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none"
                />

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none"
                >
                  {ONLINE_COURSES.map(course => (
                    <option key={course.value} value={course.value}>
                      {course.label}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your goals or questions"
                  className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-sm bg-purple-600 py-3 text-sm
                             font-semibold text-white transition
                             hover:bg-purple-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Book Free Counselling"}
                </button>
              </div>
            </motion.form>

          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, title: "Phone", value: "+91-7011512300" },
            { icon: Mail, title: "Email", value: "info@compareshiksha.com" },
            { icon: MapPin, title: "Location", value: "Noida, Delhi, India" },
            { icon: Clock, title: "Assistance Hours", value: "Mon - Fri: 10am - 6pm" }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-sm bg-white p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center
                                rounded-sm bg-purple-100 text-purple-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{item.value}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.51076219123!2d77.31942469170664!3d28.52232777370292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1766821594679!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />
          </motion.div>
        </div>
      </section>

    </main>
  )
}
