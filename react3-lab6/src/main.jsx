import React from "react"
import ReactDOM from "react-dom/client"
import "./main.css"
import {UserProvider} from "../content/UserContext"
import { RouterProvider } from "react-router-dom"
import { router } from "./principal/principal.jsx"
import store from "./redux/store/index.js"
import { Provider } from "react-redux"
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <UserProvider>
    <RouterProvider router= {router}/>
    </UserProvider>
    </Provider>
  </React.StrictMode>,
)
