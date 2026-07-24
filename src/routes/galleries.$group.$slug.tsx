import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/galleries/$group/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/galleries/$group/$slug"!</div>
}
