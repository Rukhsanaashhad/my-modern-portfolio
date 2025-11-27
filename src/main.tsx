import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './app.css'        // ya './index.css' jo bhi hai tumhare paas

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)