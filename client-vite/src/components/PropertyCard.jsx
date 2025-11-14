export default function PropertyCardOld({ p, active }) {
  return (
    <div
      id={`property-${p.id}`}
      className={`
        bg-white rounded-xl shadow-sm border p-1.5 cursor-pointer transition
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

export  function PropertyCard({ property }) {
  return (
    <div
      style={{
        width: "280px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={property.image}
        alt=""
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "4px" }}>
        <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
          {property.price}
        </h3>

        <p style={{ margin: "4px 0", fontSize: "14px", fontWeight: 500 }}>
          {property.beds} Beds • {property.baths} Baths • {property.sqft} sqft
        </p>

        <p
          style={{
            margin: "6px 0 0",
            fontSize: "13px",
            color: "#555",
          }}
        >
          {property.address}
        </p>
      </div>
    </div>
  );
}
