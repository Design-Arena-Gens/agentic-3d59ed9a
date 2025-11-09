"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import Section from '@/components/Section';
import HotelCard from '@/components/HotelCard';
import Footer from '@/components/Footer';

const featured = [
  {
    id: 1,
    name: 'Azure Bay Resort',
    location: 'Phuket, Thailand',
    rating: 4.8,
    reviews: 1218,
    price: 189,
    image: 'https://images.unsplash.com/photo-1501117716987-c8e3f4f9075a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'The Cliffside',
    location: 'Amalfi, Italy',
    rating: 4.7,
    reviews: 980,
    price: 249,
    image: 'https://images.unsplash.com/photo-1470214203634-e436a8848e23?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Urban Oasis Hotel',
    location: 'Tokyo, Japan',
    rating: 4.6,
    reviews: 2041,
    price: 139,
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar onSearch={() => {}} />

      <Section title="Featured stays" subtitle="Handpicked places loved by travelers" cta={<a href="/hotels" className="btn-outline">See all</a>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((h) => (
            <HotelCard key={h.id} hotel={h} />
          ))}
        </div>
      </Section>

      <Section title="Popular destinations" subtitle="City breaks, beaches, and beyond" cta={<a href="/destinations" className="btn-outline">Explore</a>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['Paris','https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop'],
            ['Bali','https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop'],
            ['New York','https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1200&auto=format&fit=crop'],
            ['Kyoto','https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop']
          ].map(([name, img], idx) => (
            <a key={idx} href="/destinations" className="relative overflow-hidden rounded-2xl group h-36 sm:h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-3 left-3 text-white font-medium">{name}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Why Voyage?" subtitle="Designed for speed, clarity, and delight">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['Seamless planning','Build itineraries, compare stays, and book fast.'],
            ['Transparent pricing','No surprises. Clear taxes, fees, and perks.'],
            ['Trusted reviews','Real traveler feedback you can rely on.']
          ].map(([t, d]) => (
            <div key={t} className="card p-6">
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="text-gray-600 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
