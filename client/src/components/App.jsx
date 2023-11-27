import './App.css';
import React, {Suspense} from "react"
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import {routes} from "../routes";
import {theme} from "../utils/materialConfig"

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Routes>
                            {routes.map(({path, component: Component, exact}) => {
                                return <Route key={path} exact={exact?.toString()} path={path} element={<Component/>}/>
                            })}
                        </Routes>
                    </Suspense>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
