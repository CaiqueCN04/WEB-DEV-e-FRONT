import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';



import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contextualizacao from './routes/Contextualizacao.jsx'
import ProblemaxSolucao from './routes/ProblemaxSolucao.jsx'
import Problema from './routes/Problema.jsx'
import Causas from './routes/Causas.jsx'
import Casos from './routes/Casos.jsx'
import Login from './routes/Login.jsx'
import Pedido from './routes/Pedido.jsx'
import ListarPedidos from './routes/ListarPedidos.jsx'



const router= createBrowserRouter([
  
  {
    path: '/', element: <App/>, 

    children:[
      {path: '/', element: <Home/>},
      {path: '/Contextualizacao', element: <Contextualizacao/>},
      {path: '/ProblemaxSolucao', element: <ProblemaxSolucao/>},
      {path: '/Problema', element: <Problema/>},
      {path: '/Causas', element: <Causas/>},
      {path: '/Casos', element: <Casos/>},
      {path: '/Login', element: <Login/>},
      {path: '/pedido', element: <Pedido/>},
      {path: '/listarpedidos', element: <ListarPedidos/>},
      {path: '/incluir/', element:<Pedido/>},
      {path: '/editar/:id',element:<Pedido/>},
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
