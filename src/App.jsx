import React from 'react'

import "./styles.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

//Custom components (Pages)
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

/**
La función LayoutMain es un componente de React que renderiza tres componentes: Navbar, Outlet, y Footer.
Estos componentes se renderizan dentro del componente LayoutMain usando JSX.
*/
function LayoutMain() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

/**
  La función createBrowserRouter es una función que crea una instancia del componente BrowserRouter de React Router.
  El componente BrowserRouter proporciona una interfaz para navegar entre diferentes rutas en una aplicación de React.
  @param {Object[]} routes - Array de objetos que representan las rutas de la aplicación. Cada objeto tiene las
  propiedades path y element.
  @returns {BrowserRouter} - Una instancia del componente BrowserRouter de React Router.
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  },
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}


export default App
