// components/Footer.jsx
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-slate-600">
            <div className="mx-auto max-w-md px-6 py-10">

                {/* BRAND */}
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-xl font-bold text-slate-800">Bandage</h2>

                    <div className="flex items-center gap-4 text-sky-500">
                        <Facebook size={22} />
                        <Instagram size={22} />
                        <Twitter size={22} />
                    </div>
                </div>

                {/* LINKS */}
                <div className="mt-10 space-y-8 text-sm md:space-y-0 md:grid md:grid-cols-5 md:gap-10">

                    <div>
                        <h3 className="mb-3 font-semibold text-slate-800">Company Info</h3>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-slate-800">Legal</h3>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-slate-800">Features</h3>
                        <ul className="space-y-2">
                            <li>Business Marketing</li>
                            <li>User Analytic</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-slate-800">Resources</h3>
                        <ul className="space-y-2">
                            <li>iOS & Android</li>
                            <li>Watch a Demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </div>

                    {/* GET IN TOUCH */}
                    <div>
                        <h3 className="mb-3 font-semibold text-slate-800">Get In Touch</h3>

                        <div className="flex overflow-hidden rounded-md border">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 text-sm outline-none"
                            />
                            <button className="bg-sky-500 px-4 text-sm font-semibold text-white">
                                Subscribe
                            </button>
                        </div>

                        <p className="mt-3 text-xs text-slate-400">
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
                Made With Love By Finland <br />
                All Right Reserved
            </div>
        </footer>
    );
}
