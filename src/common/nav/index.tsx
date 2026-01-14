"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-md shadow-md"
            : "bg-gradient-to-l from-white to-purple-50"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo1.png"
              alt="Mentozo Logo"
              width={32}
              height={32}
              priority
              className="w-15 h-13"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center space-x-2 lg:flex">
            {navigation.map((menu) => (
              <li key={menu.href}>
                <Link
                  href={menu.href}
                  className="rounded-lg px-3 py-2 text-lg font-semibold text-purple-600 transition hover:bg-purple-100"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-block rounded-sm bg-purple-600 px-6 py-2 text-lg font-medium text-white shadow-md transition hover:bg-purple-700"
          >
            Apply Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden rounded-md p-2 text-purple-600 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 z-50 w-full bg-white shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col justify-center text-center">
          {navigation.map((menu) => (
            <li key={menu.href}>
              <Link
                href={menu.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              >
                {menu.name}
              </Link>
            </li>
          ))}

          <li className="px-6 py-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-sm bg-purple-600 px-6 py-3 text-center text-lg font-medium text-white transition hover:bg-purple-700"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
