export default function Section({ title, subtitle, children, cta }) {
  return (
    <section className="section py-12 sm:py-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>
        {cta}
      </div>
      {children}
    </section>
  );
}
