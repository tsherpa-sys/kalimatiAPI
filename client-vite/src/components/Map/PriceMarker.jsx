import { Marker, Popup } from "react-leaflet";
import { PropertyCard } from "../PropertyCard";
import L from "leaflet";

const mountainIcon = L.icon({
  iconUrl: "./icons/nepal-mountain-marker.png", 
  iconSize: [22, 22],        // adjust size as needed
  iconAnchor: [24, 22],      // bottom middle of the icon
  popupAnchor: [0, -22],     // where popup opens from
});

export default function PriceMarker({
    property,
    position,
    active,
    onClick,
    onHover,
    onHoverEnd
}) {
    return (
        <Marker
            position={position}
            icon={mountainIcon}
            eventHandlers={{
                click: onClick,
                mouseover: onHover,
                mouseout: onHoverEnd,
            }}
        >
            {active && (
                <Popup
                    closeButton={false}
                    offset={[0, -10]}
                    className="property-popup"
                >
                    <PropertyCard property={property} />
                </Popup>
            )}
        </Marker>
    );
}
