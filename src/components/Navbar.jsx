import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "PRODUCTS", path: "/products" },
  { name: "ABOUT US", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const whatsappUrl = `https://wa.me/919597996585?text=${encodeURIComponent(
  "Hi! I’d like to place an order. Could you please help me with the ordering process?"
)}`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-rose-100/80 bg-[#FFFAF6]/95 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Navigation */}
        <div className="flex min-h-14 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="ChoupiJuni home"
            className="group flex shrink-0 flex-col"
          >
            <span className="font-serif text-3xl leading-none tracking-wide text-stone-800 transition-colors group-hover:text-rose-500 sm:text-4xl lg:text-[2.7rem]">
              ChoupiJuni
            </span>

            <span className="mt-2 text-[8px] font-medium uppercase tracking-[0.25em] text-rose-400 sm:text-[9px]">
              Growing With You
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative py-2 text-xs font-semibold tracking-[0.12em] transition-colors duration-200 xl:text-sm ${
                    isActive
                      ? "text-rose-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-rose-400"
                      : "text-stone-500 hover:text-rose-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-400 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rose-100 bg-white text-stone-700 transition hover:border-rose-300 hover:bg-[#FFF4EE] hover:text-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile / Tablet Navigation */}
        {isMenuOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="fixed inset-0 top-19 z-40 bg-stone-900/20 lg:hidden"
            />

            <div
              id="mobile-navigation"
              className="absolute left-0 right-0 top-full z-50 border-t border-rose-100 bg-[#FFFAF6] p-4 shadow-[0_16px_35px_rgba(120,90,70,0.10)] lg:hidden sm:px-6"
            >
              <div className="mx-auto max-w-7xl">
                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-400">
                  Explore ChoupiJuni
                </p>

                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold tracking-wide transition-colors ${
                          isActive
                            ? "bg-[#FFF0E9] text-rose-500"
                            : "text-stone-600 hover:bg-white hover:text-rose-500"
                        }`
                      }
                    >
                      {link.name}
                      <ArrowUpRight size={16} className="opacity-60" />
                    </NavLink>
                  ))}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-400 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                >
                  <MessageCircle size={17} />
                  Order on WhatsApp
                  <ArrowUpRight size={15} />
                </a>

                <p className="mt-4 text-center font-serif text-sm italic text-stone-400">
                  Growing With You
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;