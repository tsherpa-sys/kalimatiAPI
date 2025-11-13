import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import MapArea from "./components/MapArea";
import PropertyGrid from "./components/PropertyGrid";
import MapBox from "./components/Map/MapBox";
import { properties } from "./data/properties";

import { useState, useMemo } from "react";

export default function App() {

   const [activeId, setActiveId] = useState(null);

     // 🎯 FILTER STATE
  const [filters, setFilters] = useState({
    search: "",
    price: null,   // { min: 3000, max: 6000 }
    beds: null,    // number
    type: null     // "house", "apartment", etc.
  });


    // 🧠 APPLY FILTERS
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      
      // Search
      if (filters.search) {
        const text = filters.search.toLowerCase();
        if (!p.location.toLowerCase().includes(text)) return false;
      }

      // Price
      if (filters.price) {
        if (p.price < filters.price.min || p.price > filters.price.max)
          return false;
      }

      // Beds
      if (filters.beds) {
        if (p.beds < filters.beds) return false;
      }

      // Type
      if (filters.type) {
        if (p.type !== filters.type) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
         <SearchBar setFilters={setFilters} />

        <FilterBar 
          filters={filters} 
          setFilters={setFilters} 
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
         {/* Map */}
        <div className="lg:col-span-2">
          <MapBox 
            properties={filteredProperties}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </div>

        {/* Cards */}
        <div>
          <PropertyGrid 
            properties={filteredProperties}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </div>
        </div>
      </div>
    </div>
  );
}
