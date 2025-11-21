import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './loginPage'
import CreateAccount from './createAccount'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
    <CreateAccount />
  </StrictMode>,
)
