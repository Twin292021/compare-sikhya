"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="bg-gradient-to-l from-white to-purple-50 overflow-hidden">
            <div className="container mx-auto flex min-h-[80vh] flex-col items-center px-4 py-16 sm:px-6 lg:flex-row lg:py-10">
                {/* ================= TEXT CONTENT ================= */}
                <motion.div
                    className="flex w-full items-center lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="max-w-2xl text-center lg:text-left">

                        {/* Badge */}
                        <motion.div
                            className="mb-4 inline-flex items-center gap-2 rounded-full
                 bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            🚀 Trusted by Students Across India
                        </motion.div>

                        <motion.h1
                            className="text-3xl font-bold leading-tight tracking-tight text-gray-900
                 sm:text-4xl
                 md:text-5xl
                 xl:text-6xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-purple-600">Compare Sikhya</span>
                            <span className="block">
                                Make Smarter Education Decisions
                            </span>
                        </motion.h1>

                        <motion.p
                            className="mt-6 text-base leading-relaxed text-gray-600
                 sm:text-lg
                 md:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Discover, compare, and choose the right colleges, courses, and career paths —
                            all in one powerful platform built to guide students toward confident decisions.
                        </motion.p>

                        {/* Feature highlights */}
                        <motion.ul
                            className="mt-6 grid gap-3 text-left text-gray-700 sm:grid-cols-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✔</span>
                                Compare colleges & courses instantly
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✔</span>
                                Personalized counseling support
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✔</span>
                                Verified data & transparent insights
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✔</span>
                                Career-focused recommendations
                            </li>
                        </motion.ul>

                        {/* CTA Buttons */}
                        <motion.div
                            className="mt-8 flex flex-col items-center gap-4
                 sm:flex-row sm:justify-center
                 lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center
                     rounded-sm bg-purple-600 px-8 py-4
                     text-base font-medium text-white
                     transition hover:bg-purple-700
                     sm:text-lg"
                                >
                                    Get Free Counseling
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center
                     rounded-sm border border-gray-300 px-8 py-4
                     text-base font-medium text-gray-600
                     transition-all duration-300
                     hover:border-purple-600 hover:text-purple-600
                     sm:text-lg"
                                >
                                    Explore Colleges →
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust line */}
                        <motion.p
                            className="mt-6 text-sm text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            No hidden fees • No spam • 100% student-focused
                        </motion.p>

                    </div>
                </motion.div>

                {/* ================= IMAGE CONTENT ================= */}
                <motion.div
                    className="mt-12 flex w-full items-center justify-center
                     lg:mt-0 lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <motion.div
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/images/hero-image.svg"
                            alt="Mentozo education platform illustration"
                            width={800}
                            height={300}
                            priority
                            className="mx-auto w-full
                         max-w-md
                         sm:max-w-lg
                         md:max-w-xl
                         lg:max-w-2xl
                         xl:max-w-3xl
                         h-auto object-contain"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}
