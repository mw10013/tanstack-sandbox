import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/play/form')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/play/form"!</div>
}
