export function Footer(){

    return (
      <>
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
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