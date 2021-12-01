import React, { useEffect } from "react";
import { HashRouter as BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import CV from "./CV";
import Certificates from "./Certificates";
import useThemeDetector from "../../useThemeDetector";

const Root = () => {
    const isDarkTheme = useThemeDetector();

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        isDarkTheme ?
            body.classList.replace("light", "dark")
            : body.classList.replace("dark", "light");
    }, [isDarkTheme]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/certificates" element={<Certificates/>}/>
                <Route path="/" element={<CV/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Root;