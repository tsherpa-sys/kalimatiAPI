import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";

export default function LandAreaMap() {
  const landArea = [
    [27.670912, 85.318761],
    [27.671245, 85.319382],
    [27.670701, 85.319843],
    [27.670320, 85.319201],
    [27.670550, 85.318640],
  ];

  return (
      <Polygon 
        positions={landArea} 
        pathOptions={{ 
          color: "blue", 
          fillColor: "lightblue", 
          fillOpacity: 0.5 
        }}
      >
        <Popup>
          <b>Plot A</b><br/>
          Area: 4 aana<br/>
          Price: NPR 45 lakh per aana
        </Popup>
      </Polygon>
  );
}
