import { Building2, Code, Globe, Server } from 'lucide-react';

export default function Companies() {
  const sectors = [
    {
      icon: Code,
      name: "Développement Logiciel",
      companies: ["OCP Digital", "CBI", "Cegedim", "Capgemini Maroc"]
    },
    {
      icon: Globe,
      name: "Services Web",
      companies: ["SQLI Maroc", "Atos Maroc", "CGI Maroc", "Berexia"]
    },
    {
      icon: Server,
      name: "Infrastructure & Cloud",
      companies: ["IBM Maroc", "Oracle Maroc", "Microsoft Maroc", "AWS Partner Network"]
    },
    {
      icon: Building2,
      name: "Télécommunications",
      companies: ["Maroc Telecom", "Orange Maroc", "Inwi", "Huawei Maroc"]
    }
  ];

  return (
    <section id="companies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Entreprises Partenaires
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <sector.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{sector.name}</h3>
              <ul className="space-y-2">
                {sector.companies.map((company, idx) => (
                  <li key={idx} className="text-gray-600 text-center">{company}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">
            Domaines de Stage pour Ingénieurs Informatiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Développement Web & Mobile</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Applications Web Full-Stack</li>
                <li>• Applications Mobiles Native/Hybride</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• Architectures Microservices</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Intelligence Artificielle & Data</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Machine Learning</li>
                <li>• Traitement du Langage Naturel</li>
                <li>• Big Data Analytics</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">DevOps & Cloud</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• CI/CD Pipelines</li>
                <li>• Cloud Architecture</li>
                <li>• Containerisation</li>
                <li>• Monitoring & Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}