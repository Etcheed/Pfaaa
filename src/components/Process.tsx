import { ClipboardCheck, FileSearch, HandshakeIcon, PenTool } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: FileSearch,
      title: "Recherche de Stage",
      description: "Identifier les entreprises potentielles et préparer les candidatures"
    },
    {
      icon: HandshakeIcon,
      title: "Convention de Stage",
      description: "Établir et signer la convention entre l'école et l'entreprise"
    },
    {
      icon: PenTool,
      title: "Réalisation",
      description: "Effectuer le stage et travailler sur le projet assigné"
    },
    {
      icon: ClipboardCheck,
      title: "Rapport et Soutenance",
      description: "Rédiger le rapport et présenter le travail devant le jury"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Processus du Stage PFA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}