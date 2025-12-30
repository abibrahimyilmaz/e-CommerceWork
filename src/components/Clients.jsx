// components/Clients.jsx
export default function Clients({ brands }) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-md px-6 py-10 ">
                <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-6">
                    {brands.map((brand) => (
                        <img
                            key={brand.id}
                            src={brand.logo}
                            alt={brand.name}
                            className="h-8 grayscale opacity-70"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
