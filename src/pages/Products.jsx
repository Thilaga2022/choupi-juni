import { useState } from "react";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";

function Products() {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <main>
      {/* Products Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium text-[#a09b9b]/70">
              Explore Our Collection
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#676363] sm:text-4xl">
              Find Something They'll Love
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-[#a09b9b]/70">
              Browse our collection of fun and practical products designed
              especially for little ones.
            </p>
          </div>
        </div>
      </section>

      {/* Products Collection */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          {categories.map((category) => {
            const isExpanded = expandedCategories[category.id];

            const visibleProducts = isExpanded
              ? category.products
              : category.products.slice(0, 3);

            const hasMoreProducts = category.products.length > 3;

            return (
              <div key={category.id} className="mb-20 last:mb-0">
                {/* Category Heading */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#676363] sm:text-4xl">
                    {category.name}
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-[#a09b9b]/70">
                    {category.description}
                  </p>
                </div>

                {/* Products */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {visibleProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>

                {/* See More / Show Less */}
                {hasMoreProducts && (
                  <div className="mt-10 text-center">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className="inline-flex items-center gap-2 font-semibold text-[#2878B8] transition-all duration-300 hover:gap-3"
                    >
                      {isExpanded ? "Show Less" : "See More"}
                      <span className="text-lg">
                        {isExpanded ? "↑" : "↓"}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Products;