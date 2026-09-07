import { Link } from "react-router-dom";

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
];

function Footer() {
    return (
        <footer className="border-t border-[#D9ECFA] bg-[#293241] px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="text-2xl font-bold tracking-tight text-[#6CB4EE]"
                        >
                            ChoupiJuni
                            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#FFD95A]" />
                        </Link>

                        <p className="mt-4 max-w-xs text-sm text-white/70">
                            Cute, practical and thoughtful products made for little ones.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Quick Links
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-white/70 transition hover:text-[#6CB4EE]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Get in Touch
                        </h3>

                        <p className="mt-4 text-sm text-white/70">
                            Have a question or want to place an order?
                        </p>

                        <a
                            href="https://wa.me/YOUR_PHONE_NUMBER"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
                        >
                            WhatsApp Us
                        </a>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-white/10 pt-6 text-center">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} ChoupiJuni. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;