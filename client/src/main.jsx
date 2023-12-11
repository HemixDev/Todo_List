import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// j'utilise ReactDOM.createRoot pour le rendu de l'app

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
