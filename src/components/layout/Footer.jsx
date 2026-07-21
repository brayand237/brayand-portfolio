import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-3 gap-14">

          {/* Présentation */}

          <div>

            <h2 className="text-3xl font-bold tracking-wide">

              <span className="text-gray-900">
                Brayand
              </span>

              <span className="text-blue-600 ml-2">
                Portfolio
              </span>

            </h2>

            <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mt-2">
              Systems & Network
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Administrateur Systèmes & Réseaux Junior passionné par
              l'administration des infrastructures, le support informatique
              et les technologies réseau. Je recherche une opportunité
              professionnelle afin de développer mes compétences et
              contribuer à des projets concrets.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-semibold text-gray-900">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link to="/#hero" className="hover:text-blue-600 transition">
                  Accueil
                </Link>
              </li>

              <li>
                <Link to="/#about" className="hover:text-blue-600 transition">
                  À propos
                </Link>
              </li>

              <li>
                <Link to="/#skills" className="hover:text-blue-600 transition">
                  Compétences
                </Link>
              </li>

              <li>
                <Link to="/#timeline" className="hover:text-blue-600 transition">
                  Parcours
                </Link>
              </li>

              <li>
                <Link to="/#credentials" className="hover:text-blue-600 transition">
                  Diplômes
                </Link>
              </li>

              <li>
                <Link to="/#projects" className="hover:text-blue-600 transition">
                  Projets
                </Link>
              </li>

              <li>
                <Link to="/#contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-gray-900">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-blue-600"
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
                  size={18}
                  className="text-blue-600"
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
                  size={18}
                  className="text-blue-600"
                />

                <span>
                  Yaoundé, Cameroun
                </span>

              </div>

              <div>

                <a
                  href="https://www.linkedin.com/in/brayand-kape-09100a3a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Voir mon profil LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Brayand Portfolio. Tous droits réservés.
          </p>

          <Link
            to="/#hero"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
          >
            Retour au portfolio
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;