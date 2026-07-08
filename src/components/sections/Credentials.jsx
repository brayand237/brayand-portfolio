import { useState } from "react";

import credentials from "../../data/credentials";

import CredentialCard from "../credentials/CredentialCard";
import CredentialModal from "../credentials/CredentialModal";
import FadeIn from "../animations/FadeIn";

function Credentials() {

  const [selectedCredential, setSelectedCredential] = useState(null);

  return (
    //<FadeIn delay={index * 0.15}>
    <section
      id="credentials"
      className="max-w-7xl mx-auto px-8 py-28"
    >

      <div className="text-center mb-20">

        <h2 className="text-4xl font-bold text-gray-900">

          Diplômes & Distinctions

        </h2>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">

          Les documents qui attestent officiellement de mon parcours,
          de mes formations et de mes compétences.

        </p>

      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {credentials.map((credential, index) => (

          <CredentialCard
            key={index}
            credential={credential}
            onOpen={setSelectedCredential}
          />

        ))}

      </div>

      <CredentialModal
        credential={selectedCredential}
        onClose={() => setSelectedCredential(null)}
      />

    </section>
    //</FadeIn>

  );
}

export default Credentials;