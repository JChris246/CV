import React from "react";

const ItemHeader = ({ text }) => {
    return (
        <div className="flex justify-between">
            <h1 className="py-2 text-center md:text-left md:px-6 rounded-full text-white font-bold bg-blue-500 text-lg w-1/3">{text}</h1>
            <div className="h-1 w-2/3 bg-blue-500 self-center"></div>
        </div>
    );
};

export default ItemHeader;