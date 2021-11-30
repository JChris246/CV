import React from "react";
import Timeline from "./Timeline";

const Item = ({ duration, heading, description }) => {
    return (
        <div className="ml-2 md:ml-4">
            <Timeline text={duration}/>
            <div className="mx-1 px-4 mb-4 border-l-2 border-solid border-blue-500">
                <span className="font-bold text-gray-800 block">{heading}</span>
                <span className="text-gray-600 font-normal block">{description}</span>
            </div>
        </div>
    );
};

export default Item;