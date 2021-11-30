import { useEffect, useState } from "react";

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const themeListener = (e => setIsDarkTheme(e.matches));

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener("change", themeListener);
        return () => darkThemeMq.removeEventListener("change", themeListener);
    }, []);
    return isDarkTheme;
};

export default useThemeDetector;