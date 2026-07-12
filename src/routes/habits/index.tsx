import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/habits/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hier findest du die neu erstellten Habits. </div>
}
