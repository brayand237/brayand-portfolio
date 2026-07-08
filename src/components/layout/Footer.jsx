function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-2xl font-bold text-blue-600">
              Brayand Kapé
            </h2>

            <p className="text-sm uppercase tracking-wider text-gray-500 mt-1">
              Network & Systems Administrator junior
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              Portfolio professionnel présentant mon parcours,
              mes projets, mes compétences et mes réalisations
              dans le domaine des systèmes, réseaux et du support informatique.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              Navigation
            </h3>

            <ul className="mt-6 space-y-3">

              <li><a href="#hero" className="hover:text-blue-600 transition">Accueil</a></li>

              <li><a href="#about" className="hover:text-blue-600 transition">À propos</a></li>

              <li><a href="#skills" className="hover:text-blue-600 transition">Compétences</a></li>

              <li><a href="#projects" className="hover:text-blue-600 transition">Projets</a></li>

              <li><a href="#credentials" className="hover:text-blue-600 transition">Diplômes</a></li>

              <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              Restons en contact
            </h3>

            <div className="mt-6 space-y-4">

              <p className="text-gray-600">
                📧 contactkabray@gmail.com
              </p>

              <p className="text-gray-600">
                📞 +237 696 29 32 69
              </p>

              <p className="text-gray-600">
                📍 Yaoundé, Cameroun
              </p>

              <a
                href="https://www.linkedin.com/in/brayand-kape-09100a3a6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                Mon LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">

            © {new Date().getFullYear()} Brayand. Tous droits réservés.

          </p>

          <a
            href="#hero"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
          >
            ↑ Retour en haut
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;