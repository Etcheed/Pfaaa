export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">À Propos du Stage PFA</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Le Stage PFA représente une étape cruciale dans la formation des ingénieurs informatiques au Maroc. 
            D'une durée de 2 à 4 mois, il permet aux étudiants de mettre en pratique leurs compétences techniques 
            et de développer leur expertise professionnelle.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Objectifs Techniques</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Maîtrise des technologies modernes</li>
              <li>• Développement de solutions innovantes</li>
              <li>• Gestion de projets informatiques</li>
              <li>• Application des méthodologies agiles</li>
              <li>• Intégration des bonnes pratiques DevOps</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compétences Développées</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Architecture logicielle avancée</li>
              <li>• Sécurité des applications</li>
              <li>• Performance et optimisation</li>
              <li>• Tests et qualité logicielle</li>
              <li>• Documentation technique</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Spécificités pour Ingénieurs Informatiques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Technologies Courantes</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Frameworks JavaScript (React, Angular, Vue.js)</li>
                <li>• Technologies Backend (Node.js, Spring, Laravel)</li>
                <li>• Bases de données SQL et NoSQL</li>
                <li>• Outils de versioning (Git)</li>
                <li>• Conteneurisation (Docker, Kubernetes)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Livrables Attendus</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Code source documenté</li>
                <li>• Documentation technique détaillée</li>
                <li>• Manuel d'utilisation</li>
                <li>• Rapport de stage structuré</li>
                <li>• Présentation pour la soutenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}