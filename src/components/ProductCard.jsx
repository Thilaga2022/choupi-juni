import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="group rounded-3xl border border-[#D9ECFA] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img
                src={product.styles[0].image}
                alt={product.name}
                loading="lazy"
                className="aspect-square w-full rounded-2xl bg-[#EAF5FF] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />

            <h3 className="mt-5 text-xl font-bold text-[#676363]">
                {product.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#a09b9b]/70">
                {product.description}
            </p>

            {/* Pricing */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-[#293241]/40 line-through">
                    ₹{product.mrp}
                </span>

                <span className="text-xl font-bold text-[#2878B8]">
                    ₹{product.salePrice}
                </span>

                <span className="rounded-md bg-[#FFD95A] px-2 py-1 text-xs font-extrabold text-[#293241]">
                    {Math.round(((product.mrp - product.salePrice) / product.mrp) * 100)}% OFF
                </span>
            </div>

            <Link
                to={`/products/${product.id}`}
                className="mt-5 inline-block rounded-full bg-[#BDB2B0] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8c8584] hover:shadow-md"
            >
                View Product
            </Link>
        </div>
    );
}

export default ProductCard;