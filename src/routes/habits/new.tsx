import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/habits/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/habits/new"!</div>
} 
