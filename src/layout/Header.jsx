import { User, Search, ShoppingCart, Menu } from "lucide-react";
import headerImg from "../assets/header.png";

export default function Header() {
    return (
        <header className="w-full bg-white">
            {/* TOP BAR */}
            <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                {/* LOGO */}
                <h1 className="text-xl font-bold text-slate-800">Bandage</h1>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
                    <a href="#" className="hover:text-slate-800">Home</a>
                    <a href="#" className="hover:text-slate-800">Product</a>
                    <a href="#" className="hover:text-slate-800">Pricing</a>
                    <a href="#" className="hover:text-slate-800">Contact</a>
                </nav>

                {/* ICONS */}
                <div className="flex items-center gap-4 text-slate-600">
                    <User size={20} />
                    <Search size={20} />
                    <ShoppingCart size={20} />

                    {/* MOBILE MENU ICON */}
                    <Menu size={22} className="md:hidden" />
                </div>
            </div>

            {/* MOBILE NAV */}
            <nav className="md:hidden flex flex-col items-center gap-4 py-6 text-lg text-slate-400 font-medium">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </nav>

            {/* HERO */}
            <section className="w-full bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]">
                <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col items-center text-center gap-10 md:flex-row md:text-left md:items-center">

                    {/* TEXT */}
                    <div className="max-w-md">
                        <p className="text-sm font-semibold tracking-wide text-blue-600">
                            SUMMER 2020
                        </p>

                        <h2 className="mt-4 text-4xl font-extrabold text-slate-800 leading-tight">
                            NEW <br /> COLLECTION
                        </h2>

                        <p className="mt-4 text-slate-600">
                            We know how large objects will act, but things on a small scale.
                        </p>

                        <button className="mt-6 rounded-md bg-sky-500 px-6 py-3 text-white font-semibold">
                            SHOP NOW
                        </button>
                    </div>

                    {/* IMAGE */}
                    <div className="w-[280px] md:w-[388px]">
                        <img
                            src={headerImg}
                            alt="model"
                            className="w-full object-contain"
                        />
                    </div>

                </div>
            </section>
        </header>
    );
}
