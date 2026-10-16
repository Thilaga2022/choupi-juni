import SEO from "../components/SEO"
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Mail,
  MapPin,
  Navigation,
} from "lucide-react";

function FacebookIcon() {
  return <span className="text-2xl font-bold">f</span>;
}

function InstagramIcon() {
  return <span className="text-xl font-bold">◎</span>;
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
      description:
        "Follow along for products, updates and inspiration.",
      action: "Visit our Instagram",
      href: "https://www.instagram.com/choupijuni/",
    },
    {
      icon: FacebookIcon,
      title: "Facebook",
      description:
        "Follow us for updates, new products and more.",
      action: "Visit our Facebook",
      href: "https://www.facebook.com/profile.php?id=61595210840827&rdid=dtP27p2EgYRf7PMh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Fn2yH7idp%2F#",
    },
  ];

  const address =
    "Site Number 31 SF Number 276/1A, Sri Krishna Ragavan Nagar, Bodipalayam, Coimbatore, Malumichampatti, PO: Malumichampatti, DIST: Coimbatore, Tamil Nadu - 641050";

  const mapUrl =
    "https://www.google.com/maps?q=10.90161,76.97345";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=10.90161,76.97345";

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact ChoupiJuni for product enquiries, order assistance, and customer support."
        path="/contact"
      />
      <main>
        {/* Introduction */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2878B8]">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-bold text-[#293241] sm:text-5xl">
              We'd love to hear from you.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#293241]/70">
              Have a question about a product, want to place an
              order, or simply want to know more about ChoupiJuni?
              Get in touch with us.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="bg-[#FFF9F0] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {contactOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <div
                    key={option.title}
                    className="rounded-3xl border border-[#D9ECFA] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5FF] text-[#2878B8]">
                      <Icon />
                    </div>

                    <h2 className="mt-6 text-xl font-bold text-[#293241]">
                      {option.title}
                    </h2>

                    <p className="mt-3 leading-7 text-[#293241]/70">
                      {option.description}
                    </p>

                    <a
                      href={option.href}
                      target={
                        option.title === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        option.title === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="mt-6 inline-block font-semibold text-[#2878B8] transition-colors duration-300 hover:text-[#6CB4EE]"
                    >
                      {option.action}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Address and Google Maps */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#2878B8]">
                Find Us
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#293241] sm:text-4xl">
                Visit ChoupiJuni
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#293241]/70">
                Find our location on the map or get directions
                to reach us.
              </p>
            </div>

            <div className="grid overflow-hidden rounded-3xl border border-[#D9ECFA] bg-white shadow-sm md:grid-cols-2">
              {/* Address Card */}
              <div className="flex flex-col justify-center p-8 sm:p-10 bg-[#EAF5FF] m-2 rounded-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5FF] text-[#2878B8]">
                  <MapPin size={25} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#293241]">
                  Our Address
                </h3>

                <p className="mt-4 leading-8 text-[#293241]/75">
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
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#BDB2B0] px-7 py-3 font-bold text-[#293241] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9ECFA]"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="min-h-350px md:min-h-450px m-2 border-amber-600 rounded-2xl">
                <iframe
                  title="ChoupiJuni Location - Coimbatore"
                  src="https://maps.google.com/maps?q=10.90161,76.97345&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "350px",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl rounded-3xl px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#2878B8] shadow-sm">
              <MessageCircle size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#293241] sm:text-4xl">
              Prefer WhatsApp?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#293241]/70">
              Send us a message directly. We're happy to help with
              product questions, orders and anything else you need.
            </p>

            <a
              href="https://wa.me/919597996585"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#BDB2B0] px-7 py-3 font-bold text-[#293241] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B9A58] hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-[#EAF5FF] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#6CB4EE]">
              Need Help?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#293241] sm:text-4xl">
              Looking for something specific?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#293241]/70">
              Browse our products or reach out to us directly.
              We'll be happy to help you find what you're
              looking for.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#2878B8] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Browse Products
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
