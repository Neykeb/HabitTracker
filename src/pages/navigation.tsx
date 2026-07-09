import { Link } from "@tanstack/react-router";
import logo from "../assets/HabitFlow1.svg";

export function Navigation() {
  return (
    <>
      <div className="navbar bg-gray-950 shadow-sm">
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
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/">Startseite</Link>
              </li>
              <li>
                <Link to="/">Dashboard</Link>
              </li>

              <li>
                <a>Habits</a>
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
              <a>Habits</a>
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
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}
