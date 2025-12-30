export default function FeaturedContent() {
    return (
        <section className="bg-white h-[910px]">
            <div className="mx-auto max-w-7xl px-4 md:px-6 h-full">

                <div className="
                    flex flex-col gap-10
                    md:grid md:grid-cols-2 md:items-center
                ">


                    <div className="grid grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-md bg-slate-100">
                            <img
                                src="/images/featured-1.jpg"
                                alt="featured 1"
                                className="h-[360px] md:h-[420px] w-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden rounded-md bg-slate-100">
                            <img
                                src="/images/featured-2.jpg"
                                alt="featured 2"
                                className="h-[360px] md:h-[420px] w-full object-cover"
                            />
                        </div>
                    </div>
                    {/* TEXT */}
                    <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
                        <p className="text-sm font-semibold text-sky-500">
                            Featured Products
                        </p>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                            We love <br /> what we do
                        </h2>

                        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                            Problems trying to resolve the conflict between
                            the two major realms of classical physics:
                            Newtonian mechanics
                        </p>

                        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                            Problems trying to resolve the conflict between
                            the two major realms of classical physics:
                            Newtonian mechanics
                        </p>
                    </div>

                    {/* IMAGES */}


                </div>
            </div>
        </section>
    );
}
