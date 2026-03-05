import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-yahaha-green text-white py-4 px-6 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍃</span>
            <span className="text-xl font-bold">Ya-Hala</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-yahaha-gold">À propos</a>
            <a href="#menu" className="hover:text-yahaha-gold">Menu</a>
            <a href="#contact" className="hover:text-yahaha-gold">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen bg-gradient-to-br from-yahaha-green to-yahaha-green/80 flex items-center justify-center text-white pt-20">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Ya-Hala</h1>
          <p className="text-xl md:text-2xl mb-8">Restaurant Libbien 🍕</p>
          <p className="text-lg mb-8 opacity-90">Cuisine libanaise authentique & Pizzas</p>
          <a href="#contact" className="bg-yahaha-gold text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Commander
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-yahaha-green text-white py-6">
        <div className="max-w-4xl mx-auto flex justify-around text-center">
          <div><span className="text-2xl font-bold text-yahaha-gold">4.6★</span><br/>Note Google</div>
          <div><span className="text-2xl font-bold text-yahaha-gold">252</span><br/>Avis</div>
          <div><span className="text-2xl font-bold text-yahaha-gold">48</span><br/>Followers</div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yahaha-green mb-8">Notre Restaurant</h2>
          <p className="text-lg text-gray-700 mb-6">
            Bienvenue au Ya-Hala, votre restaurant libanais sur Cotonou. 
            Votre chef <strong>Ramzi</strong> sera ravi de vous accueillir dans son restaurant.
          </p>
          <p className="text-lg text-gray-700">
            Spécialités: Pizza (Top 1 à Cotonou selon les avis), Mezze libanais, Plats traditionnels.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-yahaha-green text-center mb-12">Notre Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🍕</div>
              <h3 className="text-xl font-bold text-yahaha-green mb-2">Pizzas</h3>
              <p className="text-gray-600 mb-4">Top 1 pizzas à Cotonou</p>
              <span className="text-yahaha-gold font-bold">À partir de 4.000 XOF</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🧆</div>
              <h3 className="text-xl font-bold text-yahaha-green mb-2">Mezzé</h3>
              <p className="text-gray-600 mb-4">Houmous, Falafel, Fatouch</p>
              <span className="text-yahaha-gold font-bold">À partir de 2.500 XOF</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="text-xl font-bold text-yahaha-green mb-2">Salades</h3>
              <p className="text-gray-600 mb-4">Salade libanaise, Fattouch</p>
              <span className="text-yahaha-gold font-bold">À partir de 2.000 XOF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-yahaha-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yahaha-gold">📍 Adresse</h3>
              <p>Rue 108, Avenue Steinmetz<br/>Cotonou, Benin</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yahaha-gold">📞 Téléphone</h3>
              <p>+229 97 24 40 02</p>
              <a href="https://wa.me/22997244002" className="inline-block mt-4 bg-yahaha-gold text-white px-6 py-2 rounded-full font-semibold">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-yahaha-gold">🕐 Horaires</h3>
            <p>10h - 23h (sauf lundi midi)</p>
          </div>
        </div>
      </section>

      <footer className="bg-yahaha-green/90 text-white py-6 text-center">
        <p>© 2026 Ya-Hala Restaurant - Cotonou, Benin</p>
      </footer>
    </div>
  );
}