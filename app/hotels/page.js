import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import HotelCard from '@/components/HotelCard';
import Footer from '@/components/Footer';

const HOTELS = [
  { id: 1, name: 'Harbor Lights', location: 'Lisbon, Portugal', rating: 4.7, reviews: 874, price: 156, image: 'https://images.unsplash.com/photo-1519822471276-0a3f577449b9?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, name: 'Skyline Suites', location: 'Seoul, South Korea', rating: 4.5, reviews: 1420, price: 132, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, name: 'Palm & Tide', location: 'Koh Samui, Thailand', rating: 4.8, reviews: 990, price: 178, image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, name: 'Old Town Charm', location: 'Prague, Czechia', rating: 4.6, reviews: 612, price: 119, image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop' }
];

export default function HotelsPage() {
  return (
    <main>
      <Navbar />
      <Section title="Hotels" subtitle="Browse stays across popular cities">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOTELS.map((h) => (
            <HotelCard key={h.id} hotel={h} />
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
