import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-white/60 backdrop-blur-xl"
        }`}
      >

        <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

          {/* Logo */}

          <Link to="/#hero">

            <h1 className="text-2xl font-extrabold tracking-wide">

              <span className="text-gray-900">
                Brayand
              </span>

              <span className="text-blue-600 ml-2">
                Portfolio
              </span>

            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Network & Systems
            </p>

            </Link>

          {/* Menu Desktop */}

          <DesktopMenu />

          {/* Actions */}

          <div className="hidden lg:flex items-center gap-4">

            

          <Link
            to="/#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Me contacter
          </Link>

          </div>

          {/* Menu Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={32} />
          </button>

        </div>

      </header>

      <div className="h-20"></div>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />

    </>
  );
}

export default Navbar;