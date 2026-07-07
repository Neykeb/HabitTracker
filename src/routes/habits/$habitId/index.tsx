import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/habits/$habitId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/habits/$habitsId/"!</div>
}
