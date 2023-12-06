import { lazy } from "react";

export const routes = [
    {
        path: "/",
        exact: true,
        label: "Cards",
        component: lazy(() => import("./views/Cards.jsx")),
        isPrivate: true
    },
    {
        path: "/list",
        exact: true,
        label: "List",
        component: lazy(() => import("./views/List.jsx")),
        isPrivate: true,
        restricted: false
    },
    {
        path: "/create-account",
        exact: true,
        label: "Create Account",
        component: lazy(() => import("./views/CreateAccount.jsx")),
        isPrivate: false,
        restricted: true
    },
    {
        path: "/login",
        exact: true,
        label: "Login",
        component: lazy(() => import("./views/Login.jsx")),
        isPrivate: false,
        restricted: true
    },
    {
        path: "/edit-account",
        exact: true,
        label: "Edit Account",
        component: lazy(() => import("./views/EditAccount.jsx")),
        isPrivate: true,
        restricted: false
    },
    {
        path: "/matched",
        exact: true,
        label: "Matched uses",
        component: lazy(() => import("./views/MatchedUsers.jsx")),
        isPrivate: true,
        restricted: false
    }
]