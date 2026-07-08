import profile from "../../data/profile";
import Button from "../ui/Button";
import ProfileCard from "../ui/ProfileCard";
import stats from "../../data/stats";
import FadeIn from "../animations/FadeIn";

function Hero() {
  return (
    <section
      id="hero"
      className="grid-background max-w-7xl mx-auto px-8 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
    >
      {/* Partie gauche */}
      <div className="max-w-2xl">

        <p className="text-blue-600 font-semibold mb-4 text-lg">
          Bonjour 👋
        </p>

        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>

        <h2 className="text-2xl text-blue-600 font-semibold mt-6">
          {profile.title}
        </h2>

        <p className="text-gray-600 mt-5 leading-8">
          {profile.subtitle}
        </p>

        <p className="mt-6 text-lg text-gray-800 font-medium">
          {profile.slogan}
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Button href={profile.cv}>
            Télécharger mon CV
          </Button>

          <Button primary={false} href="#projects">
            Voir mes projets
          </Button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-5 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-5 text-center"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {stat.number}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Partie droite */}
      <ProfileCard />

    </section>

  );
}

export default Hero;