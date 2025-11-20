import {PropertyCard} from "./PropertyCard";

export default function PropertyGrid({ properties,  onClick }) {
  if (!properties || properties.length === 0) {
    return (
      <div className="text-gray-600 p-6 text-center">
        No results found. Try adjusting your filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      {properties.map((p) => (
        <div key={p.id}>
          <PropertyCard p={p} onClick={onClick}/>
        </div>
      ))}
    </div>
  );
}