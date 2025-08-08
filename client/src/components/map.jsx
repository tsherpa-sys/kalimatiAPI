// Map.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useContext, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import './leafletOverwrite.css'
import L from 'leaflet';
import { CardItem } from './CardItem';
import { ListingContext } from '../context/listingsContext';

// Optional: Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapEventHandler({ onBoundsChange }) {
  const map = useMap();
  const prevZoomRef = useRef(map.getZoom());

  useEffect(() => {
    const handleChange = () => {

      const bounds = map.getBounds();
      const newZoom = map.getZoom();
      const prevZoom = prevZoomRef.current;

      let zoomDirection = null;
      if (newZoom > prevZoom) {
        zoomDirection = 'in';
      } else if (newZoom < prevZoom) {
        zoomDirection = 'out';
      }

      prevZoomRef.current = newZoom;

      console.log(bounds)

      onBoundsChange({
        zoom: newZoom,
        zoomDirection,
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
      });
    };

    map.on('moveend', handleChange); // only use moveend

    return () => {
      map.off('moveend', handleChange);
    };
  }, [map, onBoundsChange]);

  return null;
}

export default function MapComponent() {
  return <></>

  const { listings, setListings, fetchListings, allListings } = useContext(ListingContext);
  const center = [27.7103, 85.3222]; // Kathmandu center


  return (
    <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <MapEventHandler
        onBoundsChange={({ north, south, east, west, zoomDirection }) => {
          const bounds = { north, south, east, west };

          // ✅ Always filter from allListings (full list)
          const filtered = allListings.filter(({ lat, lng }) =>
            lat >= south && lat <= north && lng >= west && lng <= east
          );

          setListings(allListings);
          console.log("📍 Filtered Listings:", filtered.length, "Zoom:", zoomDirection);
          if (zoomDirection === 'out') {
            const shouldFetch = !allListings.some(({ lat, lng }) =>
              lat >= south && lat <= north && lng >= west && lng <= east
            );

            if (shouldFetch) {
              console.log('📡 Fetching more data due to zoom out into new area');
              fetchListings(bounds); // mock or real fetch
            }
          }

          //setZoom(zoom)
        }}
      />

      {listings.map((listing) => (
        <Marker key={listing.id} position={[listing.lat, listing.lng]}>
          <Popup>
            <CardItem details={listing} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
