import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { AuthProvider } from './contexts/AuthContext'
import './index.css'
import logo from '../public/images/Preview.png'

const favicon = document.querySelector('link[rel="icon"]')
if (favicon) {
  favicon.href = logo
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)