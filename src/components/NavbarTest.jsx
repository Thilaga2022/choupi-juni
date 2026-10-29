import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-rose-50 bg-[#FFF9F0]/95 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        {/* Top navigation */}
        <div className="flex items-center justify-between">

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
            className="text-5xl tracking-widest font-heading text-[#060606] transition hover:text-[#6CB4EE]"
          >
            ChoupiJuni
          </Link>
          <p className="absolute left-33 top-11 max-w-xs text-[15px] tracking-widest text-[#060606]">
              Growing With You
            </p>
            </div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold tracking-[0.12em] transition-colors duration-200 xl:text-sm ${isActive
                    ? "text-green-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-rose-100"
                    : "text-stone-500 hover:text-stone-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/919597996585?text=Hi! I would like to place an order. Could you help me with the ordering process"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-300 px-5 py-2.5 text-sm font-semibold text-green-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-100 hover:border hover:border-rose-300 hover:shadow-md"
            >
              Order on WhatsApp
            </a>

          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="mt-4 rounded-2xl border border-rose-300 bg-white p-3 shadow-sm md:hidden">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-xl bg-rose-100 px-4 py-3 font-semibold text-green-900"
                    : "block rounded-xl px-4 py-3 font-medium text-stone-500 transition hover:bg-pink-100 hover:text-[#2878B8]"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/919597996585?text=Hi! I would like to place an order. Could you help me with the ordering process"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-xl bg-stone-300 px-4 py-3 text-center font-semibold text-green-900 transition"
            >
              Order on WhatsApp
            </a>

          </div>
        )}
      </div>

    </nav>
  );
}

export default Navbar;