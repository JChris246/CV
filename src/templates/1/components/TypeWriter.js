import React, { useEffect, useRef } from "react";
import "../../../typewriter.css";

const TypeWriter = ({ text }) => {
    const span = useRef();

    useEffect(() => {
        span.current.style.setProperty("--steps", text.length);
        span.current.style.setProperty("--speed", "4s");
        span.current.style.setProperty("--blink-speed", "750ms");
        span.current.style.setProperty("--delay", "1s");
    }, []);

    return (
        <span ref={span} className="text-xl bg-blue-700 dark:bg-blue-800 writer">{text}</span>
    );
};

export default TypeWriter;