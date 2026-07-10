import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "../pages/navigation";
import { Footer } from "../pages/footer";
import { NotFound } from "../pages/notFound";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
     
    </>
  );
}
