import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Contactez-nous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-medium">Adresse</h4>
                  <p className="text-gray-600">123 Avenue Mohammed V, Rabat, Maroc</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <p className="text-gray-600">+212 5XX-XXXXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contact@stagepfa.ma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}