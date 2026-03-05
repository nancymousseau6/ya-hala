import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#007A3D] text-white py-4 px-6 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#007A3D] text-xl font-bold">🍃</div>
            <span className="text-xl font-bold">Ya-Hala</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-[#FFD700]">À propos</a>
            <a href="#menu" className="hover:text-[#FFD700]">Menu</a>
            <a href="#contact" className="hover:text-[#FFD700]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-white pt-20">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920"
          alt="Restaurant libanais"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#007A3D]/90 to-[#007A3D]/70"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Ya-Hala</h1>
          <p className="text-xl md:text-2xl mb-8">Restaurant Libbien 🍕</p>
          <p className="text-lg mb-8 opacity-90">Cuisine libanaise authentique & Pizzas</p>
          <a href="#contact" className="bg-[#FFD700] text-[#007A3D] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block">
            Commander
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#007A3D] text-white py-6">
        <div className="max-w-4xl mx-auto flex justify-around text-center flex-wrap gap-4">
          <div><span className="text-2xl font-bold text-[#FFD700]">4.6★</span><br/>Note Google</div>
          <div><span className="text-2xl font-bold text-[#FFD700]">252</span><br/>Avis</div>
          <div><span className="text-2xl font-bold text-[#FFD700]">48</span><br/>Followers</div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#007A3D] mb-8">Notre Restaurant</h2>
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
          <h2 className="text-4xl font-bold text-[#007A3D] text-center mb-12">Notre Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
                  alt="Pizza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#007A3D] mb-2">Pizzas</h3>
                <p className="text-gray-600 mb-4">Top 1 pizzas à Cotonou</p>
                <span className="text-[#FFD700] font-bold">À partir de 4.000 XOF</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600"
                  alt="Mezzé libanais"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#007A3D] mb-2">Mezzé</h3>
                <p className="text-gray-600 mb-4">Houmous, Falafel, Fatouch</p>
                <span className="text-[#FFD700] font-bold">À partir de 2.500 XOF</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
                  alt="Salade"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#007A3D] mb-2">Salades</h3>
                <p className="text-gray-600 mb-4">Salade libanaise, Fattouch</p>
                <span className="text-[#FFD700] font-bold">À partir de 2.000 XOF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-[#007A3D] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FFD700]">📍 Adresse</h3>
              <p>Rue 108, Avenue Steinmetz<br/>Cotonou, Benin</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FFD700]">📞 Téléphone</h3>
              <p>+229 97 24 40 02</p>
              <a href="https://wa.me/22997244002" className="inline-block mt-4 bg-[#FFD700] text-[#007A3D] px-6 py-2 rounded-full font-semibold">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">🕐 Horaires</h3>
            <p>10h - 23h (sauf lundi midi)</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#005a2d] text-white py-6 text-center">
        <p>© 2026 Ya-Hala Restaurant - Cotonou, Benin</p>
      </footer>
    </div>
  );
}