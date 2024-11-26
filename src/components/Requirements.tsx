export default function Requirements() {
  return (
    <section id="requirements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Exigences du Stage PFA
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Documents Requis</h3>
            <ul className="space-y-3 text-blue-800">
              <li>• CV et lettre de motivation</li>
              <li>• Convention de stage</li>
              <li>• Carte d'étudiant</li>
              <li>• Attestation de scolarité</li>
              <li>• Assurance responsabilité civile</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Critères Académiques</h3>
            <ul className="space-y-3 text-green-800">
              <li>• Être inscrit en année validante</li>
              <li>• Modules principaux validés</li>
              <li>• Assiduité aux cours</li>
              <li>• Niveau académique satisfaisant</li>
              <li>• Projet de stage cohérent</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Compétences Attendues</h3>
            <ul className="space-y-3 text-purple-800">
              <li>• Maîtrise des outils techniques</li>
              <li>• Capacité d'adaptation</li>
              <li>• Travail en équipe</li>
              <li>• Communication professionnelle</li>
              <li>• Gestion de projet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}