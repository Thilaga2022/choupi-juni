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
    <nav className="sticky top-0 z-50 border-b border-[#D9ECFA] bg-[#FFF9F0]/95 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        {/* Top navigation */}
        <div className="flex items-center justify-between">

          {/* Brand */}
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-2xl font-bold tracking-tight text-[#2878B8] transition hover:text-[#6CB4EE]"
          >
            ChoupiJuni
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#FFD95A]" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-semibold text-[#2878B8]"
                    : "text-sm font-medium text-[#293241] transition hover:text-[#6CB4EE]"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-md"
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
          <div className="mt-4 rounded-2xl border border-[#D9ECFA] bg-white p-3 shadow-sm md:hidden">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-xl bg-[#EAF5FF] px-4 py-3 font-semibold text-[#2878B8]"
                    : "block rounded-xl px-4 py-3 font-medium text-[#293241] transition hover:bg-[#EAF5FF] hover:text-[#2878B8]"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-xl bg-green-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-600"
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