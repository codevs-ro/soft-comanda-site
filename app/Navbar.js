"use client";
import { useState, useEffect } from "react";
const { default: Link } = require("next/link");

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);

  return (
    <>
      <nav className="fixed z-10 top-0 w-full px-8 py-4 shadow-sm bg-gray-50 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          software company
        </Link>
        <div className="hidden  md:flex items-center justify-between text-sm gap-4 ">
          <Link href="/products" className="hover:text-teal-500 transition-all">
            Produse
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-teal-500 transition-all"
          >
            Portofoliu
          </Link>
          <Link
            href="/"
            className="px-4 py-2 border-2 border-teal-300 hover:border-teal-400  flex items-center justify-start  hover:rounded-2xl bg-teal-500/10 hover:bg-teal-500/10 rounded-md transition-all"
          >
            <svg
              className="w-5 h-5 text-teal-500 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>
            Sună Acum
          </Link>
        </div>
        <svg
          onClick={() => setMenu(!menu)}
          className="w-6 h-6 text-black md:hidden "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </nav>
      {menu && (
        <div
          className="h-screen z-20 w-full bg-black/50 flex justify-end  fixed top-0"
          onClick={() => setMenu(!menu)}
        >
          <div className="w-2/3 gap-12 bg-teal-500 flex slide-right flex-col p-4">
            <div className="slide-in flex items-center justify-between w-full">
              <h3 className="font-semibold text-white">software company</h3>
            </div>
            <div className="slide-in flex flex-col items-left">
              <h3 className=" text-white font-semibold">Pagini</h3>
              <div className="pt-1 w-full bg-white/10 mt-1"></div>
              <div className="flex flex-col gap-4 text-white text-sm">
                <Link href="/" className="mt-4">
                  Acasă
                </Link>
                <Link href="/products">Produse</Link>
                <Link href="/portfolio">Portfolio</Link>
              </div>
            </div>
            <div className="slide-in flex flex-col items-left">
              <h3 className=" text-white font-semibold">Rețele Sociale</h3>
              <div className="pt-1 w-full bg-white/10 mt-1"></div>
              <div className="flex flex-col gap-4 text-white text-sm">
                <Link href="/" className="mt-4">
                  Linkedin
                </Link>
                <Link href="/products">Twitter</Link>
                <Link href="/portfolio">Instagram</Link>
              </div>
            </div>
            <div className="slide-in flex flex-col items-left">
              <h3 className=" text-white font-semibold">Colaborări</h3>
              <div className="pt-1 w-full bg-white/10 mt-1"></div>
              <div className="flex flex-col gap-4 text-white text-sm">
                <Link href="/" className="mt-4">
                  contact@softwarecompany.com
                </Link>
                <Link
                  href="/"
                  className="px-4 py-2 w-full border-2 border-black  flex items-center justify-center  hover:rounded-2xl bg-white text-black rounded-md transition-all"
                >
                  <svg
                    className="w-5 h-5 text-teal-500 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>
                  Sună Acum
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
