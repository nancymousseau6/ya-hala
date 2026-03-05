import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">

      {/* ── Navigation ── */}
      <header className="bg-cedar-green text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl animate-float">🍃</div>
            <div>
              <span className="font-playfair text-xl font-bold tracking-wide">Ya-Hala</span>
              <span className="hidden sm:block text-warm-gold text-xs tracking-widest uppercase mt-0.5">Restaurant Libanais · Pizza</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about"    className="hover:text-warm-gold transition-colors duration-200">Le Chef</a>
            <a href="#menu"     className="hover:text-warm-gold transition-colors duration-200">Menu</a>
            <a href="#horaires" className="hover:text-warm-gold transition-colors duration-200">Horaires</a>
            <a href="#contact"  className="bg-warm-gold text-cedar-dark px-5 py-2 rounded-full font-bold hover:opacity-90 transition shadow">
              Réserver
            </a>
          </nav>
          <a href="#contact" className="md:hidden bg-warm-gold text-cedar-dark px-4 py-1.5 rounded-full text-sm font-bold">
            Contact
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
          alt="Restaurant libanais Ya-Hala Cotonou"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cedar-dark/92 via-cedar-green/80 to-cedar-dark/70" />
        {/* Lebanese flag stripe accents */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-leb-red" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-white" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />
        <div className="absolute top-20 right-8 w-72 h-72 rounded-full bg-warm-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center text-white px-4 pt-24 pb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm mb-8">
            <span className="text-warm-gold text-base">★★★★½</span>
            <span className="text-white/80">4,6 sur Google &nbsp;·&nbsp; 252 avis</span>
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-4 leading-tight">Ya-Hala</h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-warm-gold/60" />
            <p className="text-warm-gold text-sm md:text-base font-semibold tracking-[0.25em] uppercase">
              Libanais · Pizza · Mezze
            </p>
            <div className="h-px w-12 bg-warm-gold/60" />
          </div>
          <p className="text-white/75 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Cuisine libanaise authentique et pizzas artisanales au cœur de Cotonou,
            par le Chef Ramzi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-warm-gold text-cedar-dark px-9 py-4 rounded-full font-bold text-base hover:opacity-90 transition shadow-xl">
              Voir le menu
            </a>
            <a href="#contact" className="border-2 border-white/40 text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition">
              Nous trouver
            </a>
          </div>
          <div className="mt-16 text-white/40 text-2xl animate-bounce">↓</div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4,6 ★", label: "Note Google" },
            { value: "252",   label: "Avis clients" },
            { value: "100 %", label: "Fait maison" },
            { value: "7j/7",  label: "Ouvert (sf lundi midi)" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl border border-cedar-green/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="font-playfair text-3xl font-bold text-cedar-green mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── À propos / Chef Ramzi ── */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Chef photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
              <Image
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=80"
                alt="Chef Ramzi – Ya-Hala Cotonou"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cedar-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-playfair text-2xl font-bold">Chef Ramzi</p>
                <p className="text-warm-gold text-sm tracking-wide">Chef & Fondateur · Ya-Hala</p>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="text-cedar-green text-xs font-bold uppercase tracking-[0.2em] mb-3">Notre histoire</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cedar-dark mb-6 leading-tight">
                La passion d&apos;une<br />cuisine authentique
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Bienvenue au <strong className="text-cedar-green">Ya-Hala</strong> — votre adresse libanaise de référence à Cotonou.
                Le Chef <strong>Ramzi</strong>, originaire du Liban, vous invite à découvrir les saveurs
                authentiques de sa cuisine : mezze généreux, grillades parfumées et pizzas artisanales
                cuites au feu de bois.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Situé Rue 108, Avenue Steinmetz, Ya-Hala est rapidement devenu l&apos;une des meilleures
                tables de Cotonou, plébiscité par plus de 252 clients avec une note de 4,6/5 sur Google.
              </p>
              <div className="flex flex-wrap gap-3">
                {["🇱🇧 Cuisine libanaise", "🍕 Pizza artisanale", "🥗 Mezze frais", "🔥 Grillades"].map((tag) => (
                  <span key={tag} className="bg-cedar-light text-cedar-green text-sm px-4 py-2 rounded-full font-medium border border-cedar-green/15">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Séparateur ── */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-px flex-1 max-w-xs bg-cedar-green/20" />
        <span className="text-cedar-green text-2xl">🍃</span>
        <div className="h-px flex-1 max-w-xs bg-cedar-green/20" />
      </div>

      {/* ── Menu ── */}
      <section id="menu" className="py-24 px-4 bg-cedar-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cedar-green text-xs font-bold uppercase tracking-[0.2em] mb-3">Nos spécialités</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cedar-dark">Notre Menu</h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Des recettes authentiques préparées chaque jour par le Chef Ramzi avec les meilleurs ingrédients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
                alt: "Pizza artisanale Ya-Hala",
                name: "Pizzas Artisanales",
                desc: "Pâte maison étirée à la main, sauce tomate fraîche, garnitures généreuses. La pizza préférée des Cotonouéens selon les avis Google.",
                price: "À partir de 4 000 XOF",
                tag: "⭐ N°1 à Cotonou",
                tagColor: "bg-warm-gold/15 text-warm-gold",
              },
              {
                img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&q=80",
                alt: "Mezze libanais",
                name: "Mezze Libanais",
                desc: "Houmous onctueux, falafel dorés, taboulé parfumé, fattouch croquant — un voyage culinaire au Liban au cœur de Cotonou.",
                price: "À partir de 2 500 XOF",
                tag: "🇱🇧 Spécialité",
                tagColor: "bg-cedar-green/10 text-cedar-green",
              },
              {
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
                alt: "Salades fraîches",
                name: "Salades Fraîches",
                desc: "Salade libanaise, fattouch au pain grillé, roquette aux grenades — légères, colorées et préparées à la commande.",
                price: "À partir de 2 000 XOF",
                tag: "🥗 Fraîcheur",
                tagColor: "bg-leb-red/10 text-leb-red",
              },
            ].map((dish) => (
              <div key={dish.name} className="bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={dish.img}
                    alt={dish.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="font-playfair text-xl font-bold text-cedar-dark">{dish.name}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${dish.tagColor}`}>{dish.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{dish.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-cedar-green font-bold text-sm">{dish.price}</span>
                    <a href="https://wa.me/22997244002" target="_blank" rel="noopener noreferrer"
                      className="text-cedar-green text-sm font-semibold hover:text-warm-gold transition-colors">
                      Commander →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extras */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm">
            <p className="text-cedar-green text-xs font-bold uppercase tracking-[0.2em] mb-4">Boissons & desserts</p>
            <div className="flex flex-wrap gap-3">
              {["Jus de grenade", "Ayran", "Limonade fraîche", "Café libanais", "Baklava", "Maamoul", "Thé à la menthe", "Eau minérale"].map((item) => (
                <span key={item} className="bg-cedar-light text-cedar-green text-sm px-4 py-2 rounded-full font-medium border border-cedar-green/10">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-5">Menu complet disponible sur place · Prix susceptibles de varier</p>
          </div>
        </div>
      </section>

      {/* ── Témoignage ── */}
      <section className="py-16 px-4 bg-white border-y border-cedar-green/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-cedar-green text-3xl mb-4">❝</div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-5 font-medium">
            La meilleure pizza de Cotonou, sans aucun doute. Le Chef Ramzi maîtrise parfaitement
            les saveurs libanaises. Un restaurant que je recommande à tous !
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-warm-gold text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">— Avis Google · Ya-Hala Cotonou</span>
          </div>
        </div>
      </section>

      {/* ── Horaires & Contact ── */}
      <section id="horaires" className="py-24 px-4 bg-cedar-green text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-leb-red" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-warm-gold/10 blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="text-warm-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">Venez nous rendre visite</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">Horaires &amp; Contact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Horaires */}
            <div id="horaires-card" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/15 text-center">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="font-playfair text-warm-gold font-bold text-xl mb-5">Horaires</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-70">Mardi – Dimanche</span>
                  <span className="font-semibold">10h – 23h</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Lundi matin</span>
                  <span className="font-semibold">10h – 23h</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Lundi midi</span>
                  <span className="font-semibold text-leb-red/80">Fermé</span>
                </div>
              </div>
              <div className="mt-6 bg-warm-gold/20 rounded-2xl px-4 py-3 text-warm-gold font-bold text-sm">
                Fermé lundi midi uniquement
              </div>
            </div>

            {/* Adresse */}
            <div id="contact" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/15 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-playfair text-warm-gold font-bold text-xl mb-5">Notre adresse</h3>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                Rue 108, Avenue Steinmetz<br />
                <strong className="text-white">Cotonou, Bénin</strong>
              </p>
              <a
                href="https://maps.google.com/?q=Rue+108+Avenue+Steinmetz+Cotonou+Benin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/40 text-white text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition"
              >
                Voir sur Google Maps →
              </a>
            </div>

            {/* Téléphone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/15 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-playfair text-warm-gold font-bold text-xl mb-5">Appelez-nous</h3>
              <p className="text-xl font-bold mb-1">+229 97 24 40 02</p>
              <p className="text-sm opacity-60 mb-1">ou</p>
              <p className="text-xl font-bold mb-4">+229 66 55 59 99</p>
              <a
                href="https://wa.me/22997244002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-full font-bold text-sm hover:opacity-90 transition shadow-lg"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden border border-white/15 shadow-xl">
            <iframe
              title="Ya-Hala sur Google Maps"
              src="https://maps.google.com/maps?q=Avenue+Steinmetz,+Cotonou,+Benin&z=15&output=embed"
              width="100%"
              height="260"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-cedar-dark text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍃</span>
              <div>
                <div className="font-playfair font-bold text-xl">Ya-Hala</div>
                <div className="text-warm-gold text-xs tracking-[0.2em] uppercase">Restaurant Libanais · Pizza</div>
              </div>
            </div>
            <div className="text-center text-sm text-white/60 space-y-1">
              <p>Rue 108, Avenue Steinmetz, Cotonou, Bénin</p>
              <p>+229 97 24 40 02 &nbsp;·&nbsp; 10h – 23h (sf lundi midi)</p>
            </div>
            <div className="flex gap-4">
              <a href="https://wa.me/22997244002" target="_blank" rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                💬 WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
            © 2026 Ya-Hala · Restaurant Libanais &amp; Pizzeria · Cotonou, Bénin
          </div>
        </div>
      </footer>

    </div>
  );
}
