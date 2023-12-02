import './App.css';
import React, {Suspense, useEffect} from "react"
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import {routes} from "../routes";
import {theme} from "../utils/materialConfig"
import {useAuth} from "../contexts/AuthContext";
import Cookies from "js-cookie";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

function App() {
    const {token, updateToken} = useAuth();

    useEffect(() => {
        const savedToken = Cookies.get('token');

        if (savedToken) {
            updateToken(savedToken);
        }
    }, [updateToken]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Routes>
                            {routes.map(({path, component: Component, exact, isPrivate}) => (
                                isPrivate ? (
                                    <Route
                                        key={path}
                                        exact={exact?.toString()}
                                        path={path}
                                        element={<PrivateRoute isAuth={!!token}>
                                            <Component/>
                                        </PrivateRoute>}
                                    />
                                ) : (
                                    <Route
                                        key={path}
                                        exact={exact?.toString()}
                                        path={path}
                                        element={<RestrictedRoute isAuth={!!token}>
                                            <Component/>
                                        </RestrictedRoute>}
                                    />
                                )
                            ))}
                        </Routes>
                    </Suspense>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
