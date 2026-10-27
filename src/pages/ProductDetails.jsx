import SEO from "../components/SEO";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import categories from "../data/categories";
import straw from "../assets/feature-straw.png";
import steel from "../assets/feature-steel.png";
import leakseal from "../assets/feature-leak-proof.png";
import base from "../assets/feature-base.png";
import desc1 from "../assets/description-1.png";
import desc2 from "../assets/description-2.png";
import desc3 from "../assets/description-3.png";
import desc4 from "../assets/description-4.png";

const featureImages = [
  {
    id: "straw",
    title: "Silicon straw",
    image: straw,
  },
  {
    id: "steel",
    title: "Rust-proof body",
    image: steel,
  },
  {
    id: "leak_proof",
    title: "Leak Proof Lid",
    image: leakseal,
  },
  {
    id: "base",
    title: "Anti-slip base",
    image: base,
  },
];

function ProductDetails() {
  const { productId } = useParams();

  // Find which category contains this product
  const productCategory = categories.find((category) =>
    category.products.some((product) => product.id === productId)
  );

  // Find the selected product
  const product = productCategory?.products.find(
    (product) => product.id === productId
  );

  // Select the first style by default
  const [selectedStyle, setSelectedStyle] = useState(
    product?.styles?.[0] || null
  );

  const [selectedFeature, setSelectedFeature] = useState(null);

  // Navigate between existing styles
  const changeStyle = (direction) => {
    const styles = product.styles;
    const currentIndex = styles.findIndex(
      (style) => style.id === selectedStyle.id
    );

    const nextIndex =
      (currentIndex + direction + styles.length) % styles.length;

    setSelectedStyle(styles[nextIndex]);
    setSelectedFeature(null);
  };

  // Product not found
  if (!product) {
    return (
      <main className="min-h-[60vh] bg-[#FFFAF6] px-5 py-20 text-stone-800 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
            ChoupiJuni Collection
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            Product Not Found
          </h1>

          <div className="mx-auto my-6 h-px w-16 bg-amber-300" />

          <p className="leading-7 text-green-900">
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-400 px-7 py-3 font-semibold text-green-900 transition hover:bg-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  // Calculate discount
  const discountPercentage = Math.round(
    ((product.mrp - product.salePrice) / product.mrp) * 100
  );

  const selectedStyleIndex = product.styles.findIndex(
    (style) => style.id === selectedStyle.id
  );

  return (
    <>
      <SEO
        title={`${product.name} - ${productCategory?.name || "Shop Products"}`}
        description={`Discover ${product.name} from ChoupiJuni. Explore product features, available styles, pricing, and ordering details.`}
        path={`/products/${productId}`}
      />

      <main className="overflow-hidden bg-white text-green-900">
        {/* Product Details */}
        <section className="bg-[#FFFAF6] px-5 py-10 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-6xl">
            {/* Back to Products */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2.5 text-sm font-medium text-stone-600 transition hover:border-rose-200 hover:text-rose-500"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {/* LEFT — Product Gallery */}
              <div className="min-w-0">
                {/* Main Image */}
                <div className="overflow-hidden rounded-3xl border border-rose-100/80 bg-[#FFF4EE] p-3 shadow-[0_12px_40px_rgba(120,90,70,0.06)] sm:p-5">
                  <img
                    src={
                      selectedFeature
                        ? selectedFeature.image
                        : selectedStyle.image
                    }
                    alt={
                      selectedFeature
                        ? `${product.name} - ${selectedFeature.title}`
                        : `${product.name} - ${selectedStyle.name}`
                    }
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </div>

                {/* Previous / Next Style Navigation */}
                <div className="mt-5 flex items-center justify-center gap-5">
                  <button
                    type="button"
                    onClick={() => changeStyle(-1)}
                    aria-label="Previous style"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white text-green-900 transition hover:border-rose-400 hover:bg-[#FFF4EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                  >
                    <ArrowLeft size={19} />
                  </button>

                  <span className="min-w-16 text-center text-sm font-medium text-green-900">
                    {selectedStyleIndex + 1} / {product.styles.length}
                  </span>

                  <button
                    type="button"
                    onClick={() => changeStyle(1)}
                    aria-label="Next style"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white text-green-900 transition hover:border-rose-400 hover:bg-[#FFF4EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>

                <p className="mt-2 text-center text-xs text-green-800">
                  Explore the available styles
                </p>
              </div>

              {/* RIGHT — Product Information */}
              <div className="flex min-w-0 flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                  {productCategory?.name}
                </p>

                <h1 className="mt-3 font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-5xl">
                  {product.name}
                </h1>

                <div className="mt-4 h-px w-16 bg-amber-300" />

                {/* Selected Style */}
                <p className="mt-4 text-sm text-stone-500">
                  Selected Style:{" "}
                  <span className="font-semibold text-green-900">
                    {selectedStyle.name}
                  </span>
                </p>

                {/* Pricing */}
                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-lg text-stone-400 line-through">
                      ₹{product.mrp}
                    </span>

                    <span className="text-3xl font-semibold text-green-900 sm:text-4xl">
                      ₹{product.salePrice}
                    </span>

                    <span className="rounded-full bg-[#FFF4EE] px-3 py-1.5 text-xs font-bold text-rose-500">
                      {discountPercentage}% OFF
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-green-900">
                    Special launch price
                  </p>

                  <p className="mt-1 text-xs text-stone-400">
                    Shipping details will be confirmed when you order.
                  </p>
                </div>

                <div className="mt-7 h-px bg-rose-100" />

                {/* Style Selection */}
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-green-900">
                    Choose a Style
                  </p>

                  <div className="flex gap-3 overflow-x-auto pb-3">
                    {product.styles.map((style) => {
                      const isOutOfStock = ["sheep", "cat"].includes(
                        style.id
                      );
                      const isSelected = selectedStyle.id === style.id;

                      return (
                        <button
                          key={style.id}
                          type="button"
                          onClick={() => {
                            setSelectedStyle(style);
                            setSelectedFeature(null);
                          }}
                          aria-label={`${style.name}${
                            isOutOfStock ? " - Out of stock" : ""
                          }`}
                          aria-pressed={isSelected}
                          className={`relative shrink-0 overflow-hidden rounded-2xl border-2 bg-white p-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                            isSelected
                              ? "border-rose-400 shadow-[0_4px_16px_rgba(244,114,182,0.16)]"
                              : "border-rose-100 hover:border-rose-300"
                          }`}
                        >
                          <img
                            src={style.image}
                            alt={style.name}
                            className={`h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20 ${
                              isOutOfStock ? "opacity-50 grayscale" : ""
                            }`}
                          />

                          {isOutOfStock && (
                            <span className="absolute inset-x-1 bottom-1 rounded-b-lg bg-stone-800/85 px-1 py-1 text-center text-[8px] font-bold text-white">
                              OUT OF STOCK
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Feature Images */}
                <div className="mt-5">
                  <p className="mb-3 text-sm font-semibold text-green-900">
                    Premium Features
                  </p>

                  <div className="flex gap-3 overflow-x-auto pb-3">
                    {featureImages.map((feature) => (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => setSelectedFeature(feature)}
                        aria-label={`View ${feature.title}`}
                        aria-pressed={selectedFeature?.id === feature.id}
                        className={`shrink-0 rounded-2xl border-2 bg-white p-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                          selectedFeature?.id === feature.id
                            ? "border-rose-400 shadow-[0_4px_16px_rgba(244,114,182,0.16)]"
                            : "border-rose-100 hover:border-rose-300"
                        }`}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
                        />

                        <span className="mt-2 block max-w-20 text-center text-[10px] font-medium leading-4 text-stone-600">
                          {feature.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/919597996585?text=${encodeURIComponent(
                    `Hi, I would like to order:
Animal Head Water Bottle
Style: ${selectedStyle.name}
Price: ₹${product.salePrice}
MRP: ₹${product.mrp}
Discount: ${discountPercentage}%`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-300 px-7 py-2 font-semibold text-green-900  transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-100 hover:border hover:border-rose-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 sm:w-fit"
                >
                  <MessageCircle size={19} />
                  Order on WhatsApp
                </a>

                <p className="mt-4 flex items-center gap-2 text-xs leading-6 text-stone-500">
                  Have a question about this product? Chat with us on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Attributes */}
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
              Made with Care
            </p>

            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
              Key Attributes
            </h2>

            <div className="mx-auto my-5 h-px w-16 bg-amber-300" />
          </div>

          <div className="space-y-10 sm:space-y-14">
            {[
              {
                id: "description-1",
                image: desc1,
                title: "Keeps Drinks Warm or Cool",
                description:
                  "Designed with a multi-layer construction that helps retain heat or cold for longer, keeping your drink at a more comfortable temperature throughout the day.",
              },
              {
                id: "description-2",
                image: desc2,
                title: "Two-way Drinking Design",
                description:
                  "Enjoy versatile drinking with two convenient options: use the built-in sipper for easy sipping or open the lid for direct drinking through the wide opening..",
              },
              {
                id: "description-3",
                image: desc3,
                title: "Thoughtful Details",
                description:
                  "Thoughtfully designed to fit comfortably in compatible car cup holders, making it convenient to keep your drink within easy reach during road trips and daily commutes.",
              },
              {
                id: "description-4",
                image: desc4,
                title: "Multi-Purpose Inner Lid",
                description:
                  "Designed for added convenience, the inner lid doubles as a small cup, making it easy to pour and enjoy tea or other beverages on the go.",
              },
            ].map((item, index) => (
              <div
                key={item.id}
                className={`grid items-center gap-6 sm:grid-cols-2 sm:gap-10 ${
                  index % 2 !== 0 ? "sm:[&>div:first-child]:order-2" : ""
                } ${
                  index !== 0
                    ? "border-t border-rose-100 pt-10 sm:pt-14"
                    : ""
                }`}
              >
                <div className="overflow-hidden rounded-3xl border border-rose-100/80 bg-[#FFF4EE] p-3 shadow-[0_12px_40px_rgba(120,90,70,0.05)] sm:p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="mx-auto h-auto max-h-80 w-full rounded-5xl object-contain sm:h-64"
                  />
                </div>

                <div className="py-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                    Feature {index + 1}
                  </p>

                  <h3 className="mt-3 font-heading text-2xl leading-snug text-green-900 sm:text-3xl">
                    {item.title}
                  </h3>

                  <div className="my-4 h-px w-12 bg-amber-300" />

                  <p className="text-sm leading-7 text-green-900 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Information */}
        <section className="border-t border-rose-100 bg-[#FFFAF6] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              {/* Product Details */}
              <div className="rounded-3xl border border-rose-100/80 bg-white p-6 shadow-[0_12px_40px_rgba(120,90,70,0.04)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                  At a Glance
                </p>

                <h2 className="mt-3 font-heading text-2xl sm:text-3xl">
                  Product Details
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between gap-6 border-b border-rose-100 pb-4">
                    <span className="text-sm text-stone-500">Category</span>
                    <span className="text-right text-sm font-semibold text-green-900">
                      {productCategory?.name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-rose-100 pb-4">
                    <span className="text-sm text-stone-500">Product</span>
                    <span className="text-right text-sm font-semibold text-green-900">
                      {product.name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-rose-100 pb-4">
                    <span className="text-sm text-stone-500">
                      Selected Style
                    </span>
                    <span className="text-right text-sm font-semibold text-green-900">
                      {selectedStyle.name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-sm text-stone-500">Price</span>
                    <span className="text-right text-sm font-semibold text-rose-500">
                      ₹{product.salePrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="rounded-3xl border border-rose-100/80 bg-white p-6 shadow-[0_12px_40px_rgba(120,90,70,0.04)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                  Shop with Confidence
                </p>

                <h2 className="mt-3 font-heading text-2xl sm:text-3xl">
                  Shipping & Returns
                </h2>

                <div className="mt-6 space-y-7">
                  <div>
                    <h3 className="font-semibold text-stone-800">Shipping</h3>

                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      We carefully pack every order and arrange delivery to
                      your doorstep. Shipping details and delivery timelines
                      will be confirmed when you place your order.
                    </p>
                  </div>

                  <div className="border-t border-rose-100 pt-6">
                    <h3 className="font-semibold text-stone-800">Returns</h3>

                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      We thoroughly inspect every product before it leaves us,
                      ensuring it meets our quality standards. With every
                      order carefully checked and packed, you can shop with
                      confidence and enjoy your purchase from the moment it
                      arrives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </>
  );
}

export default ProductDetails;