import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="group rounded-3xl border border-[#D9ECFA] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full rounded-2xl bg-[#EAF5FF] object-cover transition-transform duration-300 group-hover:scale-[1.02]"/>

            <h3 className="mt-5 text-xl font-bold text-[#293241]">
                {product.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#293241]/70">
                {product.description}
            </p>

            <p className="mt-4 text-lg font-bold text-[#2878B8]">
                ₹{product.price}
            </p>

            <Link
                to={`/products/${product.id}`}
                className="mt-5 inline-block rounded-full bg-[#6CB4EE] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2878B8] hover:shadow-md"
            >
                View Product
            </Link>
        </div>
    );
}

export default ProductCard;