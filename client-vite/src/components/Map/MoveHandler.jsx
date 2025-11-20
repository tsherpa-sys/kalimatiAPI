import { useMapEvents } from "react-leaflet";

export default function MoveHandler({ onChange }) {
  useMapEvents({
    moveend: (map) => {
      const bounds = map.target.getBounds();
      onChange(bounds);
    },
    zoomend: (map) => {
      const bounds = map.target.getBounds();
      onChange(bounds);
    }
  });

  return null;
}
