"use client";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Footer() {
    const footerLinks = [
        {
            title: "Product",
            links: ["Features", "Services", "Security", "Resources"],
        },
        {
            title: "Company",
            links: ["About", "Blog", "Press", "Careers"],
        },
        {
            title: "Support",
            links: ["Help Center", "Privacy Policy", "Terms of Service", "Contact"],
        },
    ];

    const socialLinks = [
        { href: "https://x.com", icon: <BsTwitterX /> },
        { href: "https://linkedin.com", icon: <BsLinkedin /> },
        { href: "https://github.com", icon: <BsGithub /> },
        { href: "https://instagram.com", icon: <BsInstagram /> },
    ];

    return (
        <footer className="bg-white py-12">
            <div className="container mx-auto px-4">
                <nav className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold mb-4 text-blue-900">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="" className="text-gray-600 hover:text-blue-600">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-800">
                            Connect
                        </h4>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ href, icon }) => (
                                <a key={href} href={href} className="text-gray-600 hover:text-blue-600 text-xl">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                <div className="mt-8 pt-8 text-center border-t">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} TokenEstate. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}