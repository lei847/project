import { createBrowserRouter,Navigate } from "react-router-dom";
import App from "../App";

const router=createBrowserRouter([
    {
        path:'/app',
        element:<App></App>
    },
    {
        path:'/',
        element:<Navigate to='/app'></Navigate>
    }
])

export default router