import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function PriceMarker({ price, position, onHover, onClick, active }) {
  const displayPrice = price.replace("/mo", "").trim();
  const html = `
    <div 
      style="
        background: white;
        padding: 4px 10px;
        border-radius: 12px;
        border: 2px solid ${active ? '#2563eb' : '#e2e2e2'};
        font-weight: 600;
        font-size: 14px;
        min-width: 100px; 
        box-shadow: 0px 3px 6px rgba(0,0,0,0.1);
        cursor: pointer;
      "
    >
      ${displayPrice}
    </div>
  `;

  const icon = L.divIcon({
    html,
    className: "",
    iconSize: [50, 100],
    iconAnchor: [25, 15]
  });

  return (
    <Marker 
      position={position} 
      icon={icon}
      eventHandlers={{
        click: onClick,
        mouseover: onHover,
        mouseout: () => onHover(null)
      }}
    />
  );
} 
