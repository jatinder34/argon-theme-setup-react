import Index from "views/Index.js";
import Register from "views/pages/Register.js";
import Login from "views/pages/Login.js";
import Users from "views/pages/users/Users";
import AddUser from "views/pages/users/Add";
import EditUser from "views/pages/users/Edit";

var routes = [
  {
    isDisplay: true,
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    isDisplay: false,
    path: "/users/add",
    name: "Add User",
    icon: "ni ni-circle-08 text-pink",
    component: AddUser,
    layout: "/admin",
  },
  {
    isDisplay: false,
    path: "/users/edit/:id",
    name: "Edit User",
    icon: "ni ni-circle-08 text-pink",
    component: EditUser,
    layout: "/admin",
  },
  {
    isDisplay: true,
    path: "/users",
    name: "Users",
    icon: "ni ni-bullet-list-67 text-red",
    component: Users,
    layout: "/admin",
  },
  {
    isDisplay: false,
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    isDisplay: false,
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
