import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "../pages/navigation";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
