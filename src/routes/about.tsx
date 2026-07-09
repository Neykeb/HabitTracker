import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <h1 className="text-3xl font-bold">HABITFLOW</h1>
          <p className="text-gray-500 text-sm">Gruppenprojekt – React 2026</p>

          <p className="text-gray-400 leading-relaxed">
            Habit Flow ist eine Web-App zum Anlegen und Verfolgen von
            persönlichen Gewohnheiten. Nutzer können Habits erstellen,
            bearbeiten, nach Kategorie und Status filtern und ihren Fortschritt
            über Streaks im Blick behalten.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Große Veränderungen beginnen mit kleinen Schritten. Habit Flow hilft
            dir, genau diese Schritte sichtbar zu machen – jeden Tag, eine
            Gewohnheit nach der anderen.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Du musst nicht perfekt sein. Du musst nur dran bleiben. Starte
            heute, verfolge deinen Fortschritt und werde die Version von dir,
            die du sein willst.
          </p>
        </div>
      </div>
    </>
  );
}
