export default function BestsellerProducts({ products }) {
    if (!products || products.length === 0) return null;

    // Mobilde max 5, desktopta max 10
    const visibleProducts = products.slice(0, 10);

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10">

                {/* TITLE */}
                <div className="mb-10 text-center">
                    <h2 className="text-lg font-bold text-slate-800">
                        BESTSELLER PRODUCTS
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* PRODUCTS */}
                <div
                    className="
                        flex flex-col gap-10
                        md:grid md:grid-cols-5 md:gap-8
                    "
                >
                    {visibleProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`
                                text-center
                                ${index >= 5 ? "hidden md:block" : ""}
                            `}
                        >
                            {/* IMAGE */}
                            <div className="bg-slate-100 rounded-md overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="
                                        mx-auto h-[360px] w-full
                                        object-contain
                                    "
                                />
                            </div>

                            {/* TEXT */}
                            <h3 className="mt-4 text-sm font-semibold text-slate-800">
                                {product.title}
                            </h3>

                            <p className="mt-1 text-xs text-slate-500">
                                {product.department}
                            </p>

                            <div className="mt-2 flex justify-center gap-2 text-sm font-semibold">
                                <span className="text-slate-400 line-through">
                                    ${product.price.toFixed(2)}
                                </span>
                                <span className="text-emerald-600">
                                    ${product.salePrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LOAD MORE */}
                <div className="mt-12 text-center">
                    <button className="rounded-md border border-sky-500 px-8 py-3 text-sm font-semibold text-sky-500">
                        LOAD MORE PRODUCTS
                    </button>
                </div>

            </div>
        </section>
    );
}
