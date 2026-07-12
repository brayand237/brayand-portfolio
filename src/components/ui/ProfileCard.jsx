import profile from "../../data/profile";
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
    <div className="w-full max-w-[390px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      {/* Bandeau */}
      <div className="h-28 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>

      {/* Photo */}
      <div className="flex justify-center -mt-16">
        <a
          href="/images/profile/photo.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/profile/photo.png"
            alt="Photo de profil"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg hover:scale-105 transition"
          />
        </a>
      </div>

      {/* Nom */}
      <div className="text-center px-8 mt-5">

        <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          Disponible immédiatement
        </span>

        <h2 className="mt-5 text-3xl font-bold text-gray-900">
          Fogang Kape
        </h2>

        <h3 className="text-2xl font-semibold text-gray-800">
          Gilles Brayand
        </h3>

        <p className="mt-3 text-blue-600 font-semibold">
          {profile.title}
        </p>

      </div>

      {/* Informations */}
      <div className="px-8 py-8 space-y-5">

        <div className="flex items-start gap-4">
          <GraduationCap className="text-blue-600 mt-1" size={20} />
          <span>BTS Gestion des Systèmes d'Information</span>
        </div>

        <div className="flex items-start gap-4">
          <Network className="text-blue-600 mt-1" size={20} />
          <span>Cisco Networking Academy</span>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="text-blue-600 mt-1" size={20} />
          <span>Administration Systèmes & Réseaux</span>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-blue-600 mt-1" size={20} />
          <span>Yaoundé, Cameroun</span>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-blue-600 mt-1" size={20} />
          <span className="break-all">
            contactkabray@gmail.com
          </span>
        </div>

      </div>

      {/* Boutons */}
      <div className="px-8 pb-8 flex gap-3">

        <Button
          href="/document/cv.pdf"
          download
        >
          <Download size={18} />
        </Button>

        <Button
  href="https://www.linkedin.com/in/brayand-kape-09100a3a6"
  target="_blank"
  primary={false}
>
  LinkedIn
</Button>

      </div>

    </div>
  );
}

export default ProfileCard;