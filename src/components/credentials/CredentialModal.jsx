import { X, Download, Award } from "lucide-react";

function CredentialModal({ credential, onClose }) {
  if (!credential) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-6xl h-[88vh] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="flex items-center justify-between px-8 py-5 border-b bg-gray-50">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">

              <Award className="text-blue-600" size={24} />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                {credential.title}
              </h2>

              <p className="text-gray-500">
                {credential.organization}
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* PDF */}
        <div className="flex-1 bg-gray-100">

          <iframe
            src={credential.file}
            title={credential.title}
            className="w-full h-full"
          />

        </div>

        {/* Pied */}
        <div className="border-t bg-white px-8 py-4 flex justify-between items-center">

          <span className="text-sm text-gray-500">
            Document officiel
          </span>

          <a
            href={credential.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
          >
            <Download size={18} />
            Télécharger
          </a>

        </div>

      </div>
    </div>
  );
}

export default CredentialModal;