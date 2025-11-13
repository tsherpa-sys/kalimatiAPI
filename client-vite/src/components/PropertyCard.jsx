export default function PropertyCard({ p, active }) {
  return (
    <div
      id={`property-${p.id}`}
      className={`
        bg-white rounded-xl shadow-sm border p-4 cursor-pointer transition
        ${active ? "border-blue-500 shadow-md" : "border-gray-200"}
      `}
    >
      <img
        src={p.image}
        className="w-full h-40 object-cover rounded-lg"
        alt=""
      />

      <div className="mt-3">
        <div className="text-xl font-semibold">
          ${p.price}/mo
        </div>
        <div className="text-sm text-gray-600 mt-1">
          {p.beds} bds • {p.baths} ba • {p.sqft} sqft
        </div>
        <div className="mt-1 text-gray-700 text-sm">
          {p.location}
        </div>
      </div>
    </div>
  );
}
