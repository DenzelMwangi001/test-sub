import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 font-semibold transition border-b-2 border-transparent hover:text-gold ${
      location.pathname === path ? "text-gold border-gold" : "text-charcoal"
    }`;

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/40 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-display text-charcoal tracking-tight">FoodShare</h1>
        <div className="flex space-x-4">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/donate" className={linkClass("/donate")}>Donate</Link>
          <Link to="/requests" className={linkClass("/requests")}>Requests</Link>
          <Link to="/profile/1" className={linkClass("/profile/1")}>Profile</Link>
        </div>
      </div>
    </nav>
  );
}
