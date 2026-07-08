import profile from "../../data/profile";
import infos from "../../data/infos";
import Button from "./Button";
import {
  GraduationCap,
  Network,
  ShieldCheck,
  MapPin,
  Mail,
  Download,
} from "lucide-react";

function ProfileCard() {
  return (
    <div className="w-[650px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Bandeau supérieur */}
      <div className="h-24 bg-gradient-to-r from-blue-700 to-blue-500"></div>

      {/* Photo */}
      <div className="flex justify-center -mt-14">
        <div className="w-32 h-32 rounded-full bg-slate-200 border-4 border-white flex items-center justify-center text-gray-500 font-semibold">
        <a
  href="/images/profile/photo.png"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/profile/photo.png"
    alt="photo de profile"
    className="w-full h-auto object-contain rounded-2xl transition duration-300 hover:scale-105 cursor-pointer"
  />
</a>
        </div>
      </div>

      {/* Nom */}
      <div className="text-center mt-5 px-6">

        <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full font-medium">
          🟢 Disponible
        </span>

        <h2 className="text-2xl font-bold mt-5">
          Fogang Kape
        </h2>

        <h3 className="text-xl font-semibold">
          Gilles Brayand
        </h3>

        <p className="text-blue-600 mt-3 font-medium">
          {profile.title}
        </p>

      </div>

      {/* Compétences */}
      <div className="px-8 py-8 space-y-5">

        <div className="flex items-center gap-3">
          <GraduationCap className="text-blue-600" size={20} />
          <span>BTS Gestion des Systèmes d'Information</span>
        </div>

        <div className="flex items-center gap-3">
          <Network className="text-blue-600" size={20} />
          <span>Cisco Networking Academy</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-blue-600" size={20} />
          <span>Administration Systèmes & Réseaux</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-blue-600" size={20} />
          <span>Cameroun</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-blue-600" size={20} />
          <span>contactkabray@gmail.com</span>
        </div>

      </div>

      {/* Bouton */}
      <div className="px-8 pb-8">

        <Button href={profile.cv}>
          <div className="flex items-center justify-center gap-2">
            <Download size={18} />
            Télécharger le CV
          </div>
        </Button>

      </div>

    </div>
  );
}

export default ProfileCard;