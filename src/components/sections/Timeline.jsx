import timeline from "../../data/timeline";
import { GraduationCap, Briefcase, BookOpen, Rocket } from "lucide-react";
import FadeIn from "../animations/FadeIn";

function Timeline() {

  const icons = [
    <GraduationCap size={22} />,
    <Briefcase size={22} />,
    <BookOpen size={22} />,
    <Rocket size={22} />
  ];

  return (
   
    <section
      id="timeline"
      className="max-w-6xl mx-auto px-8 py-28"
    >
      <div className="text-center mb-20">

        <h2 className="text-4xl font-bold text-gray-900">

          Mon parcours

        </h2>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">

          Les principales étapes qui ont construit mon parcours
          en administration systèmes et réseaux.

        </p>

      </div>

      <div className="relative">

        {/* Ligne verticale */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200"></div>

        <div className="space-y-14">

          {timeline.map((item, index) => (

            <div
              key={index}
              className="relative flex gap-8"
            >

              {/* Icône */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">

                {icons[index]}

              </div>

              {/* Carte */}
              <div className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition">

                <span className="text-blue-600 font-semibold">

                  {item.year}

                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-2">

                  {item.title}

                </h3>

                <p className="text-gray-500 mt-1">

                  {item.location}

                </p>

                <p className="text-gray-600 mt-5 leading-7">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
   // </FadeIn>
  );
}

export default Timeline;