
function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">

      <div className="logo">
        <span className="logo-icon">▶</span>
        StreamFlow
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>⌕</button>
      </div>

      <div className="profile">
        A
      </div>

    </header>
  );
}

export default Navbar;
