import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-white/30 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            className="leading-tight select-none"
          >
            <h1 className="text-2xl font-extrabold tracking-wide">
              <span className="text-gray-900">
                Brayand
              </span>

              <span className="text-blue-600 ml-2">
                Portfolio
              </span>
            </h1>

            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mt-1">
              Systems & Network
            </p>
          </a>

          {/* Navigation Desktop */}
          <DesktopMenu />

          {/* Bouton Contact */}
          <a
            href="#contact"
            className="hidden lg:flex items-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-xl font-semibold transition duration-300"
          >
            Me contacter
          </a>

          {/* Menu Mobile */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setOpen(true)}
          >
            <Menu size={30} />
          </button>

        </div>
      </header>

      {/* Compensation de la navbar fixe */}
      <div className="h-16"></div>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default Navbar;