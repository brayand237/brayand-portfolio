import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../data/contact";
import FadeIn from "../animations/FadeIn";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess("✅ Votre message a été envoyé avec succès.");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(
          "❌ Une erreur est survenue. Veuillez réessayer plus tard."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    //<FadeIn delay={index * 0.15}>
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900">
          Contact
        </h2>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
          Une opportunité, une collaboration ou simplement une question ?
          Je serai ravi d'échanger avec vous.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-14">

        {/* Informations */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-10">

          <h3 className="text-2xl font-bold text-gray-900">
            {contact.title}
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            {contact.description}
          </p>

          <div className="space-y-6 mt-10">

            <div className="flex items-center gap-4">
              <div className="text-2xl">📧</div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-gray-900 hover:text-blue-600"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl">📞</div>

              <div>
                <p className="text-sm text-gray-500">
                  Téléphone
                </p>

                <a
                  href={`tel:${contact.phone}`}
                  className="font-semibold text-gray-900 hover:text-blue-600"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl">📍</div>

              <div>
                <p className="text-sm text-gray-500">
                  Localisation
                </p>

                <p className="font-semibold">
                  {contact.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl">💼</div>

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Voir mon profil
                </a>
              </div>
            </div>

          </div>

          <a
            href={contact.cv}
            className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition"
          >
            Télécharger mon CV
          </a>

        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-10">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
                        <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Votre message..."
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl py-4 font-semibold transition"
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {success && (
              <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl p-4 text-center">
                {success}
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 text-center">
                {error}
              </div>
            )}

          </form>

        </div>

      </div>

    </section>
    //</FadeIn>
  );
}

export default Contact;