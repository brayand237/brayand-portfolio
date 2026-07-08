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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b"
            : "bg-white/80 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

          <a href="#hero">

            <h1 className="text-2xl font-bold text-blue-600">
              Brayand
            </h1>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Network & Systems Administrator junior
            </p>

          </a>

          <DesktopMenu />

          <a
            href="#contact"
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Me contacter
          </a>

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