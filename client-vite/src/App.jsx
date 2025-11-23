import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import MapArea from "./components/MapArea";
import PropertyGrid from "./components/PropertyGrid";
import MapBox from "./components/Map/MapBox";
import { properties } from "./data/properties";
import {PropertyModal} from './components/PropertyCard'

import { useState, useMemo , useEffect } from "react";
import { Home } from "./pages/Home";

export default function App() {

const allProperties = properties; // raw data

  const [activeId, setActiveId] = useState(null);
  let [filteredProperties, setFilteredProperties] = useState(properties);
  const [selectedProperty , setSelectedProperty] = useState(null);

  // 🎯 FILTER STATE
  const [filters, setFilters] = useState({
    search: "",
    price: null,   // { min: 3000, max: 6000 }
    beds: null,    // number
    type: null,     // "house", "apartment", etc.
    listingStatus:null,
  });


  // 🧠 APPLY FILTERS
    // 1️⃣ Apply UI Filters
  const filteredByUI = useMemo(() => {
    return allProperties.filter((p) => {
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


  // Sync filteredProperties with UI filters
useEffect(() => {
  setFilteredProperties(filteredByUI);
}, [filteredByUI]);

function properTySelected(p) {
  console.log(p);
  setSelectedProperty(p);
}

function closeModal(){

  setSelectedProperty(null);
}

  return (
    <div className="bg-[#FFFFFF] min-h-screen max-w-7xl mx-auto px-6">
    
      <Home/>

      <div className="">
        <SearchBar setFilters={setFilters} />

        <FilterBar
          filters={filters}
          setFilters={setFilters}
        />
         <h2>Properties : {filteredProperties.length}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-6">
          {/* Map */}
          
          <div className="lg:col-span-2">
            <MapBox
              properties={filteredProperties}
              activeId={activeId}
              setActiveId={setActiveId}
              properTySelected={properTySelected}
            
            />
          </div>

          {/* Cards */}
          <div className="h-[80vh] overflow-y-auto pr-2">
            <PropertyGrid
              properties={filteredProperties}
              activeId={activeId}
              setActiveId={setActiveId}
              onClick={properTySelected} />
          </div>

          {/* Moda */}
          {selectedProperty && (
            <PropertyModal property={selectedProperty} onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
}