export async function POST(request) {
  const text = await request.text();
  let payload = {};
  try { payload = JSON.parse(text || '{}'); } catch {}
  const id = Math.random().toString(36).slice(2, 8).toUpperCase();
  return Response.json({
    ok: true,
    bookingId: id,
    message: `Booking confirmed. Reference: ${id}`,
    payload
  });
}
