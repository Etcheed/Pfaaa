import { BookOpen, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Students working"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Stage PFA au Maroc
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Découvrez tout sur le Projet de Fin d'Année et comment réussir votre stage au Maroc
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Clock className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">2-4 Mois</h3>
            <p className="text-blue-100">Durée moyenne du stage</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Formation Pratique</h3>
            <p className="text-blue-100">Expérience professionnelle</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Networking</h3>
            <p className="text-blue-100">Opportunités professionnelles</p>
          </div>
        </div>
      </div>
    </div>
  );
}