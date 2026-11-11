import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <NavLink to="/" end className="menu-item">
        ⌂ Home
      </NavLink>

      <NavLink to="/explore" className="menu-item">
        ▣ Explore
      </NavLink>

      <NavLink to="/history" className="menu-item">
        ◷ History
      </NavLink>

      <NavLink to="/liked" className="menu-item">
        ❤️ Liked Videos
      </NavLink>

      <NavLink to="/watch-later" className="menu-item">
        ⏰ Watch Later
      </NavLink>

    </aside>
  );
}

export default Sidebar;