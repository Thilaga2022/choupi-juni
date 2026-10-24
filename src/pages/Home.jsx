
import SEO from "../components/SEO";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import slide1 from "../assets/carousel-1.png";
import slide2 from "../assets/carousel-2.jpeg";
import slide3 from "../assets/carousel-3.jpeg";
import bottles from "../data/bottles";
import ProductCard from "../components/ProductCard";

const claims = [
  {
    title: "100% Safe",
    description: "Non-toxic & BPA Free",
  },
  {
    title: "Premium Quality",
    description: "Durable & Long Lasting",
  },
  {
    title: "Fast Delivery",
    description: "Pan India Shipping",
  },
];

const heroSlides = [
  {
    image: slide1,
    eyebrow: "Made for little adventures",
    title: "Little things made for little hands",
    description:
      "Cute, practical water bottles designed for kindergarten kids.",
  },
  {
    image: slide2,
    eyebrow: "Fun meets functionality",
    title: "Make every day a little more playful",
    description:
      "Fun and practical bottles designed to make everyday adventures special.",
  },
  {
    image: slide3,
    eyebrow: "Made for happy moments",
    title: "Products kids love to carry",
    description:
      "Thoughtfully designed products made for little ones and their everyday adventures.",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [featuredProducts] = useState(() =>
    [...bottles]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <>
      <SEO
        title="Thoughtful Products for Everyday Life"
        description="Discover ChoupiJuni's thoughtfully selected products designed to bring convenience and joy to everyday life."
        path="/"
      />

      <main className="overflow-hidden bg-white text-stone-800">
        {/* Hero Carousel - Original images and behaviour preserved */}
        <section className="bg-[#FFFAF6] px-4 py-5 sm:px-6 sm:py-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl border border-rose-100/60 bg-white p-2 shadow-[0_12px_40px_rgba(120,90,70,0.08)] sm:p-3">
            <div
              className="flex gap-2 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {heroSlides.map((slide) => (
                <Link
                  key={slide.title}
                  to="/products"
                  className="relative min-w-full cursor-pointer"
                  aria-label={`View ${slide.title} products`}
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-fill"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-stone-700 shadow-md transition hover:scale-105 hover:bg-white sm:left-8"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-stone-700 shadow-md transition hover:scale-105 hover:bg-white sm:right-8"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-7">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-7 bg-rose-400"
                      : "w-2.5 bg-white/85 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products - ProductCard and product data unchanged */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                Our Collection
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Featured Products
              </h2>

              <div className="mx-auto my-5 h-px w-16 bg-amber-300" />

              <p className="mx-auto max-w-2xl leading-8 text-stone-600">
                Discover ChoupiJuni's cute and practical bottles
                made for little ones.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-7 py-3 text-sm font-semibold text-rose-500 transition hover:bg-[#FFF4EE]"
              >
                Explore All Products
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why ChoupiJuni */}
        <section className="bg-[#FFFAF6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                Why ChoupiJuni?
              </p>

              <h2 className="mt-3 font-heading text-green-900 text-4xl sm:text-5xl">
                Made with Little Ones in Mind
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-8 text-green-900">
                Simple, cheerful and practical products for everyday adventures.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {claims.map((claim) => (
                <article
                  key={claim.title}
                  className="rounded-3xl border border-rose-100/80 bg-white p-8 text-center shadow-[0_12px_40px_rgba(120,90,70,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-amber-300" />

                  <h3 className="font-serif text-2xl">
                    {claim.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {claim.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#FFF4EE] px-6 py-14 sm:px-10 sm:py-20">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-rose-100/70" />
            <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-amber-100/70" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                About ChoupiJuni
              </p>

              <h2 className="mt-4 font-heading text-4xl text-green-900 leading-tight sm:text-5xl">
                Made for Little Moments
              </h2>

              <div className="mx-auto my-6 h-px w-16 bg-amber-300" />

              <p className="text-base leading-8 text-green-900 sm:text-lg">
                ChoupiJuni brings together fun, practical and thoughtfully
                designed products made especially for little ones.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 border-1 rounded-full bg-rose-100 px-7 py-3.5 text-sm font-semibold text-green-900 shadow-sm transition hover:-translate-y-1 hover:bg-rose-400 hover:shadow-md"
              >
                Know More About Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#FFFAF6] px-6 py-14 sm:px-10 sm:py-20">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-100/60" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                We're Here to Help
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Found Something Your Little One Will Love?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-8 text-stone-600">
                Get in touch with us on WhatsApp to place your order
                or ask any questions.
              </p>

              <a
                href={`https://wa.me/919597996585?text=${encodeURIComponent(
                  "Hi! I’d like to place an order. Could you please help me with the ordering process?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-400 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:bg-rose-500 hover:shadow-md"
              >
                Order on WhatsApp
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
