// Map.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletOverwrite.css'
import L from 'leaflet';
import {CardItem} from './CardItem'

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

export default function MapComponent({ listings }) {
  const center = [27.7103, 85.3222]; // Kathmandu center


  return (
    <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      {listings.map((listing) => (
        <Marker key={listing.id} position={[listing.lat, listing.lng]}>
          <Popup style={{margin:0}}>
             <CardItem details={listing}/>
   
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
