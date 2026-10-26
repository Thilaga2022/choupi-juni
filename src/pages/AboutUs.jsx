import SEO from "../components/SEO"
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  Baby,
  ArrowRight,
  Leaf,
  HandHeart,
} from "lucide-react";
import StoryPic from "../assets/storypic.png"
import neha from "../assets/babyNeha.png"

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Little details, thoughtful choices, and a whole lot of love for little ones.",
  },
  {
    icon: Leaf,
    title: "Comfort Comes First",
    description:
      "Everyday essentials chosen with little ones' comfort and everyday needs in mind.",
  },
  {
    icon: Sparkles,
    title: "Little Things, Big Joy",
    description:
      "Charming finds that bring a little extra happiness to everyday moments.",
  },
];

export default function About() {
  return (

    <>
      <SEO
        title="About Us"
        description="Discover the story behind ChoupiJuni, our values, and our commitment to thoughtfully selected products."
        path="/about"
      />
      <main className="overflow-hidden bg-white text-green-900">
        {/* HERO */}
        <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative z-10">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
                A little world of love
              </span>

              <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                About <span className="font-heading text-rose-400"><Link to="/">ChoupiJuni</Link></span>
              </h1>

              <div className="my-6 h-px w-20 bg-amber-300" />

              <p className="max-w-lg text-base leading-8 ">
                Childhood is made of little moments, tiny discoveries, and
                memories that stay with us forever. At ChoupiJuni, we celebrate
                those precious beginnings with thoughtfully chosen finds for
                little ones and the families who love them.
              </p>

              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-stone-300 px-7 py-3.5 text-sm font-medium text-green-900 transition hover:bg-rose-100"
              >
                Discover Our Collection
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative md:pl-4">
              <div className="absolute -right-3 -top-4 h-32 w-32 rounded-full bg-rose-100 sm:-right-5 sm:-top-6 sm:h-44 sm:w-44" />

              <img
                src={neha}
                alt="A tender childhood moment"
                className="relative z-10 h-320px w-full rounded-t-[45%] rounded-b-2xl object-cover shadow-xl sm:h-110"
              />

              <div className="absolute -bottom-5 -left-3 z-20 max-w-230px rounded-2xl bg-[#fffaf3] p-5 shadow-lg sm:-left-8">
                <Heart className="mb-2 text-rose-400" size={23} />
                <p className="font-mila text-lg italic">
                  Little moments. Endless love.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="relative bg-[#fffaf6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative">
              <div className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-3xl bg-[#f8dfd8]" />

              <img
                src={StoryPic}
                alt="A parent sharing a special moment with a child"
                className="relative h-300px w-full rounded-3xl object-cover shadow-lg sm:h-410px"
              />

              <div className="absolute -right-3 -top-5 rounded-full bg-white p-4 shadow-md sm:-right-5 sm:p-5">
                <HandHeart className="text-rose-400" size={30} />
              </div>
            </div>

            <div className="relative z-10 rounded-3xl bg-white p-7 shadow-sm sm:p-10 md:-ml-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                Our Story
              </span>

              <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
                Who We Are
              </h2>

              <div className="my-5 h-px w-16 bg-amber-300" />

              <p className="leading-8 ">
                The Heart Behind ChoupiJuni
                Born from Experience. Inspired by Love. Created for Little Smiles.
                Our journey began in the logistics industry, where we built our experience in connecting products, people, and markets across the world. Over time, we expanded into global product sourcing, discovering unique products from different countries and exploring new possibilities to bring something special to India.
              </p>

              <p className="mt-4 leading-8 ">
                One day, a simple thought inspired us: Why shouldn't our loved ones enjoy everyday essentials in premium quality, just as much as we want to give them the most special gifts?
                We all love giving unique and memorable gifts to the people who matter most to us. And when it comes to children, parents are always willing to go the extra mile to find products that are special, enjoyable, and safe for their little ones.
              </p>

              <p className="mt-4 leading-8 ">
                This thought became the inspiration behind ChoupiJuni.
                We envisioned a brand that brings together adorable designs, premium-quality products, everyday usefulness, and the joy of gifting. Our mission is to introduce unique and exciting products to India that make children smile, delight parents, and turn ordinary everyday moments into beautiful memories.
                ChoupiJuni is more than just a brand. It is our commitment to bringing parents something thoughtfully chosen for their little ones, as if we were choosing it for our own loved ones.
                Because every child deserves something special, every parent wants the best, and every little smile creates a lasting memory.
                ChoupiJuni – Little Bottles, Big Smiles. A Little Joy in Every Moment.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                The ChoupiJuni Promise
              </span>
              <h2 className="mt-3 text-green-900 font-heading text-4xl sm:text-5xl">
                What We Do
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-green-900">
                Thoughtful choices for little beginnings and the everyday
                moments that make family life beautiful.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-3xl border border-stone-100 bg-white px-7 py-10 text-center shadow-[0_12px_40px_rgba(120,90,70,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff5ef] transition group-hover:bg-rose-100">
                      <Icon
                        size={30}
                        strokeWidth={1.4}
                        className="text-rose-400"
                      />
                    </div>

                    <h3 className="mt-6 font-heading text-2xl text-green-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-green-900">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#fff4ee] px-6 py-14 sm:px-12 sm:py-20">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-rose-100/70" />
            <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-amber-100/70" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <Baby className="mx-auto mb-5 text-rose-400" size={42} strokeWidth={1.3} />

              <h2 className="font-heading text-green-900 text-4xl leading-tight sm:text-5xl">
                Little Things, Big Love
              </h2>

              <p className="mx-auto mt-5 max-w-lg leading-8 text-green-900">
                Find something special for your little one. Explore our
                collection and make everyday moments a little more lovely.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-300 px-7 py-3.5 text-sm font-medium text-green-900 transition hover:border hover:bg-rose-100"
                >
                  Shop Our Products
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full text-green-900 border border-stone-300 bg-white/70 px-7 py-3.5 text-sm font-medium transition hover:border-rose-300 hover:bg-white"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
