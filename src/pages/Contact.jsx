
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {InstagramIcon} from "../components/ContactIcons"
import {
  MessageCircle,
  Mail,
  MapPin,
  Navigation,
  ArrowRight,
} from "lucide-react";

function FacebookIcon() {
  return <span className="text-2xl font-bold">f</span>;
}

function Contact() {
  const contactOptions = [
    {
      icon: Mail,
      title: "Email",
      description:
        "Feel free to drop us an email for general questions and enquiries.",
      action: "info@choupijuni.com",
      href: "mailto:info@choupijuni.com",
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      description: "Follow along for products, updates and inspiration.",
      action: "Visit our Instagram",
      href: "https://www.instagram.com/choupijuni/",
    },
    {
      icon: FacebookIcon,
      title: "Facebook",
      description: "Follow us for updates, new products and much more.",
      action: "Visit our Facebook",
      href: "https://www.facebook.com/profile.php?id=61595210840827&rdid=dtP27p2EgYRf7PMh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Fn2yH7idp%2F#",
    },
  ];

  const address =
    "Site Number 31 SF Number 276/1A, Sri Krishna Ragavan Nagar, Bodipalayam, Coimbatore, Malumichampatti, PO: Malumichampatti, DIST: Coimbatore, Tamil Nadu - 641050";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=10.90161,76.97345";

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact ChoupiJuni for product enquiries, order assistance, and customer support."
        path="/contact"
      />

      <main className="overflow-hidden bg-white text-stone-800">
        {/* Hero */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
              We'd Love to Hear From You
            </p>

            <h1 className="mt-4 font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
              Let's <span className="font-heading text-rose-400">Talk</span>
            </h1>

            <div className="mx-auto my-6 h-px w-20 bg-amber-300" />

            <p className="mx-auto max-w-2xl text-base leading-8 text-green-900 sm:text-lg">
              Have a question about a product, need help with an
              order, or simply want to know more about{" "}
              <Link
                to="/"
                className="font-medium text-rose-500 hover:text-rose-600"
              >
                ChoupiJuni
              </Link>
              ? We'd be delighted to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="bg-[#FFFAF6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                Get in Touch
              </p>

              <h2 className="mt-3 font-heading text-green-900 text-3xl sm:text-4xl">
                We're Here for You
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {contactOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <article
                    key={option.title}
                    className="rounded-3xl border border-rose-100/80 bg-white p-7 shadow-[0_12px_40px_rgba(120,90,70,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4EE] text-rose-400">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-6 font-heading text-green-900 text-2xl">
                      {option.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-green-900">
                      {option.description}
                    </p>

                    <a
                      href={option.href}
                      target={
                        option.title === "Email" ? undefined : "_blank"
                      }
                      rel={
                        option.title === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-500 transition hover:text-rose-600"
                    >
                      {option.action}
                      <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Address and Map */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                Find Us
              </p>

              <h2 className="mt-3 font-heading text-green-900 text-4xl sm:text-5xl">
                Visit ChoupiJuni
              </h2>

              <div className="mx-auto my-5 h-px w-16 bg-amber-300" />

              <p className="mx-auto max-w-2xl leading-7 text-green-900">
                Find our location on the map or get directions
                to reach us.
              </p>
            </div>

            <div className="grid gap-5 overflow-hidden rounded-4xl border border-stone-100 bg-white p-3 shadow-[0_12px_40px_rgba(120,90,70,0.07)] md:grid-cols-2 md:p-4">
              {/* Address */}
              <div className="flex flex-col justify-center rounded-3xl bg-[#FFF4EE] p-7 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-rose-400 shadow-sm">
                  <MapPin size={26} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-heading text-green-900 text-3xl">
                  Our Address
                </h3>

                <p className="mt-4 text-sm leading-8 text-green-900 sm:text-base">
                  Site Number 31, SF Number 276/1A,
                  <br />
                  Sri Krishna Ragavan Nagar,
                  <br />
                  Bodipalayam, Malumichampatti,
                  <br />
                  Coimbatore, Tamil Nadu - 641050,
                  <br />
                  India.
                </p>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-stone-300 px-6 py-3 text-sm font-semibold text-green-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-100 hover:border hover:border-rose-300"
                >
                  <Navigation size={17} />
                  Get Directions
                </a>
              </div>

              {/* Google Map */}
              <div className="min-h-87.5 overflow-hidden rounded-3xl border border-rose-100 md:min-h-112.5">
                <iframe
                  title="ChoupiJuni Location - Coimbatore"
                  src="https://maps.google.com/maps?q=10.90161,76.97345&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#FFF4EE] px-6 py-14 sm:px-12 sm:py-20">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-rose-100/70" />
            <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-amber-100/70" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-rose-400 shadow-sm">
                <MessageCircle size={29} strokeWidth={1.5} />
              </div>

              <h2 className="mt-6 font-heading text-green-900 text-4xl sm:text-5xl">
                Prefer WhatsApp?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-8 text-green-900">
                Send us a message directly. We're happy to help
                with product questions, orders, and anything else
                you need.
              </p>

              <a
                href="https://wa.me/919597996585"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-300 px-7 py-3.5 text-sm font-semibold text-green-900 shadow-sm transition hover:-translate-y-1 hover:bg-rose-100 hover:border hover:border-rose-300 hover:shadow-md"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-[#FFFAF6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
              A Little Help
            </p>

            <h2 className="mt-3 font-heading text-green-900 text-4xl leading-tight sm:text-5xl">
              Looking for Something Special?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-900/60">
              Explore our collection of lovely finds for little ones.
              If you need help finding something, we're just a
              message away.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-stone-300 px-7 py-3.5 text-sm font-semibold text-green-900 shadow-sm transition hover:-translate-y-1 hover:bg-rose-100 hover:border hover:border-rose-300"
              >
                Browse Products
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/"
                className="rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-rose-200 hover:bg-[#FFF4EE]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
