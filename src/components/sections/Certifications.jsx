import certifications from "../../data/certifications";
import { Award, Calendar, Building2 } from "lucide-react";

function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <div className="text-center mb-20">

        <h2 className="text-4xl font-bold text-gray-900">

          Certifications & Formations

        </h2>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">

          Les principales formations, certifications et expériences
          qui attestent de mon parcours.

        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {certifications.map((item, index) => (

          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

              <Award size={34} />

            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-6">

              {item.title}

            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3 text-gray-600">

                <Building2 size={18} />

                <span>{item.issuer}</span>

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <Calendar size={18} />

                <span>{item.year}</span>

              </div>

            </div>

            <div className="mt-8">

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">

                {item.status}

              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;