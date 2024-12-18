import React from "react";
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Edificios from "views/Edificios/EdiciosView.js"
import Presurizacion from "views/presurizacion/PresurizacionView.js"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/Edificios",
    name: "Edificios",
    icon: "tim-icons icon-single-02",
    component: <Edificios />,
    layout: "/admin",
  },
];
export default routes;
