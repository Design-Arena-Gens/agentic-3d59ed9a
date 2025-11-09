import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image 
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
          alt="Tropical beach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white" />
      </div>
      <div className="section py-28 sm:py-36">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Plan trips you?ll actually take</h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">Discover curated destinations, compare stays, and book in minutes with a design-first experience.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#search" className="btn-primary">Find your stay</Link>
            <Link href="/destinations" className="btn-outline bg-white/10 border-white/40 text-white hover:bg-white/20">Explore destinations</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
