import React from "react";

const Skill = ({ iconName, text, color="currentColor", dark }) => {
    const Icon = require("../../../assets/icons/" + iconName + ".js").default;

    return (
        <div className={"m-2 p-4 shadow-lg rounded-md text-center pop " + (dark ? "darkGlass" : "glass")}>
            <div className="mx-auto max-w-max mb-2">
                <Icon width="70" height="70" color={color}/>
            </div>
            <span className="text-gray-600 text-center block">{text}</span>
        </div>
    );
};

export default Skill;