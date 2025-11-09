export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get('q') || '').toLowerCase();
  const results = [
    { id: 1, type: 'hotel', name: 'Azure Bay Resort', location: 'Phuket, Thailand' },
    { id: 2, type: 'hotel', name: 'Urban Oasis Hotel', location: 'Tokyo, Japan' },
    { id: 3, type: 'destination', name: 'Bali', location: 'Indonesia' },
  ].filter((i) => i.name.toLowerCase().includes(q) || i.location.toLowerCase().includes(q));

  return Response.json({ query: q, results });
}
