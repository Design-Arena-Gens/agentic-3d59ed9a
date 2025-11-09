import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-primary-600">Voy</span>age
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/destinations" className="hover:text-primary-600">Destinations</Link>
          <Link href="/hotels" className="hover:text-primary-600">Hotels</Link>
          <Link href="/booking" className="hover:text-primary-600">Bookings</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="btn-outline hidden sm:inline-flex">Sign in</Link>
          <Link href="#" className="btn-primary">Start planning</Link>
        </div>
      </div>
    </header>
  );
}
