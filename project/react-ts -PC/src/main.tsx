import { createRoot } from 'react-dom/client'
import { Router, RouterProvider } from 'react-router-dom'
import router from './router'
import "./utils/setRem"

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
)
