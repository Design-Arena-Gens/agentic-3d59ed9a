"use client";
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function BookingPage() {
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', hotel: '', dates: '' });

  async function submit(e) {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/booking', { method: 'POST', body: JSON.stringify(form) });
      const data = await res.json();
      setStatus(data.message || 'Success');
    } catch (e) {
      setStatus('Something went wrong');
    }
  }

  return (
    <main>
      <Navbar />
      <Section title="Book your stay" subtitle="Enter details and confirm instantly">
        <form onSubmit={submit} className="card p-6 max-w-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-gray-200 px-4 py-3" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input type="email" className="rounded-xl border border-gray-200 px-4 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className="rounded-xl border border-gray-200 px-4 py-3 sm:col-span-2" placeholder="Hotel name" value={form.hotel} onChange={(e) => setForm({ ...form, hotel: e.target.value })} />
            <input className="rounded-xl border border-gray-200 px-4 py-3 sm:col-span-2" placeholder="Dates (e.g. Aug 4 - Aug 9)" value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} />
          </div>
          <button className="btn-primary mt-4" type="submit">Confirm booking</button>
          {status && <p className="text-sm text-gray-600 mt-3">{status}</p>}
        </form>
      </Section>
      <Footer />
    </main>
  );
}
