import { useTheme } from "../context/ThemeContext";

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
            <a className="link link-hover">Dashboard</a>
            <a className="link link-hover">Habits</a>
            <a className="link link-hover">Neue Habits</a>
            <a className="link link-hover">Über uns</a>
          </nav>

          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - Alle Rechte vorbehalten
              von ACME Industries GmbH.
            </p>
          </aside>
      </footer>
    </>
  );
}
