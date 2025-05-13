import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'        // ✅ Keep this
import './App.css'          // ✅ Add this below it
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
