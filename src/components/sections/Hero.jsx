import profile from "../../data/profile";
import Button from "../ui/Button";
import ProfileCard from "../ui/ProfileCard";
import stats from "../../data/stats";

function Hero() {
  return (
    <section
      id="hero"
      className="grid-background max-w-7xl mx-auto px-8 py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
    >
      {/* Partie gauche */}
      <div className="max-w-2xl">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Salut, bienvenue sur mon portfolio
        </span>

        <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">

          Je suis

          <span className="block text-blue-600 mt-2">
            {profile.firstName}
          </span>

          <span className="block">
            {profile.lastName}
          </span>

        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-700">
          {profile.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {profile.subtitle}
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Je recherche actuellement une opportunité professionnelle
          dans l'administration systèmes et réseaux ou le support
          informatique afin de contribuer activement à des projets
          techniques tout en développant mes compétences.
        </p>

        {/* Boutons */}
        <div className="flex items-center gap-5 mt-10">

  <Button href={profile.cv}>
    Télécharger mon CV
  </Button>

  <Button
    primary={false}
    href="#projects"
  >
    Voir mes projets
  </Button>

</div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-6 mt-14">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center hover:shadow-xl transition"
            >

              <h3 className="text-4xl font-extrabold text-blue-600">
                {stat.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Carte de profil */}
      <ProfileCard />

    </section>
  );
}

export default Hero;