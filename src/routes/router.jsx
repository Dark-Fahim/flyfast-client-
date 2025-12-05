import { createBrowserRouter } from "react-router"
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: '/coverage',
            Component: Coverage
        },

    ]
  },
]);

export default router