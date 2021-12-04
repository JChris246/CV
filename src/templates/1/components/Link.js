import React from "react";

const Link = ({ iconName, text, url }) => {
    const Icon = require("../../../assets/icons/" + iconName + ".js").default;

    return (
        url ? (
            <a href={url} className="p-4 text-white rounded-full w-11/12 my-4 mx-auto shadow-lg glass flex pop">
                <Icon width={30} height={30}/>
                <span className="block font-light ml-5 self-center">{text}</span>
            </a>
        ) : (
            <div className="p-4 text-white rounded-full w-11/12 my-4 mx-auto shadow-lg glass flex pop">
                <Icon width={30} height={30}/>
                <span className="block font-light ml-5 self-center">{text}</span>
            </div>
        )
    );
};

export default Link;