import { useState } from 'react';
import { createContext } from 'react';
import {data} from '../data/data'


export const ListingContext = createContext();

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState(data);
  const [allListings, setAllListings] = useState(data);


const fetchListings = async (bounds) => {
  // Simulate an async fetch with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = data.filter(({ lat, lng }) =>
        lat >= bounds.south && lat <= bounds.north &&
        lng >= bounds.west && lng <= bounds.east
      );

      setListings(filtered);
      setAllListings(data); // cache full data
      resolve(filtered);
    }, 500); // simulate network delay
  });
};


  return (
    <ListingContext.Provider value={{ listings, setListings, allListings,setAllListings, fetchListings }}>
      {children}
    </ListingContext.Provider>
  );
}


