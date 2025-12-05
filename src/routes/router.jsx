import { createBrowserRouter } from "react-router"
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import NotFound404 from "../pages/NotFound404/NotFound404";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound404></NotFound404>,
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: '/coverage',
            Component: Coverage,
            loader: () => fetch('/data/warehouses.json').then(res => res.json())
        },

    ]
  },
]);

export default router