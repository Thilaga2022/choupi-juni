import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroOne from "../assets/hero-1.png"
import heroTwo from "../assets/hero-2.png"
import heroThree from "../assets/hero-3.png"
import bottles from "../data/bottles";
import ProductCard from "../components/ProductCard";
const claims = [
  {
    title: "100% Safe",
    description: "Non-toxic & BPA Free",
    color: "#C0E09C"
  },
  {
    title: "Premium Quality",
    description: "Durable & Long Lasting",
    color: "#FEBC5A"
  },

  {
    title: "Fast Delivery",
    description: "Pan India Shipping",
    color: "#F696CD"
  },
];

const heroSlides = [
  {
    image: heroOne,
    eyebrow: "Made for little adventures",
    title: "Little things made for little hands",
    description:
      "Cute, practical water bottles designed for kindergarten kids.",
  },
  {
    image: heroTwo,
    eyebrow: "Fun meets functionality",
    title: "Make every day a little more playful",
    description:
      "Fun and practical bottles designed to make everyday adventures special.",
  },
  {
    image: heroThree,
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
    <main>

      {/* Hero Carousel */}
      <section className="bg-[#FFF9F0] px-4 py-2 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white p-4 shadow-md ">

          {/* Carousel Track */}
          <div
            className="flex gap-2 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {heroSlides.map((slide) => (
              <div
                key={slide.title}
                className="min-w-full"
              >
                <div className=" overflow-hidden rounded-2xl  ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#293241] shadow-md transition-all duration-300 hover:scale-105 hover:bg-white sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#293241] shadow-md transition-all duration-300 hover:scale-105 hover:bg-white sm:right-8"
          >
            <ChevronRight size={22} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                  ? "w-7 bg-[#BDB2B0]"
                  : "w-2.5 bg-white/80 hover:bg-white"
                  }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Why ChoupiJuni? */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm text-[#a09b9b]/70 font-medium">
              Why ChoupiJuni?
            </p>

            <h2 className="text-[#676363] mt-2 text-3xl font-bold">
              Made with little ones in mind
            </h2>

            <p className="text-[#a09b9b]/70 mx-auto mt-4 max-w-xl">
              Simple, cheerful and practical products for everyday adventures.
            </p>
          </div>
          {/* Claims Section */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {claims.map((claim) => (
              <div
                key={claim.title}
                style={{ borderColor: claim.color }}
                className="rounded-3xl border border-[#D9ECFA] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-[#676363]">
                  {claim.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#a09b9b]">
                  {claim.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Featured Products */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="text-center text-[#a09b9b]/70">
            <p className="text-sm font-medium">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-[#676363] sm:text-4xl">
              Featured Products
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#a09b9b]/70">
              Discover our cute and practical bottles made for little ones.
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

        </div>
      </section>

      {/* Small Brand Story Section */}
      <section className=" px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#67636334] px-6 py-12 text-center shadow-lg sm:px-10 sm:py-16">

          <p className="text-sm font-bold uppercase tracking-widest text-[#a09b9b]/70">
            About ChoupiJuni
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#676363] sm:text-4xl">
            Made for little moments
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#a09b9b]/70">
            ChoupiJuni brings together fun, practical and thoughtfully
            designed products made especially for little ones.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block rounded-full bg-[#bdb2b0] px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#8c8584] hover:shadow-lg"
          >
            Know More About Us
          </Link>

        </div>
      </section>
      {/* Watsapp CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#67636334] px-6 py-12 text-center shadow-lg sm:px-10 sm:py-16">
          <h2 className="text-3xl font-bold text-[#676363] sm:text-4xl">
            Found something your little one will love?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#a09b9b]/70 sm:text-lg">
            Get in touch with us on WhatsApp to place your order or ask any questions.
          </p>

          <a
            href={`https://wa.me/919566761489?text=${encodeURIComponent("Hi! I’d like to place an order. Could you please help me with the ordering process?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#bdb2b0] px-5 py-2.5  text-[white] shadow-sm transition-[background-color,color,box-shadow,translate] duration-800 ease-in-out hover:-translate-y-0.5 hover:bg-[#1B9A58] hover:shadow-md"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;