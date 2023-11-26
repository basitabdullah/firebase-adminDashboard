import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.scss'
import { DarkModeContextProvider } from './components/context/darkModeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>

  </React.StrictMode>,
)
