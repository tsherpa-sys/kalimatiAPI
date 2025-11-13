export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">LOGO</div>

        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Sell</a>
          <a href="#">Mortgage</a>
          <a href="#">Find Agent</a>
        </nav>

        <div className="w-10 h-10 bg-purple-200 rounded-full" />
      </div>
    </header>
  );
}