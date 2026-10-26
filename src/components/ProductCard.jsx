
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

function ProductCard({ product }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Reuse existing product images; show at most 3 unique images.
    const images = useMemo(() => {
        const seen = new Set();

        return (product.styles || [])
            .filter((style) => {
                if (!style.image || seen.has(style.image)) {
                    return false;
                }

                seen.add(style.image);
                return true;
            })
            .slice(0, 10);
    }, [product.styles]);

    // Automatically advance every 3 seconds.
    useEffect(() => {
        if (images.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((index) => (index + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length, isPaused]);

    // Keep the selected index valid if the images change.
    useEffect(() => {
        setCurrentIndex(0);
    }, [product.id]);

    const changeImage = (direction) => {
        setCurrentIndex((index) =>
            (index + direction + images.length) % images.length
        );
    };

    const currentImage = images[currentIndex]?.image;

    return (
        <div className="group overflow-hidden rounded-3xl border border-rose-100/80 bg-white p-4 shadow-[0_12px_40px_rgba(120,90,70,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(120,90,70,0.12)] sm:p-5">

            {/* Product Image Carousel */}
            <div
                className="relative overflow-hidden rounded-2xl bg-[#FFF4EE]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {currentImage && (
                    <img
                        src={currentImage}
                        alt={`${product.name} - image ${currentIndex + 1}`}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                )}

                {/* Navigation arrows: shown only when multiple images exist */}
                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous product image"
                            onClick={() => changeImage(-1)}
                            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-900 shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            type="button"
                            aria-label="Next product image"
                            onClick={() => changeImage(1)}
                            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-900 shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Pagination dots */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                            {images.map((image, index) => (
                                <button
                                    key={image.image}
                                    type="button"
                                    aria-label={`Show product image ${index + 1}`}
                                    aria-current={
                                        currentIndex === index
                                            ? "true"
                                            : undefined
                                    }
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === index
                                            ? "w-5 bg-green-900"
                                            : "w-2 bg-white/90"
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Product Information — unchanged */}
            <div className="px-1 pt-5">
                <h3 className="font-heading text-2xl leading-snug text-green-900">
                    {product.name}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-7 text-green-900">
                    {product.description}
                </p>

                {/* Pricing — unchanged */}
                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span className="text-sm text-stone-400 line-through">
                        ₹{product.mrp}
                    </span>

                    <span className="text-2xl font-semibold text-green-900">
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

                {/* View Product — unchanged */}
                <Link
                    to={`/products/${product.id}`}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-300 px-6 py-3 text-sm font-semibold text-green-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-100 hover:border hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                >
                    View Product
                    <ArrowRight size={17} />
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
