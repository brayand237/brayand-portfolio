function CredentialCard({ credential, onOpen }) {
    return (
      <div
        className="
        bg-white
        rounded-2xl
        overflow-hidden
        border
        border-gray-200
        shadow-md
        hover:shadow-xl
        hover:-translate-y-2
        hover:border-blue-500
        transition-all
        duration-300
        flex
        flex-col
        "
      >
        {/* Bande colorée */}
        <div className="h-1 w-full bg-blue-600"></div>
  
        {/* Logo */}
        <div className="flex justify-center pt-6">
  
          <img
            src={credential.logo}
            alt={credential.organization}
            className="h-14 object-contain"
          />
  
        </div>
  
        {/* Contenu */}
        <div className="px-6 py-5 flex-1 flex flex-col">
  
          <span
            className="
            self-center
            bg-blue-50
            text-blue-700
            text-xs
            font-semibold
            px-3
            py-1
            rounded-full
            "
          >
            {credential.type}
          </span>
  
          <h3
            className="
            mt-4
            text-lg
            font-bold
            text-center
            text-gray-900
            leading-6
            "
          >
            {credential.title}
          </h3>
  
          <p
            className="
            mt-2
            text-center
            text-sm
            text-gray-500
            "
          >
            {credential.organization}
          </p>
  
          <p
            className="
            mt-4
            text-sm
            text-gray-600
            leading-6
            text-center
            flex-1
            "
          >
            {credential.description}
          </p>
  
          <button
            onClick={() => onOpen(credential)}
            className="
            mt-6
            w-full
            rounded-xl
            border
            border-blue-600
            text-blue-600
            py-3
            font-semibold
            hover:bg-blue-600
            hover:text-white
            transition-all
            duration-300
            "
          >
            📄 Consulter le document →
          </button>
  
        </div>
      </div>
    );
  }
  
  export default CredentialCard;