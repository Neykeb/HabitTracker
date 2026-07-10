import { Link } from "@tanstack/react-router";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/HabitFlow1.svg";

export function Navigation() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <div
        className={`navbar shadow-sm ${
          isDark ? "bg-gray-950 text-white" : "bg-white text-gray-950"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              className={`menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ${
                isDark ? "bg-gray-900 text-white" : "bg-white text-gray-950"
              }`}
            >
              <li>
                <Link to="/">Startseite</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link to="/habits">Habits</Link>
              </li>
              <li>
                <Link to="/habits/new">New Habits</Link>
              </li>

              <li>
                <Link to="/about">Über uns</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="focus:outline-none">
            <img src={logo} alt="logo" className="h-22 w-auto" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Startseite</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/habits">Habits</Link>
            </li>
            <li>
              <Link to="/habits/new">New Habits</Link>
            </li>
            <li>
              <Link to="/about">Über uns</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
            
          <button onClick={toggleTheme} className="rounded-lg border border-[#1C6ADD] px-5 py-3 transition hover:bg-[#1C6ADD] hover:text-white">
            {isDark ? "☀️ Hell" : "🌙 Dunkel"}
          </button>
        </div>
      </div>
    </>
  );
}
