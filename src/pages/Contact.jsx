import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";

function FacebookIcon() {
  return (
    <span className="text-2xl font-bold">
      f
    </span>
  );
}

function InstagramIcon() {
  return (
    <span className="text-xl font-bold">
      ◎
    </span>
  );
}

function Contact() {
  const contactOptions = [
    {
      icon: Mail,
      title: "Email",
      description: "Feel free to drop an email for general questions and enquiries.",
      action: "your@email.com",
      href: "mailto:your@email.com",
    },

    {
      icon: InstagramIcon,
      title: "Instagram",
      description:
        "Follow along for products, updates and inspiration.",
      action: "Visit our Instagram",
      href: "https://instagram.com/YOUR_PAGE",
    },
    {
      icon: FacebookIcon,
      title: "Facebook",
      description:
        "Follow us for updates, new products and more.",
      action: "Visit our Facebook",
      href: "https://facebook.com/YOUR_PAGE",
    },
  ];

  return (
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
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5FF] text-[#2878B8]">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h2 className="mt-6 text-xl font-bold text-[#293241]">
                    {option.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 leading-7 text-[#293241]/70">
                    {option.description}
                  </p>

                  {/* Action */}
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* WhatsApp CTA */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl rounded-3xl  px-6 py-12 text-center sm:px-10 sm:py-16">
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
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#bdb2b0] px-7 py-3 font-bold text-[#293241] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B9A58] hover:shadow-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-[#EAF5FF] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center ">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6CB4EE]">
            Need Help?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Looking for something specific?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
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
  );
}

export default Contact;