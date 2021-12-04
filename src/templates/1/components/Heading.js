import React from "react";
import TypeWriter from "./TypeWriter";

const Heading = ({ firstName, lastName, title }) => {
    return (
        <div className="p-4 text-white dark:text-gray-50 m-4">
            <h1 className="text-4xl">{firstName}</h1>
            <h1 className="text-4xl font-bold">{lastName}</h1>
            <TypeWriter text={title}/>
        </div>
    );
};

export default Heading;