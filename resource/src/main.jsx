import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.jsx'
import { ModeProvider } from './pages/ModeProvider.jsx'
import { ApiProvider } from './pages/ApiProvider.jsx'
import { CartProvider } from 'react-use-cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider >
    <ModeProvider>
      <ApiProvider >
      <App />
      </ApiProvider>
    </ModeProvider></CartProvider>
  </StrictMode>,
)
