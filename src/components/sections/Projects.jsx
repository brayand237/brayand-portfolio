import projects from "../../data/projects";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      {/* Titre */}
      <FadeIn>
        <div className="text-center mb-20">

          <h2 className="text-4xl font-bold text-gray-900">
            Mes projets
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Quelques réalisations qui illustrent mon parcours en administration
            systèmes et réseaux ainsi que ma capacité à concevoir, déployer et
            documenter des infrastructures informatiques.
          </p>

        </div>
      </FadeIn>

      {/* Cartes */}
      <div className="grid lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <FadeIn
            key={index}
            delay={index * 0.15}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition duration-500 hover:scale-105"
                />

              </div>

              {/* Contenu */}
              <div className="p-7">

                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-5">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech, i) => (

                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Bouton */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 mt-8 text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Voir le projet

                  <ArrowUpRight size={18} />
                </a>

              </div>

            </div>
          </FadeIn>

        ))}

      </div>

    </section>
  );
}

export default Projects;