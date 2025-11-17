import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './loginPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
