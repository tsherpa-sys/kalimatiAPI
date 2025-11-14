import { Marker, Popup } from "react-leaflet";
import { PropertyCard } from "../PropertyCard";

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
