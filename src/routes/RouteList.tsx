import { RouteProps } from "react-router-dom";

import {
  SignIn,
  Dashboard,
  EmployeeList,
  EmployeeCreate,
  EmployeeEdit,
} from "../scenes";

const commonRoutes = [
  {
    path: "/",
    exact: true,
    component: SignIn,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/employee",
    exact: true,
    component: EmployeeList,
  },
  {
    path: "/employee/create",
    exact: true,
    component: EmployeeCreate,
  },
  {
    path: "/employee/edit",
    exact: true,
    component: EmployeeEdit,
  },
];

export const routes: Array<RouteProps> = [...commonRoutes];
