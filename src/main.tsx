<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from "./context/ThemeContext";
import './index.css'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
>>>>>>> 5875f3f81dc1452cbb4bd37b0567bc89ea033345

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
<<<<<<< HEAD
    <ThemeProvider>
    {/* ThemeProvider umhüllt die ganze App - alle Komponenten haben jetzt Zugriff auf das Theme */}
    <RouterProvider router={router} />
    </ThemeProvider>
=======
    <QueryClientProvider client={queryClient}>
      {/* RouterProvider ersetzt App - er kümmert sich um alle Seiten */}
      <RouterProvider router={router} />
    </QueryClientProvider>
>>>>>>> 5875f3f81dc1452cbb4bd37b0567bc89ea033345
  </StrictMode>,
);
