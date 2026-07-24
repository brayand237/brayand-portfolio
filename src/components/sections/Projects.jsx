import projects from "../../data/projects";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Projects() {
  // Fonction pour obtenir le style du badge selon le statut
  const getStatusConfig = (status) => {
    const statusMap = {
      'terminé': {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300',
        label: '✅ Terminé'
      },
      'encours': {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        border: 'border-yellow-300',
        label: '⏳ En cours'
      },
      'planifié': {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-300',
        label: '📋 Planifié'
      }
    };
    
    return statusMap[status] || statusMap['encours'];
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-28">
      {/* Titre */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900">
          Mes projets
        </h2>
        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
          Quelques réalisations illustrant mes compétences en administration
          systèmes et réseaux.
        </p>
      </div>

      {/* Cartes */}
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const statusConfig = getStatusConfig(project.status);
          const isCompleted = project.status === 'terminé';

          return (
            <div
              key={project.id}
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
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  
                  {/* Badge de statut INACTIF */}
                  <span 
                    className={`
                      inline-block px-3 py-1 rounded-full text-sm font-medium
                      ${statusConfig.bg} 
                      ${statusConfig.text} 
                      border ${statusConfig.border}
                      cursor-default
                      select-none
                    `}
                  >
                    {statusConfig.label}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-5">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton selon le statut */}
                <div className="mt-8">
                  {isCompleted ? (
                    <Link
                      to={`/project/${project.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                      Voir le projet
                      <ArrowUpRight size={18} />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-400 font-semibold cursor-not-allowed">
                      {project.status === 'planifié' ? 'À venir' : 'En développement'}
                      <ArrowUpRight size={18} className="opacity-50" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;