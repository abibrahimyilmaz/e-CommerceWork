import { Clock, BarChart2, ArrowRight } from "lucide-react";

export default function FeaturedPosts({ posts }) {
    return (
        <section className="bg-white h-[1402px]">
            <div className="mx-auto max-w-7xl px-4 md:px-6 h-full">

                {/* HEADER */}
                <div className="pt-16 text-center">
                    <p className="text-sm font-semibold text-sky-500">
                        Practice Advice
                    </p>

                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
                        Featured Posts
                    </h2>
                </div>

                {/* POSTS */}
                <div
                    className="
                        mt-16 flex flex-col gap-12
                        md:grid md:grid-cols-3 md:gap-8
                    "
                >
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg shadow-sm overflow-hidden border"
                        >
                            {/* IMAGE */}
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-[260px] w-full object-cover"
                                />

                                {post.isNew && (
                                    <span className="absolute top-4 left-4 rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
                                        NEW
                                    </span>
                                )}
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                {/* TAGS */}
                                <div className="mb-3 flex gap-4 text-xs">
                                    <span className="text-sky-500">Google</span>
                                    <span className="text-slate-400">Trending</span>
                                    <span className="text-slate-400">New</span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-800 leading-snug">
                                    {post.title}
                                </h3>

                                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* FOOTER */}
                                <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        {post.date}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <BarChart2 size={14} />
                                        {post.comments} comments
                                    </div>
                                </div>

                                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-500">
                                    Learn More <ArrowRight size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
