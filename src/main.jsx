import { createRoot } from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// bring back the StrictMode because it is a good practice 
