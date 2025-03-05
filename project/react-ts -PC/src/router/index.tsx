import { createBrowserRouter,Navigate } from "react-router-dom";
import App from "../App";
import Index from "../components/index";
const router=createBrowserRouter([
    {
        path:'/app',
        element:<App></App>
    },
    {
        path:'/',
        element:<Navigate to='/app'></Navigate>
    },
    {
        path:"/index",
        element:<Index></Index>
    }
])

export default router