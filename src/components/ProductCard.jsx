
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ProductCard({ product }) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-rose-100/80 bg-white p-4 shadow-[0_12px_40px_rgba(120,90,70,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(120,90,70,0.12)] sm:p-5">

            {/* Product Image */}
            <div className="overflow-hidden rounded-2xl bg-[#FFF4EE]">
                <img
                    src={product.styles[0].image}
                    alt={product.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            {/* Product Information */}
            <div className="px-1 pt-5">
                <h3 className="font-serif text-2xl leading-snug text-stone-800">
                    {product.name}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-7 text-stone-600">
                    {product.description}
                </p>

                {/* Pricing */}
                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span className="text-sm text-stone-400 line-through">
                        ₹{product.mrp}
                    </span>

                    <span className="text-2xl font-semibold text-rose-500">
                        ₹{product.salePrice}
                    </span>

                    <span className="rounded-full bg-[#FFF4EE] px-3 py-1 text-xs font-bold text-rose-500">
                        {Math.round(
                            ((product.mrp - product.salePrice) /
                                product.mrp) *
                                100
                        )}% OFF
                    </span>
                </div>

                {/* View Product */}
                <Link
                    to={`/products/${product.id}`}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                >
                    View Product
                    <ArrowRight size={17} />
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
