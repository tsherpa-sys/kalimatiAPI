export function HeroSearchBar() {
  return (
    <div className="mt-4 w-[60%] max-w-md bg-white rounded-full shadow-md flex items-center divide-x divide-gray-200 overflow-hidden">
      
      {/* Location */}
      <div className="flex-1 px-5 py-3">
        <input
          type="text"
          placeholder="Where do you want to live?"
          className="w-full outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Search Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full m-2 flex items-center gap-2 transition">
        <span>Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </button>
    </div>
  );
}
