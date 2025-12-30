import { BookOpen, LayoutGrid, TrendingUp } from "lucide-react";

export default function Features() {
    return (
        <section className="bg-white h-[1214px]">
            <div className="mx-auto max-w-7xl px-4 md:px-6 h-full flex flex-col">

                {/* HEADER */}
                <div className="pt-16 text-center">
                    <p className="text-sm font-semibold text-slate-500">
                        Featured Products
                    </p>

                    <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-800">
                        THE BEST SERVICES
                    </h2>

                    <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* FEATURES */}
                <div
                    className="
                        mt-20 flex flex-col gap-16
                        md:grid md:grid-cols-3 md:gap-12
                        flex-grow
                    "
                >
                    {/* ITEM 1 */}
                    <div className="text-center px-6">
                        <BookOpen className="mx-auto h-12 w-12 text-sky-500" />

                        <h3 className="mt-6 text-lg font-bold text-slate-800">
                            Easy Wins
                        </h3>

                        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                            Get your best looking smile now!
                        </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="text-center px-6">
                        <LayoutGrid className="mx-auto h-12 w-12 text-sky-500" />

                        <h3 className="mt-6 text-lg font-bold text-slate-800">
                            Concrete
                        </h3>

                        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                            Defalcate is most focused in helping you discover your most beautiful smile
                        </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="text-center px-6">
                        <TrendingUp className="mx-auto h-12 w-12 text-sky-500" />

                        <h3 className="mt-6 text-lg font-bold text-slate-800">
                            Hack Growth
                        </h3>

                        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                            Overcame any hurdle or any other problem.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
