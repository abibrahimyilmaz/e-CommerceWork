// components/ShopCards.jsx
export default function ShopCards({ cards }) {
    if (!cards || cards.length < 3) return null;

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-md md:max-w-7xl px-4 md:px-6 py-8 md:py-12">

                {/* LAYOUT */}
                <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8">

                    {/* SOL / MOBİL İLK CARD */}
                    <div className="relative md:col-span-2 md:row-span-2 h-[420px] md:h-[600px] overflow-hidden rounded-md">
                        <img
                            src={cards[0].image}
                            alt={cards[0].title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-sky-700/70 flex flex-col justify-end p-6 md:p-8">
                            <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
                                {cards[0].title}
                            </h3>

                            <button className="mt-4 w-max rounded-md border border-white px-6 py-2 text-sm font-semibold text-white">
                                EXPLORE ITEMS
                            </button>
                        </div>
                    </div>

                    {/* SAĞ ÜST / MOBİL 2. CARD */}
                    <div className="relative h-[420px] md:h-[285px] overflow-hidden rounded-md">
                        <img
                            src={cards[1].image}
                            alt={cards[1].title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-sky-700/70 flex flex-col justify-end p-6">
                            <h3 className="text-lg font-bold text-white">
                                {cards[1].title}
                            </h3>
                        </div>
                    </div>

                    {/* SAĞ ALT / MOBİL 3. CARD */}
                    <div className="relative h-[420px] md:h-[285px] overflow-hidden rounded-md">
                        <img
                            src={cards[2].image}
                            alt={cards[2].title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-sky-700/70 flex flex-col justify-end p-6">
                            <h3 className="text-lg font-bold text-white">
                                {cards[2].title}
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
