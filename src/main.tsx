import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from "./context/ThemeContext";
import './index.css'

// Router erstellen mit allen Routen aus routeTree.gen.ts

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
    {/* ThemeProvider umhüllt die ganze App - alle Komponenten haben jetzt Zugriff auf das Theme */}
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
