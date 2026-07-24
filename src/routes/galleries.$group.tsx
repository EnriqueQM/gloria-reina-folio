import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/galleries/$group")({
  component: () => <Outlet />,
});
