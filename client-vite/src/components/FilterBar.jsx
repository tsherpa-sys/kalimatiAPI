import { useState, useRef, useEffect } from "react";

export default function FilterBar({ filters, setFilters }) {

  const [open, setOpen] = useState(null); // "price", "beds", "type"

  // close dropdown on outside click
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="flex gap-4 mt-4 relative" ref={ref}>

  {/* LISTING TYPE FILTER */}
      <div className="relative">
        <button
          onClick={() => setOpen(open === "listingType" ? null : "listingType")}
          className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg min-w-[120px]"
        >
          <span>{filters.listingType ? filters.listingType : "Listing Type"}</span>
          <Chevron />
        </button>

        {open === "listingType" && (
          <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow p-3 z-50">
            {["Sale", "Rent", "Lease"].map((t) => (
              <Option key={t}
                label={t}
                onClick={() => {
                  setFilters((f) => ({ ...f, listingType: t }));
                  setOpen(null);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* PRICE FILTER */}
      <div className="relative">
        <button
          onClick={() => setOpen(open === "price" ? null : "price")}
          className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg min-w-[140px]"
        >
          <span>
            {filters.price
              ? `Price: ${filters.price.min/1000}k–${filters.price.max/1000}k`
              : "Price"}
          </span>
          <Chevron />
        </button>

        {open === "price" && (
          <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow p-3 z-50">
            <PriceOption label="3k – 6k" value={{ min: 3000, max: 6000 }}
              setFilters={setFilters}
              close={() => setOpen(null)}
            />
            <PriceOption label="5k – 10k" value={{ min: 5000, max: 10000 }}
              setFilters={setFilters}
              close={() => setOpen(null)}
            />
            <PriceOption label="10k – 20k" value={{ min: 10000, max: 20000 }}
              setFilters={setFilters}
              close={() => setOpen(null)}
            />
          </div>
        )}
      </div>


      {/* BEDS FILTER */}
      <div className="relative">
        <button
          onClick={() => setOpen(open === "beds" ? null : "beds")}
          className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg min-w-[120px]"
        >
          <span>{filters.beds ? `Beds: ${filters.beds}+` : "Beds"}</span>
          <Chevron />
        </button>

        {open === "beds" && (
          <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow p-3 z-50">
            {[1, 2, 3, 4].map((num) => (
              <Option key={num}
                label={`${num}+ beds`}
                onClick={() => {
                  setFilters((f) => ({ ...f, beds: num }));
                  setOpen(null);
                }}
              />
            ))}
          </div>
        )}
      </div>


      {/* TYPE FILTER */}
      <div className="relative">
        <button
          onClick={() => setOpen(open === "type" ? null : "type")}
          className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg min-w-[120px]"
        >
          <span>{filters.type ? filters.type : "Type"}</span>
          <Chevron />
        </button>

        {open === "type" && (
          <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow p-3 z-50">
            {["Apartment", "House", "Studio", "Villa"].map((t) => (
              <Option key={t}
                label={t}
                onClick={() => {
                  setFilters((f) => ({ ...f, type: t }));
                  setOpen(null);
                }}
              />
            ))}
          </div>
        )}
      </div>


    </div>
  );
}

/*** Small reusable components ***/

function Option({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
    >
      {label}
    </button>
  );
}

function PriceOption({ label, value, setFilters, close }) {
  return (
    <button
      onClick={() => {
        setFilters((f) => ({ ...f, price: value }));
        close();
      }}
      className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
    >
      {label}
    </button>
  );
}

function Chevron() {
  return (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
