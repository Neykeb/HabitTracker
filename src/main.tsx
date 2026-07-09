import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Router erstellen mit allen Routen aus routeTree.gen.ts

const router = createRouter({ routeTree });
const queryClient = new QueryClient();
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* RouterProvider ersetzt App - er kümmert sich um alle Seiten */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
