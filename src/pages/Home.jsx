import { Link } from "react-router-dom";
import products from "../data/products";
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
    title: "Personalised",
    description: "Add your child's name",
  },
  {
    title: "Fast Delivery",
    description: "Pan India Shipping",
  },
];
function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left */}
        <section className="px-6 py-20 text-center">
          <p className="mb-4 text-sm font-medium">
            Welcome to ChoupiJuni
          </p>
          {/* Ink-blue text */}
          {/* <h1 className="mx-auto max-w-3xl text-4xl font-bold md:text-6xl">
            Little things made for little hands
          </h1> */}
          {/* Light blue text */}
          <h1 className="mt-3 text-4xl font-bold leading-tight text-[#2878B8] sm:text-5xl lg:text-6xl">
            Little things made for little hands
          </h1>

          {/* <p className="mx-auto mt-6 max-w-xl text-lg">
            Cute, practical water bottles designed for kindergarten kids.
          </p> */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#293241]">
            Cute, practical water bottles designed for kindergarten kids.
          </p>

          <div className="mt-8 flex flex-wrap flex-col justify-center gap-4 sm:flex-row">
            {/* <Link
              to="/products"
              className="inline-block rounded-full bg-purple-500 px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-purple-600 hover:shadow-lg"
            >
              Explore Our Products
            </Link> */}

            <Link
              to="/products"
              className="inline-block rounded-full bg-[#6CB4EE] px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#2878B8] hover:shadow-lg"
            >
              Explore Our Products
            </Link>

            {/* <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-6 py-3 font-medium text-white"
            >
              WhatsApp Us
            </a> */}

            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-[#FFD95A] bg-[#FFD95A] px-7 py-3 font-semibold text-[#293241] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
        {/* Right */}
        <div>
          <img
            src="https://placehold.co/600x500"
            alt="ChoupiJuni promotion"
            className="m-3 w-full rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Why ChoupiJuni? */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium">
              Why ChoupiJuni?
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Made with little ones in mind
            </h2>

            <p className="mx-auto mt-4 max-w-xl">
              Simple, cheerful and practical products for everyday adventures.
            </p>
          </div>
          {/* Claims Section */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {claims.map((claim) => (
              <div
                key={claim.title}
                // className="rounded-3xl border p-6 text-center"
                className="rounded-3xl border border-[#D9ECFA] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-[#2878B8]">
                  {claim.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#293241]/70">
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

          <div className="text-center">
            <p className="text-sm font-medium">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-[#2878B8] sm:text-4xl">
              Featured Products
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#293241]/70">
              Discover our cute and practical bottles made for little ones.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Small Brand Story Section */}
      <section className="bg-[#EAF5FF] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-[#2878B8]">
            About ChoupiJuni
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#293241] sm:text-4xl">
            Made for little moments
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#293241]/70">
            ChoupiJuni brings together fun, practical and thoughtfully
            designed products made especially for little ones.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block rounded-full bg-[#6CB4EE] px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#2878B8] hover:shadow-lg"
          >
            Know More About Us
          </Link>

        </div>
      </section>
      {/* Watsapp CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#6CB4EE] px-6 py-12 text-center shadow-lg sm:px-10 sm:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Found something your little one will love?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            Get in touch with us on WhatsApp to place your order or ask any questions.
          </p>

          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#FFD95A] px-7 py-3 font-bold text-[#293241] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;