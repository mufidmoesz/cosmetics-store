import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "Promos", id: "promos" },
    { label: "Reviews", id: "reviews" },
    { label: "About", id: "about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">

            {/* Logo */}
            <h2 className="text-pink-500 text-xl font-bold tracking-tight">
            ABCCosmetics
            </h2>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                {navItems.map(item => (
                    <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-pink-500 transition">
                        {item.label}
                    </a>
                    </li>
                ))}
            </ul>


            {/* Buttons */}
            <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-1.5 text-sm rounded-md border border-gray-200 bg-white text-black hover:bg-gray-100 transition">
                Login
            </button>
            <button className="px-4 py-1.5 text-sm rounded-md bg-pink-500 text-white hover:bg-pink-600 transition">
                Sign Up
            </button>
            </div>

            {/* Mobile menu (optional) */}
            <button className="md:hidden text-pink-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>

        </div>
    </nav>
  );
}