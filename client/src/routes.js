import { lazy } from "react";

export const routes = [
    {
        path: "/",
        exact: true,
        label: "Cards",
        component: lazy(() => import("./views/Cards.jsx")),
    },
    {
        path: "/list",
        exact: true,
        label: "List",
        component: lazy(() => import("./views/List.jsx")),
    },
    {
        path: "/create-account",
        exact: true,
        label: "Create Account",
        component: lazy(() => import("./views/CreateAccount.jsx"))
    }
]