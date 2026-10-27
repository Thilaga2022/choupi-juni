import { useState } from "react";
import {Link} from "react-router-dom"
import SEO from "../components/SEO";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";

const reviews = [
  {
    id: 1,
    name: "Happy Parent",
    text: "A lovely shopping experience with thoughtful products for little ones. The attention to detail makes the collection feel extra special.",
  },
  {
    id: 2,
    name: "ChoupiJuni Customer",
    text: "Beautifully presented products and a wonderful gifting option for babies. The collection feels carefully chosen for little ones.",
  },
  {
    id: 3,
    name: "Happy Family",
    text: "We loved exploring the collection. The products have such a sweet, thoughtful feel, making them lovely choices for little ones.",
  },
  {
    id: 4,
    name: "Returning Customer",
    text: "A delightful collection with a lovely presentation. Looking forward to discovering more from ChoupiJuni!",
  },
];

function Products() {
  const [reviewPage, setReviewPage] = useState(0);

  const visibleReviews = reviews.slice(
    reviewPage * 2,
    reviewPage * 2 + 2
  );

  return (
    <>
      <SEO
        title="Shop Products"
        description="Explore ChoupiJuni's product collection. Discover product features, available styles, and details to help you choose."
        path="/products"
      />

      <main className="overflow-hidden bg-white text-stone-800">
        {/* Products Introduction */}
        <section className="bg-[#FFFAF6] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
              Explore Our Collection
            </p>

            <h1 className="mt-4 font-heading text-4xl leading-tight text-green-900 sm:text-5xl lg:text-6xl">
              Find Something{" "}
              <span className="font-heading text-rose-400">
                They'll Love
              </span>
            </h1>

            <div className="mx-auto my-6 h-px w-20 bg-amber-300" />

            <p className="mx-auto max-w-2xl text-base leading-8 text-green-900 sm:text-lg">
              Browse our collection of fun and practical products
              designed especially for little ones.
            </p>
          </div>
        </section>

        {/* Products Collection */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            {categories.map((category, index) => (
              <section
                key={category.id}
                className={`mb-20 last:mb-0 ${
                  index > 0
                    ? "border-t border-rose-100 pt-16 sm:pt-20"
                    : ""
                }`}
              >
                {/* Category Heading */}
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
                    Our Collection
                  </p>

                  <h2 className="mt-3 font-heading text-3xl text-green-900 sm:text-4xl lg:text-5xl">
                    {category.name}
                  </h2>

                  <div className="mx-auto my-5 h-px w-16 bg-amber-300" />

                  <p className="mx-auto max-w-2xl text-sm leading-7 text-green-900 sm:text-base sm:leading-8">
                    {category.description}
                  </p>
                </div>

                {/* Existing Product Cards */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Customer Reviews Carousel */}
        <section className="bg-[#FFFAF6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            {/* Reviews Heading */}
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
                Little Moments, Big Love
              </p>

              <h2 className="mt-4 font-heading text-3xl leading-tight text-green-900 sm:text-4xl lg:text-5xl">
                Love From Our{" "}
                <span className="text-rose-400">Families</span>
              </h2>

              <div className="mx-auto my-5 h-px w-16 bg-amber-300" />

              <p className="mx-auto max-w-xl text-sm leading-7 text-green-900 sm:text-base">
                Every little detail matters. Discover the experiences
                families share with <Link to="/" >ChoupiJuni</Link>.
              </p>
            </div>

            {/* Two Reviews Per Slide */}
            <div
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7"
              aria-live="polite"
              aria-label={`Customer reviews, slide ${reviewPage + 1} of 2`}
            >
              {visibleReviews.map((review) => (
                <article
                  key={review.id}
                  className="flex h-full flex-col rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
                >
                  {/* Star Rating */}
                  <div
                    className="flex gap-1 text-amber-400"
                    aria-label="5 out of 5 stars"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <span
                    aria-hidden="true"
                    className="mt-5 font-serif text-4xl leading-none text-rose-200"
                  >
                    “
                  </span>

                  <p className="flex-1 text-sm leading-7 text-stone-600 sm:text-base">
                    {review.text}
                  </p>

                  {/* Reviewer */}
                  <div className="mt-6 flex items-center gap-3 border-t border-rose-50 pt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0E9] font-heading text-lg text-green-900">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-green-900">
                        {review.name}
                      </p>
                      <p className="mt-1 text-xs text-stone-400">
                        Customer Review
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => setReviewPage(0)}
                disabled={reviewPage === 0}
                aria-label="Previous reviews"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white text-green-900 transition hover:border-rose-400 hover:bg-[#FFF0E9] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span aria-hidden="true">←</span>
              </button>

              <div
                className="flex items-center gap-2"
                aria-label={`Slide ${reviewPage + 1} of 2`}
              >
                {[0, 1].map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setReviewPage(page)}
                    aria-label={`Show review slide ${page + 1}`}
                    aria-current={reviewPage === page ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      reviewPage === page
                        ? "w-8 bg-green-900"
                        : "w-2.5 bg-rose-200 hover:bg-rose-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setReviewPage(1)}
                disabled={reviewPage === 1}
                aria-label="Next reviews"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white text-green-900 transition hover:border-rose-400 hover:bg-[#FFF0E9] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <p className="mt-4 text-center text-xs tracking-wide text-stone-400">
              {reviewPage + 1} / 2
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;