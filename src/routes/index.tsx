import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../components/Dashboard/Dashboard'
// Dashboard Komponente importieren

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  // Dashboard wird auf der Hauptseite "/" angezeigt
  return <Dashboard />
}