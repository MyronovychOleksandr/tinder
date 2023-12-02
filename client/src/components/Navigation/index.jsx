import React from 'react';
import {routes} from "../../routes";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

const Navigation = () => {
    const {token} = useAuth();

    return (
        <nav className={"flex flex-col"}>
            {routes.map(({label, path, exact, isPrivate, restricted}) => {
                return <>
                    {!!token && isPrivate && <NavLink
                        key={path}
                        to={path}
                        exact={exact?.toString()}
                        className={({isActive, isPending, isTransitioning}) =>
                            [
                                "text-white text-3xl font-bold mb-2 rounded-3xl p-4 hover:bg-red-500",
                                isPending ? "pending" : "",
                                isActive ? "underline" : "",
                                isTransitioning ? "transitioning" : "",
                            ].join(" ")
                        }
                    >
                        {label}
                    </NavLink>}
                    {!token && restricted && <NavLink
                        key={path}
                        to={path}
                        exact={exact?.toString()}
                        className={({isActive, isPending, isTransitioning}) =>
                            [
                                "text-white text-3xl font-bold mb-2 rounded-3xl p-4 hover:bg-red-500",
                                isPending ? "pending" : "",
                                isActive ? "underline" : "",
                                isTransitioning ? "transitioning" : "",
                            ].join(" ")
                        }
                    >
                        {label}
                    </NavLink>}
                </>
            })
            }
        </nav>
    );
};

export default Navigation;