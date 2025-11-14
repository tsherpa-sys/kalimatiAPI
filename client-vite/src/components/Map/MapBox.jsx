import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import PriceMarker from "./PriceMarker";
import LandAreaMap from "../LandAreaMap";


export default function MapBox({ properties, activeId, setActiveId }) {
  
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden">
      <MapContainer
        center={[27.7, 85.32]}
        zoom={13}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <AutoBounds properties={properties} />

       {properties.length > 0 &&
  properties.map((p) => (
    <PriceMarker
      key={p.id}
      price={p.price}
      position={[p.lat, p.lng]}
      active={activeId === p.id}
      onClick={() => {
        setActiveId(p.id);
        document
          .getElementById(`property-${p.id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      onHover={() => setActiveId(p.id)}
    />
   
  ))} <LandAreaMap/>
      </MapContainer>
    </div>
  );
}

/* Auto adjust map bounds */
function AutoBounds({ properties }) {
  const map = useMap();


  if (properties.length === 0) {
  map.setView([27.7, 85.32], 12);
  return null;
}

  useEffect(() => {
    if (!properties || properties.length === 0) return;  // ✅ fix

    const bounds = properties.map((p) => [p.lat, p.lng]);

    map.fitBounds(bounds, { padding: [50, 50] });
  }, [properties]);

  return null;
}

