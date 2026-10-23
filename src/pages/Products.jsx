
import SEO from "../components/SEO";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";

function Products() {
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

            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Find Something{" "}
              <span className="italic text-rose-400">They'll Love</span>
            </h1>

            <div className="mx-auto my-6 h-px w-20 bg-amber-300" />

            <p className="mx-auto max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
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

                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
                    {category.name}
                  </h2>

                  <div className="mx-auto my-5 h-px w-16 bg-amber-300" />

                  <p className="mx-auto max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                    {category.description}
                  </p>
                </div>

                {/* Products: Existing product cards unchanged */}
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
      </main>
    </>
  );
}

export default Products;
