// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    /* ================= FOOTER DATA ================= */
    const footerData = {
        brand: {
            name: "COMPARE SIKHYA",
            // logo: "/logo/logo1.svg", // update path if needed
            description:
                "Empowering students with expert guidance, transparent counseling, and end-to-end support to choose the right online degree programs with confidence.",
        },
        quickLinks: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Partners", href: "/partners" },
            { label: "Services", href: "/services" },
            { label: "Contact Us", href: "/contact" },
        ],
        contact: {
            location: "Noida, Delhi NCR, India",
            email: "hr@mentozo.com",
            phone: "+91-7011512300",
        },
        legal: [
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy-policy" },
        ],
    };

    /* ================= FOOTER UI ================= */
    return (
        <footer className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 py-12 text-gray-300">
            <div className="container mx-auto px-6 lg:px-20 py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

                    {/* Brand */}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-4 justify-center md:justify-start">
                            {/* <Image
                                src={footerData.brand.logo}
                                alt={footerData.brand.name}
                                width={120}
                                height={60}
                                className="mb-4 w-16 h-12"
                            /> */}
                            <h3 className="text-white text-5xl font-semibold mb-4">
                                {footerData.brand.name}
                            </h3>

                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            {footerData.brand.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            {footerData.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <span className="text-white font-medium">Location</span>
                                <br />
                                {footerData.contact.location}
                            </li>
                            <li>
                                <span className="text-white font-medium">Email</span>
                                <br />
                                <a
                                    href={`mailto:${footerData.contact.email}`}
                                    className="hover:text-white"
                                >
                                    {footerData.contact.email}
                                </a>
                            </li>
                            <li>
                                <span className="text-white font-medium">Phone</span>
                                <br />
                                <a
                                    href={`tel:${footerData.contact.phone}`}
                                    className="hover:text-white"
                                >
                                    {footerData.contact.phone}
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} Mentozo. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        {footerData.legal.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-white transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
