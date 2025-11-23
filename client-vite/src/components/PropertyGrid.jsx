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
    <div className="flex flex-wrap gap-2 justify-between items-baseline mt-3">
      {properties.map((p) => (
        <div key={p.id}>
          <PropertyCard p={p} onClick={onClick}/>
        </div>
      ))}
    </div>
  );
}