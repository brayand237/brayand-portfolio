import { Search, FileText, Code2 } from "lucide-react";

function EvidenceCard({ evidence, onOpen }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-semibold text-gray-900">
            {evidence.title}
          </h3>

          <p className="mt-2 text-gray-600 leading-7">
            {evidence.description}
          </p>

        </div>

      </div>

      {/* Aperçu */}

      {evidence.type === "image" && (

        <img
          src={evidence.image}
          alt={evidence.title}
          className="mt-6 rounded-xl border w-full max-h-72 object-cover"
        />

      )}

      {/* Boutons */}

      <div className="mt-6 flex flex-wrap gap-3">

        {evidence.type === "image" && (

          <button
            onClick={onOpen}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
          >

            <Search size={18} />

            Agrandir

          </button>

        )}

        {evidence.type === "pdf" && (

          <a
            href={evidence.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition"
          >

            <FileText size={18} />

            Ouvrir le document

          </a>

        )}

        {evidence.type === "code" && (

          <button
            className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-xl transition"
          >

            <Code2 size={18} />

            Voir le code

          </button>

        )}

      </div>

    </div>
  );
}

export default EvidenceCard;