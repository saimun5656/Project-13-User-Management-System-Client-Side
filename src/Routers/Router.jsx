import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import App from "../App";
import AddUsers from "../Pages/AddUsers/AddUsers";
import UpdateUser from "../Pages/UpdateUser/UpdateUser";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<App></App>,
                loader:()=>fetch('http://localhost:3400/users')
            },
            {
                path:'add-user',
                element:<AddUsers></AddUsers>
            },
            {
                path:'update-user',
                element:<UpdateUser></UpdateUser>
            }
        ]
    }
])
export default router