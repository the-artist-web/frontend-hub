import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

{/* components */}
import App from './App.tsx'

{/* custom css link */}
import './assets/css/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
