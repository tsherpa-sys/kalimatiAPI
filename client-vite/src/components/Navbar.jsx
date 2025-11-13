export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="text-xl font-bold tracking-tight">
          LOGO
        </div>

        {/* Center Nav Links */}
        <div className="flex items-center gap-8 text-gray-700">
          <button className="hover:text-black">BUY</button>
          <button className="hover:text-black">RENT</button>
          <button className="hover:text-black">SELL</button>
          <button className="hover:text-black">MORTGAGE</button>
          <button className="hover:text-black">FIND AGENT</button>
        </div>

        {/* Right - Avatar */}
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20c0-3 3-5 6-5s6 2 6 5" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
