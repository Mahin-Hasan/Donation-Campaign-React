import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Donations from './components/Donations/Donations.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import DonateDetails from './components/DonateDetails/DonateDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donations',
        element: <Donations></Donations>,
        loader: () => fetch('/fund.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/fund.json')
      },
      {
        path: '/donate/:id',
        element: <DonateDetails></DonateDetails>,
        loader: () => fetch('/fund.json')
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
