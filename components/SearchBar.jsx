"use client";
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState({ where: '', dates: '', guests: 2 });
  return (
    <div id="search" className="card p-4 sm:p-6 -mt-10 sm:-mt-14 mx-4 sm:mx-0 relative z-10">
      <form
        className="grid grid-cols-1 sm:grid-cols-4 gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.(query);
        }}
      >
        <input
          className="col-span-1 sm:col-span-2 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Where to? (city, country)"
          value={query.where}
          onChange={(e) => setQuery({ ...query, where: e.target.value })}
        />
        <input
          className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Dates (e.g. Jun 10 - Jun 15)"
          value={query.dates}
          onChange={(e) => setQuery({ ...query, dates: e.target.value })}
        />
        <button className="btn-primary w-full" type="submit">Search</button>
      </form>
    </div>
  );
}
