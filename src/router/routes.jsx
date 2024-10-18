import EmployeeProfile from "../pages/EmployeeProfile/EmployeeProfile";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

export const routes =[
    {path: '/registration', component: Registration},
    {path: '/login', component: Login},
    {path: '/employee-profile', component: EmployeeProfile, authProtected: true}
];