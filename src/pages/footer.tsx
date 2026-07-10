import { useTheme } from "../context/ThemeContext";
import { Link } from "@tanstack/react-router";
export function Footer() {
  const { isDark } = useTheme();

  return (
    <>
      <footer
        className={`footer footer-horizontal footer-center rounded p-10 ${
          isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-950"
        }`}
      >
        <nav className="grid grid-flow-col gap-4">
          <Link to="/dashboard" >Dashboard</Link>
          <Link to="/habits" >Habits</Link>
          <Link to="/habits/new" >Neue Habits</Link>
          <Link to="/dashboard" >Über uns</Link>
        </nav>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Alle Rechte vorbehalten von
            ACME Industries GmbH.
          </p>
        </aside>
      </footer>
    </>
  );
}
