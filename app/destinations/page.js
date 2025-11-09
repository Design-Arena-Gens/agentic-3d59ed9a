import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

const DESTS = [
  { name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1505739678950-95a2d7f3c566?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1518544801976-3e6b51a95339?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop' },
];

export default function DestinationsPage() {
  return (
    <main>
      <Navbar />
      <Section title="Destinations" subtitle="Curated places to inspire your next trip">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTS.map((d) => (
            <div key={d.name} className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.image} alt={d.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.country}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
