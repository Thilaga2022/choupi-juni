
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  Baby,
  ArrowRight,
  Leaf,
  HandHeart,
} from "lucide-react";

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
    <main className="overflow-hidden bg-white text-stone-800">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative z-10">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
              A little world of love
            </span>

            <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              About <span className="italic text-rose-400">ChoupiJuni</span>
            </h1>

            <div className="my-6 h-px w-20 bg-amber-300" />

            <p className="max-w-lg text-base leading-8 text-stone-600">
              Childhood is made of little moments, tiny discoveries, and
              memories that stay with us forever. At ChoupiJuni, we celebrate
              those precious beginnings with thoughtfully chosen finds for
              little ones and the families who love them.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-rose-400 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-rose-500"
            >
              Discover Our Collection
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative md:pl-4">
            <div className="absolute -right-3 -top-4 h-32 w-32 rounded-full bg-rose-100 sm:-right-5 sm:-top-6 sm:h-44 sm:w-44" />

            <img
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85"
              alt="A tender childhood moment"
              className="relative z-10 h-[320px] w-full rounded-t-[45%] rounded-b-2xl object-cover shadow-xl sm:h-[440px]"
            />

            <div className="absolute -bottom-5 -left-3 z-20 max-w-[230px] rounded-2xl bg-[#fffaf3] p-5 shadow-lg sm:-left-8">
              <Heart className="mb-2 text-rose-400" size={23} />
              <p className="font-serif text-lg italic">
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
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85"
              alt="A parent sharing a special moment with a child"
              className="relative h-[300px] w-full rounded-3xl object-cover shadow-lg sm:h-[410px]"
            />

            <div className="absolute -right-3 -top-5 rounded-full bg-white p-4 shadow-md sm:-right-5 sm:p-5">
              <HandHeart className="text-rose-400" size={30} />
            </div>
          </div>

          <div className="relative z-10 rounded-3xl bg-white p-7 shadow-sm sm:p-10 md:-ml-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
              Our Story
            </span>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Who We Are
            </h2>

            <div className="my-5 h-px w-16 bg-amber-300" />

            <p className="leading-8 text-stone-600">
              ChoupiJuni is a brand inspired by the magic of childhood.
              We believe that the things surrounding little ones should
              feel special, thoughtful, and full of warmth.
            </p>

            <p className="mt-4 leading-8 text-stone-600">
              From everyday essentials to adorable little finds, our aim is
              to help families discover products that bring comfort, joy,
              and a touch of charm to their daily lives.
            </p>

            <p className="mt-4 leading-8 text-stone-600">
              Because growing up is a beautiful adventure, and every little
              moment deserves to be treasured.
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
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-500">
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

                  <h3 className="mt-6 font-serif text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-stone-500">
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#fff4ee] px-6 py-14 sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-rose-100/70" />
          <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-amber-100/70" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <Baby className="mx-auto mb-5 text-rose-400" size={42} strokeWidth={1.3} />

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Little Things, Big Love
            </h2>

            <p className="mx-auto mt-5 max-w-lg leading-8 text-stone-600">
              Find something special for your little one. Explore our
              collection and make everyday moments a little more lovely.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-rose-400 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-rose-500"
              >
                Shop Our Products
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-stone-300 bg-white/70 px-7 py-3.5 text-sm font-medium transition hover:border-rose-300 hover:bg-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
