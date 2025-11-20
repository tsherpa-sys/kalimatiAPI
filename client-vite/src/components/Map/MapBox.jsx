import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import PriceMarker from "./PriceMarker";
import LandAreaMap from "../LandAreaMap";


import { useState } from "react";

import { PropertyCard } from "../PropertyCard";
import MoveHandler from "./MoveHandler"

export default function MapBox({ properties, activeId, setActiveId, onMapBoundsChange, properTySelected}) {
   

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden relative">
            {/* MAP */}
            <MapContainer
                center={[27.7, 85.32]}
                zoom={13}
                scrollWheelZoom
                className="h-full w-full"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <AutoBounds properties={properties} />
                {/* Listen for map move + zoom */}
                {/* <MoveHandler onChange={onMapBoundsChange} /> */}
                {properties.length > 0 &&
                    properties.map((p) => (
                        <PriceMarker

                            property={p}
                            position={[p.lat, p.lng]}
                            active={activeId === p.id}
                            onClick={properTySelected}     // click selects the property
                            onHover={() => setActiveId(p.id)}     // hover activates popup
                            onHoverEnd={() => { }}                 // don’t auto close (Zillow!)
                        />
                    ))}
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

