import React from "react";

const ItemHeader = ({ text }) => {
    return (
        <div className="flex justify-between">
            <h1 className="py-2 text-center md:text-left md:px-6 rounded-full text-white dark:text-gray-50 font-bold bg-blue-500 dark:bg-blue-600 text-lg w-1/3">{text}</h1>
            <div className="h-1 w-2/3 bg-blue-500 dark:bg-blue-600 self-center"></div>
        </div>
    );
};

export default ItemHeader;