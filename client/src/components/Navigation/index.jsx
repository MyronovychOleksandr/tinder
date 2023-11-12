import React from 'react';
import {routes} from "../../routes";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={"flex flex-col"}>
            {routes.map(({label, path, exact}) => {
                return <NavLink
                    key={path}
                    to={path}
                    exact={exact}
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                            "text-white text-3xl font-bold mb-2",
                            isPending ? "pending" : "",
                            isActive ? "underline" : "",
                            isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                >
                    {label}
                </NavLink>
            })
            }
        </nav>
    );
};

export default Navigation;