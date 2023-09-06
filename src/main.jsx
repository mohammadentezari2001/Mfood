import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { thContext } from './context/themeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <thContext.Provider value={{color:'red',text:'hello world'}}>
    <App />
    </thContext.Provider>
  </React.StrictMode>,
)
 