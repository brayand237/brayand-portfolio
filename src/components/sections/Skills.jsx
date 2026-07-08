import skills from "../../data/skills";
import FadeIn from "../animations/FadeIn";

import {
  Network,
  Server,
  MonitorCog,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

function Skills() {

  const icons = [
    <Network size={42} />,
    <Server size={42} />,
    <MonitorCog size={42} />,
    <GraduationCap size={42} />
  ];

  return (
  
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      {/* Titre */}

      <div className="text-center mb-20">

        <h2 className="text-4xl font-bold text-gray-900">

          Domaines de compétences

        </h2>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">

          Les principaux domaines dans lesquels j'ai acquis des compétences
          à travers ma formation, mon expérience professionnelle
          et mes projets techniques.

        </p>

      </div>

      {/* Cartes */}

      <div className="grid lg:grid-cols-2 gap-8">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* Icône */}

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

              {icons[index]}

            </div>

            {/* Titre */}

            <h3 className="text-2xl font-bold text-gray-900 mt-6">

              {skill.title}

            </h3>

            {/* Description */}

            <p className="text-gray-600 mt-4 leading-7">

              {skill.description}

            </p>

            {/* Liste */}

            <div className="mt-8 space-y-3">

              {skill.items.map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={18}
                    className="text-green-500 flex-shrink-0"
                  />

                  <span className="text-gray-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
    //</FadeIn>
  );
}

export default Skills;