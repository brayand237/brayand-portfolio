import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-32 bg-gradient-to-b from-white to-slate-100 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-3 gap-14">

          {/* Présentation */}

          <div>

            <h2 className="text-3xl font-extrabold tracking-wide">
              <span className="text-gray-900">
                Brayand
              </span>

              <span className="text-blue-600 ml-2">
                Portfolio
              </span>
            </h2>

            <p className="uppercase tracking-[0.30em] text-xs text-gray-500 mt-2">
              Systems & Network
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Administrateur Systèmes & Réseaux Junior passionné par
              l'administration des infrastructures, le support informatique
              et les technologies réseau. Je recherche une opportunité
              afin de mettre mes compétences au service d'une équipe
              dynamique tout en poursuivant mon évolution professionnelle.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-bold text-gray-900">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a href="#hero" className="hover:text-blue-600 transition">
                  Accueil
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-600 transition">
                  À propos
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-600 transition">
                  Compétences
                </a>
              </li>

              <li>
                <a href="#timeline" className="hover:text-blue-600 transition">
                  Parcours
                </a>
              </li>

              <li>
                <a href="#credentials" className="hover:text-blue-600 transition">
                  Diplômes
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-600 transition">
                  Projets
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-600 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-gray-900">
              Restons en contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <Mail
                  className="text-blue-600"
                  size={20}
                />

                <a
                  href="mailto:contactkabray@gmail.com"
                  className="hover:text-blue-600 transition"
                >
                  contactkabray@gmail.com
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  className="text-blue-600"
                  size={20}
                />

                <a
                  href="tel:+237696293269"
                  className="hover:text-blue-600 transition"
                >
                  +237 696 29 32 69
                </a>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  className="text-blue-600"
                  size={20}
                />

                <span>
                  Yaoundé, Cameroun
                </span>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-xl">
                  💼
                </span>

                <a
                  href="https://www.linkedin.com/in/brayand-kape-09100a3a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Brayand Portfolio.
            Tous droits réservés.
          </p>

          <a
            href="#hero"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
          >
            <ArrowUp size={18} />
            Retour en haut
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;