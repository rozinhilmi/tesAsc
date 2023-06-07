import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Pages/Login';
import ListUser from './Pages/ListUser';
import SignUp from './Pages/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/ListUser",
    element: <ListUser />
  },
  {
    path: "/ListUser/:slug",
    element: <ListUser />
  },
  {
    path: "/SignUp",
    element: <SignUp />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>
  
)
