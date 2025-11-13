export default function MapArea() {
  return (
    <div className="w-full h-[500px] bg-gray-200 rounded-xl overflow-hidden mt-6">
      {/* Your Leaflet map will mount here */}
      <div id="map" className="w-full h-full"></div>
    </div>
  );
}
