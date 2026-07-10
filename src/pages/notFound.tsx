import { Link } from "@tanstack/react-router"
import { useTheme } from "../context/ThemeContext";

export function NotFound(){
    const { isDark } = useTheme();
    return (
      <>
        <main
          className={`flex min-h-[70vh] flex-col items-center justify-center px-6 text-center ${
            isDark ? "bg-gray-950 text-white" : "bg-white text-gray-950"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold">Seite nicht gefunden</h1>

          <p className="mt-4 max-w-md text-gray-500">
            Die Seite, die du suchst, existiert nicht oder wurde verschoben.
          </p>

          <div className="mt-8 flex gap-3">
            <Link to="/" className="btn bg-[#1C6ADD] ">
              Zur Startseite
            </Link>
          </div>
        </main>
      </>
    );
}