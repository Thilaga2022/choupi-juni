import { Link } from "react-router-dom";

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
];

function Footer() {
    return (
        <footer className="border-t border-[#D9ECFA] bg-[#BDB2B0] px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div className="relative">
                        <Link
                            to="/"
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                            className=" text-2xl  tracking-widest font-heading text-[#060606]"
                        >
                            ChoupiJuni
                        </Link>

                        <p className="absolute left-17 top-7 max-w-xs text-[7px] tracking-widest text-[#060606]">
                            Growing With You
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
                                    className="text-white transition hover:text-[#e5dede]"
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
                            href="https://wa.me/919566761489?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.%20Could%20you%20please%20help%20me%3F"
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
                    <p className="text-sm text-white/70">
                        © {new Date().getFullYear()} ChoupiJuni. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;