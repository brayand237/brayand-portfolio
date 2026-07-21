import { Search, FileText, Code2 } from "lucide-react";

function EvidenceCard({ evidence, onOpen }) {
  return (
    <article className="border border-gray-200 rounded-2xl overflow-hidden bg-white">

      {/* Aperçu */}

      {evidence.type === "image" && (
        <button
          onClick={onOpen}
          className="w-full block overflow-hidden"
        >
          <img
            src={evidence.image}
            alt={evidence.title}
            className="w-full h-64 object-cover hover:scale-[1.02] transition duration-300"
          />
        </button>
      )}

      <div className="p-6">

        <h3 className="text-xl font-semibold text-gray-900">
          {evidence.title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {evidence.description}
        </p>

        <div className="mt-6">

          {evidence.type === "image" && (

            <button
              onClick={onOpen}
              className="text-blue-600 hover:underline font-medium"
            >
              Voir la capture
            </button>

          )}

          {evidence.type === "pdf" && (

            <a
              href={evidence.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Ouvrir le document
            </a>

          )}

          {evidence.type === "code" && (

            <button className="text-blue-600 hover:underline font-medium">
              Voir le code
            </button>

          )}

        </div>

      </div>

    </article>
  );
}

export default EvidenceCard;