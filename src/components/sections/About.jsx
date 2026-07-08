import about from "../../data/about";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "../animations/FadeIn";

function About() {
  return (
    // <FadeIn delay={index * 0.15}>
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      {/* Titre */}
      <FadeIn>
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900">
          À propos de moi
        </h2>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
          Mon parcours, les compétences que j'ai développées et les objectifs
          qui orientent mon évolution professionnelle.
        </p>
      </div>
      </FadeIn>

      {/* Contenu */}
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Illustration */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 transition duration-300 hover:shadow-2xl">

          <a
  href="/images/about/network-illustration.png"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/about/network-illustration.png"
    alt="Architecture réseau"
    className="w-full h-auto object-contain rounded-2xl transition duration-300 hover:scale-105 cursor-pointer"
  />
</a>

        </div>
        
        {/* Texte */}
        <div>

          <h3 className="text-3xl font-bold text-gray-900">
            {about.title}
          </h3>

          <p className="mt-6 text-gray-600 leading-8 whitespace-pre-line">
            {about.description}
          </p>

          <div className="mt-10 space-y-5">

            {about.highlights.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >
                <CheckCircle2
                  className="text-green-500 flex-shrink-0"
                  size={22}
                />

                <span className="text-gray-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
      
    </section>
    //</FadeIn>
  );
}

export default About;