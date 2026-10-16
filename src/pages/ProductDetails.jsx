import SEO from "../components/SEO"
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import categories from "../data/categories";
import straw from "../assets/feature-straw.png"
import steel from "../assets/feature-steel.png"
import leakseal from "../assets/feature-leak-proof.png"
import base from "../assets/feature-base.png"
import desc1 from "../assets/description-1.png"
import desc2 from "../assets/description-2.png"
import desc3 from "../assets/description-3.png"
import desc4 from "../assets/description-4.png"

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

  // Product not found
  if (!product) {
    return (


      <main className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-bold text-[#293241]">
            Product Not Found
          </h1>

          <p className="mt-4 text-[#293241]/70">
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-full bg-[#6CB4EE] px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#2878B8] hover:shadow-lg"
          >
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

  return (
    <>
      <SEO
        title={`${product.name} - ${productCategory?.name || "Shop Products"}`}
        description={`Discover ${product.name} from ChoupiJuni. Explore product features, available styles, pricing, and ordering details.`}
        path={`/products/${productId}`}
      />

      <main>
        {/* Product Details */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">

            {/* Back to Products */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2878B8] transition-colors hover:text-[#1f6195]"
            >
              ← Back to Products
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">

              {/* LEFT - Product Gallery */}
              <div>
                <div className="overflow-hidden rounded-3xl border border-[#D9ECFA] bg-[#EAF5FF] p-3 shadow-sm sm:p-4">

                  {/* Main Image */}
                  <img
                    src={selectedFeature ? selectedFeature.image : selectedStyle.image}
                    alt={
                      selectedFeature
                        ? `${product.name} - ${selectedFeature.title}`
                        : `${product.name} - ${selectedStyle.name}`
                    }
                    className="aspect-square w-full rounded-2xl object-cover"
                  />



                </div>
              </div>


              {/* RIGHT - Product Information */}
              <div className="flex flex-col justify-center">

                {/* Category */}
                <p className="text-sm font-semibold uppercase tracking-widest text-[#2878B8]">
                  {productCategory?.name}
                </p>

                {/* Product Name */}
                <h1 className="mt-3 text-3xl font-bold leading-tight text-[#293241] sm:text-4xl">
                  {product.name}
                </h1>

                {/* Selected Style */}
                <p className="mt-3 text-sm text-[#293241]/60">
                  Selected Style:{" "}
                  <span className="font-semibold text-[#293241]">
                    {selectedStyle.name}
                  </span>
                </p>

                {/* Pricing */}
                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-lg text-[#293241]/40 line-through">
                      ₹{product.mrp}
                    </span>

                    <span className="text-3xl font-bold text-[#2878B8]">
                      ₹{product.salePrice}
                    </span>

                    <span className="rounded-full bg-[#FFD95A] px-3 py-1 text-xs font-extrabold text-[#293241]">
                      {discountPercentage}% OFF
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-[#293241]/55">
                    Special launch price
                  </p>
                  <p className="mt-2 text-xs text-[#293241]/55">
                    Shipping is calculated at checkout
                  </p>
                </div>

                {/* Divider */}
                <div className="mt-6 h-px bg-[#D9ECFA]" />


                {/* Style Selection */}
                <div className="mt-5">
                  <p className="mb-3 text-sm font-semibold text-[#293241]">
                    Choose a Style
                  </p>

                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {product.styles.map((style) => {
                      const isOutOfStock = ["sheep", "cat"].includes(style.id);
                      const isSelected = selectedStyle.id === style.id;

                      return (
                        <button
                          key={style.id}
                          type="button"
                          onClick={() => {
                            setSelectedStyle(style);
                            setSelectedFeature(null);
                          }}
                          aria-label={`${style.name}${isOutOfStock ? " - Out of stock" : ""}`}
                          aria-pressed={isSelected}
                          className={`relative shrink-0 overflow-hidden rounded-xl border-2 bg-white p-1 transition-all duration-200 ${isSelected
                            ? "border-[#2878B8] shadow-md"
                            : "border-[#D9ECFA] hover:border-[#6CB4EE]"
                            }`}
                        >
                          <img
                            src={style.image}
                            alt={style.name}
                            className={`aspect-square w-14 rounded-lg object-cover ${isOutOfStock ? "opacity-50 grayscale" : ""
                              }`}
                          />

                          {isOutOfStock && (
                            <span className="absolute inset-x-0 bottom-1 rounded-b-lg bg-[#293241]/85 px-1 py-1 text-center text-[8px] font-bold text-white">
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
                  <p className="mb-3 text-sm font-semibold text-[#293241]">
                    Premium Features
                  </p>

                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {featureImages.map((feature) => (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => {
                          setSelectedFeature(feature);
                        }}
                        className={`shrink-0 rounded-xl border-2 bg-white p-1 transition-all duration-200 ${selectedFeature?.id === feature.id
                          ? "border-[#2878B8] shadow-md"
                          : "border-[#D9ECFA] hover:border-[#6CB4EE]"
                          }`}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-14 w-14 rounded-lg object-cover"
                        />

                        <span className="mt-1 block text-[10px] font-medium text-[#293241]/70">
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
                  className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-[#FFD95A] px-7 py-3.5 font-bold text-[#293241] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg sm:w-fit"
                >
                  Order on WhatsApp
                </a>

                <p className="mt-4 text-center text-xs text-[#293241]/60 sm:text-left">
                  Have a question about this product? Chat with us on WhatsApp.
                </p>

              </div>
            </div>
          </div>
        </section>


        {/* Key Attributes Section */}
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#293241] sm:mb-8 sm:text-3xl">
            Key Attributes
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {[
              {
                id: "description-1",
                image: desc1,
                title: "Keeps Drinks Warm or Cool",
                description: "Designed with a multi-layer construction that helps retain heat or cold for longer, keeping your drink at a more comfortable temperature throughout the day.",
              },
              {
                id: "description-2",
                image: desc2,
                title: "Two-way Drinking Design",
                description: "Enjoy versatile drinking with two convenient options: use the built-in sipper for easy sipping or open the lid for direct drinking through the wide opening..",
              },
              {
                id: "description-3",
                image: desc3,
                title: "Thoughtful Details",
                description: "Thoughtfully designed to fit comfortably in compatible car cup holders, making it convenient to keep your drink within easy reach during road trips and daily commutes.",
              },
              {
                id: "description-4",
                image: desc4,
                title: "Multi-Purpose Inner Lid",
                description: "Designed for added convenience, the inner lid doubles as a small cup, making it easy to pour and enjoy tea or other beverages on the go.",
              },
            ].map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8 ${index !== 0 ? "border-t border-[#D9ECFA] pt-8 sm:pt-10" : ""
                  }`}
              >
                <div className="overflow-hidden rounded-3xl border border-[#D9ECFA] bg-[#EAF5FF] p-3 shadow-sm sm:p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="rounded h-auto max-h-80 w-full object-contain sm:h-56 md:h-60"
                  />
                </div>

                <div className="flex-1 py-1">
                  <h3 className="text-lg font-semibold text-[#293241] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#293241]/75 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>






        {/* Product Information */}
        <section className="border-t border-[#D9ECFA] bg-[#EAF5FF]/40 px-6 py-16">
          <div className="mx-auto max-w-6xl">

            <div className="grid gap-12 md:grid-cols-2">

              {/* Product Details */}
              <div>
                <h2 className="text-2xl font-bold text-[#293241]">
                  Product Details
                </h2>

                <div className="mt-6 space-y-4">

                  <div className="flex justify-between gap-6 border-b border-[#D9ECFA] pb-4">
                    <span className="text-sm text-[#293241]/60">
                      Category
                    </span>

                    <span className="text-sm font-semibold text-[#293241]">
                      {productCategory?.name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-[#D9ECFA] pb-4">
                    <span className="text-sm text-[#293241]/60">
                      Product
                    </span>

                    <span className="text-right text-sm font-semibold text-[#293241]">
                      {product.name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-[#D9ECFA] pb-4">
                    <span className="text-sm text-[#293241]/60">
                      Selected Style
                    </span>

                    <span className="text-sm font-semibold text-[#293241]">
                      {selectedStyle.name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-[#D9ECFA] pb-4">
                    <span className="text-sm text-[#293241]/60">
                      Price
                    </span>

                    <span className="text-sm font-semibold text-[#2878B8]">
                      ₹{product.salePrice}
                    </span>
                  </div>

                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <h2 className="text-2xl font-bold text-[#293241]">
                  Shipping & Returns
                </h2>

                <div className="mt-6 space-y-5">

                  <div>
                    <h3 className="font-semibold text-[#293241]">
                      Shipping
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#293241]/65">
                      We carefully pack every order and arrange delivery to
                      your doorstep. Shipping details and delivery timelines
                      will be confirmed when you place your order.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#293241]">
                      Returns
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#293241]/65">
                      We thoroughly inspect every product before it leaves us, ensuring it meets our quality standards. With every order carefully checked and packed, you can shop with confidence and enjoy your purchase from the moment it arrives.
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