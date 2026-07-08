import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'

// Router erstellen mit allen Routen aus routeTree.gen.ts
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* RouterProvider ersetzt App - er kümmert sich um alle Seiten */}
    <RouterProvider router={router} />
  </StrictMode>,
)