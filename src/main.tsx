import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='h-full flex align-center justify-center'>
      <App />
    </div>
  </StrictMode>,
)
