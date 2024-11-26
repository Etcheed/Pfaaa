import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Houji. Tous droits réservés.
          </p>
          <div className="flex items-center justify-center mt-2 text-sm text-gray-400">
            <span>Fait avec</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>par Houji</span>
          </div>
        </div>
      </div>
    </footer>
  );
}