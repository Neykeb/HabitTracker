import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/habits/$habitId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/habits/$habitId/edit"!</div>
}
