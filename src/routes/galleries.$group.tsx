import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/galleries/$group')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/galleries/$group"!</div>
}
