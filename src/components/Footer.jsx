import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-[#FFFAF6] px-5 py-12 text-stone-700 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="inline-block font-serif text-3xl tracking-wide text-stone-800 transition-colors hover:text-rose-500"
            >
              ChoupiJuni
            </Link>

            <div className="mt-3 h-px w-12 bg-amber-300" />

            <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-rose-400">
              Growing With You
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-stone-500">
              Little joys, made for little ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
              Explore
            </p>

            <h3 className="mt-3 font-serif text-2xl text-stone-800">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group inline-flex items-center gap-1 text-sm text-stone-600 transition-colors hover:text-rose-500"
                >
                  {link.name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
              We'd Love to Hear from You
            </p>

            <h3 className="mt-3 font-serif text-2xl text-stone-800">
              Get in Touch
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-500">
              Have a question or want to place an order? We're happy to help.
            </p>

            <a
              href="https://wa.me/919597996585?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.%20Could%20you%20please%20help%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
            >
              <MessageCircle size={17} />
              WhatsApp Us
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-rose-100 pt-6 sm:mt-14">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-6 text-stone-500 sm:text-sm">
              © {new Date().getFullYear()} ChoupiJuni. All rights reserved.
            </p>

            <p className="text-xs font-medium tracking-wide text-rose-400 sm:text-sm">
              Made with love for little ones
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;