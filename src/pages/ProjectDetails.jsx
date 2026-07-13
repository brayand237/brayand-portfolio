import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Download,
} from "lucide-react";

import projects from "../data/projects";
import EvidenceCard from "../components/ui/EvidenceCard";
import ImageModal from "../components/ui/ImageModal";

function ProjectDetails() {

  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  const [modalOpen, setModalOpen] = useState(false);

  const [galleryImages, setGalleryImages] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {

    return (

      <section className="max-w-5xl mx-auto py-32 px-8 text-center">

        <h1 className="text-4xl font-bold">
          Projet introuvable
        </h1>

        <p className="mt-4 text-gray-600">
          Le projet demandé n'existe pas.
        </p>

        <Link
          to="/"
          className="inline-flex mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          Retour à l'accueil
        </Link>

      </section>

    );

  }

  function openGallery(items, index) {

    setGalleryImages(items);

    setCurrentIndex(index);

    setModalOpen(true);

  }

  return (

    <>

      <section className="max-w-7xl mx-auto px-8 py-20">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >

          <ArrowLeft size={18} />

          Retour aux projets

        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="mt-10 rounded-3xl shadow-xl w-full h-[450px] object-cover"
        />

        <div className="mt-10">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

            {project.category}

          </span>

          <h1 className="text-5xl font-bold mt-6">

            {project.title}

          </h1>

          <p className="text-gray-600 mt-6 leading-8 text-lg">

            {project.description}

          </p>

        </div>

        <div className="mt-14">

        <h2 className="text-2xl font-bold">
            Technologies utilisées
        </h2>

          <div className="flex flex-wrap gap-3 mt-6">

            {project.technologies.map((tech, index) => (

              <span
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-xl"
              >

                {tech}

              </span>

            ))}

          </div>

        </div>

        {

          project.documentation && (

            <div className="mt-10">

              <a

                href={project.documentation}

                target="_blank"

                rel="noopener noreferrer"

                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl transition"

              >

                <Download size={18} />

                Télécharger le rapport complet

              </a>

            </div>

          )

        }

        <div className="mt-20 space-y-20">

          {

            project.sections.map((section, sectionIndex) => (

              <div
                key={sectionIndex}
                className="bg-white rounded-3xl border border-gray-200 shadow-lg p-10"
              >

                  <h2 className="text-3xl font-bold text-gray-900">
                       {section.title}
                  </h2>

                <p className="text-gray-600 leading-8 mt-5">

                  {section.content}

                </p>

                {

                  section.galleries.map((gallery, galleryIndex) => (

                    <div
                      key={galleryIndex}
                      className="mt-12"
                    >

                      <div className="flex items-center justify-between">

                        <div>

                        <h3 className="text-2xl font-semibold text-blue-600">
                          {gallery.title}
                        </h3>

                          <p className="text-gray-500 mt-2">

                            {gallery.items.length} élément(s)

                          </p>

                        </div>

                      </div>

                      <div className="grid lg:grid-cols-2 gap-8 mt-8">

                        {

                          gallery.items.map((item, itemIndex) => (

                            <EvidenceCard

                              key={itemIndex}

                              evidence={item}

                              onOpen={() =>
                                openGallery(
                                  gallery.items,
                                  itemIndex
                                )
                              }

                            />

                          ))

                        }

                      </div>

                    </div>

                  ))

                }

              </div>

            ))

          }

        </div>
        <ImageModal
  open={modalOpen}
  onClose={() => setModalOpen(false)}
  images={galleryImages}
  currentIndex={currentIndex}
  setCurrentIndex={setCurrentIndex}
/>

</section>

</>

);

}

export default ProjectDetails;