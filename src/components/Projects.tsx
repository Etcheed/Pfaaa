import { Brain, Cloud, Lock, Share2, ShieldCheck, Smartphone } from 'lucide-react';

export default function Projects() {
  const projectCategories = [
    {
      icon: Brain,
      title: "Intelligence Artificielle & Machine Learning",
      projects: [
        {
          name: "Système de Détection des Fraudes",
          description: "Développement d'un système ML utilisant des algorithmes de détection d'anomalies (isolation forest, autoencoders) pour identifier les transactions frauduleuses en temps réel.",
          tech: ["Python", "TensorFlow", "Keras", "PostgreSQL", "FastAPI"],
          features: [
            "Analyse en temps réel des transactions",
            "Dashboard de monitoring avec métriques clés",
            "API RESTful pour l'intégration",
            "Système de feedback pour l'amélioration continue"
          ]
        },
        {
          name: "Chatbot IA pour Service Client",
          description: "Assistant virtuel intelligent capable de comprendre le langage naturel et de fournir une assistance personnalisée aux clients.",
          tech: ["Python", "BERT", "Redis", "Docker", "MongoDB"],
          features: [
            "Traitement du langage naturel avancé",
            "Intégration multi-canal (web, mobile, API)",
            "Analyse des sentiments en temps réel",
            "Système d'apprentissage continu"
          ]
        }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      projects: [
        {
          name: "Plateforme de Déploiement Automatisé",
          description: "Solution DevOps complète pour l'automatisation du déploiement d'applications conteneurisées avec monitoring avancé.",
          tech: ["Kubernetes", "Terraform", "Prometheus", "Grafana", "GitHub Actions"],
          features: [
            "Pipeline CI/CD entièrement automatisé",
            "Gestion des secrets et configurations",
            "Monitoring et alerting intelligent",
            "Auto-scaling basé sur les métriques"
          ]
        },
        {
          name: "Système de Backup Cloud Intelligent",
          description: "Solution de sauvegarde distribuée avec optimisation des coûts et récupération intelligente.",
          tech: ["AWS S3", "Azure Blob", "Go", "gRPC", "PostgreSQL"],
          features: [
            "Réplication multi-cloud",
            "Déduplication des données",
            "Encryption bout en bout",
            "Politique de rétention intelligente"
          ]
        }
      ]
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles & Web",
      projects: [
        {
          name: "Plateforme E-learning Progressive",
          description: "Application web/mobile pour l'apprentissage adaptatif avec suivi personnalisé des progrès.",
          tech: ["React Native", "Node.js", "GraphQL", "MongoDB", "WebRTC"],
          features: [
            "Parcours d'apprentissage personnalisé",
            "Système de gamification avancé",
            "Mode hors ligne synchronisé",
            "Analytics d'apprentissage détaillés"
          ]
        },
        {
          name: "Solution de Télémédecine Intégrée",
          description: "Plateforme complète pour la consultation médicale à distance avec dossier médical électronique.",
          tech: ["Flutter", "Spring Boot", "WebRTC", "PostgreSQL", "Redis"],
          features: [
            "Consultations vidéo HD",
            "Gestion des ordonnances électroniques",
            "Intégration calendrier intelligent",
            "Système de notification avancé"
          ]
        }
      ]
    },
    {
      icon: ShieldCheck,
      title: "Sécurité & Blockchain",
      projects: [
        {
          name: "Système de Gestion d'Identité Décentralisé",
          description: "Solution blockchain pour la gestion sécurisée des identités numériques avec authentification multi-facteurs.",
          tech: ["Ethereum", "Solidity", "Node.js", "Web3.js", "IPFS"],
          features: [
            "Identités auto-souveraines",
            "Smart contracts auditables",
            "Stockage décentralisé sécurisé",
            "API d'intégration standardisée"
          ]
        },
        {
          name: "Plateforme de Cybersécurité Prédictive",
          description: "Système de détection et prévention des menaces utilisant l'IA pour l'analyse comportementale.",
          tech: ["Python", "Elasticsearch", "Keras", "Apache Kafka", "Docker"],
          features: [
            "Détection d'anomalies en temps réel",
            "Analyse comportementale avancée",
            "Reporting automatisé",
            "Intégration SIEM"
          ]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Idées de Projets Innovants
        </h2>

        <div className="space-y-16">
          {projectCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.projects.map((project, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">{project.name}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Technologies Clés:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIdx) => (
                          <span key={techIdx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Fonctionnalités Principales:</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">
            Conseils pour le Choix du Projet
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <Share2 className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Impact Business</h4>
              <p className="text-gray-700">
                Choisissez un projet qui répond à un besoin réel du marché et qui peut avoir un impact significatif sur l'entreprise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Lock className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Faisabilité Technique</h4>
              <p className="text-gray-700">
                Assurez-vous que le projet est réalisable dans le temps imparti et avec les ressources disponibles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Innovation</h4>
              <p className="text-gray-700">
                Privilégiez les projets qui intègrent des technologies émergentes et des approches innovantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}