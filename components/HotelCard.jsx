import Image from 'next/image';

export default function HotelCard({ hotel }) {
  return (
    <div className="card overflow-hidden">
      <div className="relative h-52">
        <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold">{hotel.name}</h3>
            <p className="text-sm text-gray-600">{hotel.location}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">${hotel.price}/night</p>
            <p className="text-xs text-gray-500">Free cancellation</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
          <span>? {hotel.rating}</span>
          <span>?</span>
          <span>{hotel.reviews} reviews</span>
        </div>
        <button className="btn-primary w-full mt-4">Book now</button>
      </div>
    </div>
  );
}
