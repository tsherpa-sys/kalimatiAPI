import { createContext, useState } from "react";

// Step 1: Create context
export const FilterContext = createContext();

// Step 2: Create provider
export function FilterValueProvider({ children }) {
  const [filterValues, setFilterValues] = useState({
    priceMin: 0,
    priceMax: 20000000,
    beds: 1,
    bath: 1,
    houseType: [],    // e.g., ['Condos']
    saleType: []      // e.g., ['Rent']
  });

  console.log(filterValues);

  function updateFilter(key,value){
    setFilterValues((prev)=>({
        ...prev,
        [key]:value
    }))
  }

  return (
    <FilterContext.Provider value={{ filterValues, setFilterValues, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
