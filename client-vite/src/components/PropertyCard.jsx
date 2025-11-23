import ImageCarousel from './ImageCrousel'
export  function PropertyCard({ p,  onClick }) {
 
  const property = p;

  return (
    <div
      onClick={()=>onClick(p)}
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
        src={property.images[0]}
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

export function PropertyModal({ property, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-5xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageCarousel images={property.images}/>

        <div className="p-5">
          <h2 className="text-2xl font-bold">{property.price}</h2>

          <p className="text-gray-700 mt-2">
            {property.beds} beds • {property.baths} baths • {property.sqft} sqft
          </p>

          <p className="text-gray-600 mt-2">{property.address}</p>

          <div>
            <h2 className="text-2xl font-bold">Amenities</h2>
            <div className="flex flex-wrap gap-2 mt-2">
  {property.amenities.map((item) => (
    <span
      key={item}
      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border"
    >
      {item}
    </span>
  ))}
</div>
           
          </div>

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


