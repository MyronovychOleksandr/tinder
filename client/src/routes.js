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
    },
    {
        path: "/login",
        exact: true,
        label: "Login",
        component: lazy(() => import("./views/Login.jsx"))
    },
    {
        path: "/edit-account",
        exact: true,
        label: "Edit Account",
        component: lazy(() => import("./views/EditAccount.jsx"))
    },
    {
        path: "/matched",
        exact: true,
        label: "Matched uses",
        component: lazy(() => import("./views/MatchedUsers.jsx"))
    }
]