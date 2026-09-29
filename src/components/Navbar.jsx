import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50   bg-[#FFF9F0]/95 px-4 py-2 backdrop-blur-sm sm:px-6">
            <div className="mx-auto max-w-7xl">
                {/* Top navigation */}
                <div className="flex items-center justify-between">

                    {/* Brand */}
                    <div className="relative w-20%">
                        <Link
                            to="/"
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }

                        >

                            <h1
                                className="font-heading text-6xl text-[#060606] transition hover:text-[#afa3a3]">
                                ChoupiJuni</h1>
                            <p
                                className="font-body absolute left-36  top-14 text-sm text-[#060606] tracking-widest transition hover:text-[#afa3a3]">
                                Growing With You</p>



                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-8 md:flex">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-sm font-semibold text-[#676363]"
                                        : "rounded-md border border-dotted border-transparent px-2 py-1 text-sm font-medium text-[#a09b9b] transition-colors duration-600 ease-in-out hover:border-[#9b8d8d] hover:border-rounded-lg"
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <a
                            href={`https://wa.me/919566761489?text=${encodeURIComponent("Hi! I’d like to place an order. Could you please help me with the ordering process?"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[#8b7a7a] px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-[background-color,color,box-shadow,translate] duration-800 ease-in-out hover:-translate-y-0.5 hover:bg-[#1B9A58] hover:text-white hover:shadow-md">
                            Order on WhatsApp
                        </a>

                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden transition text-[#8E8484]"
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

                

                {/* Mobile navigation */}
                <div
                    className={`fixed right-0 top-18.25 z-40 w-[85vw] max-w-[320px] md:hidden rounded-l-2xl border border-[#8e8484] bg-white p-3 shadow-lg transition-transform duration-500 ease-in-out ${isMenuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                        }`}
                >
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "block rounded-xl bg-[#afa3a346] px-4 py-3 font-semibold text-[#676363]"
                                    : "block rounded-xl px-4 py-3 font-medium text-[#a09b9b] transition hover:bg-[#EAF5FF] hover:text-[#2878B8]"
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <a
                        href={`https://wa.me/919566761489?text=${encodeURIComponent("Hi! I’d like to place an order. Could you please help me with the ordering process?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block rounded-xl bg-[#8e8484] px-4 py-3 text-center font-semibold text-white shadow-sm"
                    >
                        Order on WhatsApp
                    </a>
                </div>




            </div>

        </nav>
    );
}

export default Navbar;