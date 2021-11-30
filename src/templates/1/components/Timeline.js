import React from "react";

const Timeline = ({ text }) => {
    return (
        <div className="flex py-4 items-center">
            <div className="h-3 w-3 rounded-full border-solid border-2 border-blue-500 dark:border-blue-600"></div>
            <div className="ml-5 text-blue-500 dark:text-blue-600">{text}</div>
        </div>
    );
};

export default Timeline;
