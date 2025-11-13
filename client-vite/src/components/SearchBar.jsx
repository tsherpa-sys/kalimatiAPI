export default function SearchBar({ setFilters }) {

  return (
    <div className="flex items-center gap-4 mt-6">
      <div className="flex items-center gap-3 w-full bg-white border border-gray-300 rounded-xl px-4 py-2">
        
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-4.35-4.35m1.15-5.4a6.55 6.55 0 11-13.1 0 6.55 6.55 0 0113.1 0z"
          />
        </svg>

        <input
          type="text"
          placeholder="Baneshwor, Lazimpat..."
          className="w-full outline-none"
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, search: e.target.value }))
          }
        />
      </div>
    </div>
  );
}
