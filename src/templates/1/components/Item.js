import React from "react";
import Timeline from "./Timeline";

const Item = ({ duration, heading, description, extraContent }) => {
    return (
        <div className="ml-2 md:ml-4">
            <Timeline text={duration}/>
            <div className="mx-1 px-4 mb-4 border-l-2 border-solid border-blue-500 dark:border-blue-600">
                <span className="font-bold text-gray-800 dark:text-gray-50 block">{heading}</span>
                <span className="text-gray-600 dark:text-gray-400 font-normal block">{description}</span>
                { extraContent ? extraContent() : <></> }
            </div>
        </div>
    );
};

export default Item;