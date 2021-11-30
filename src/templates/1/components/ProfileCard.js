import React from "react";

const ProfileCard = ({ profileText, photo }) => {
    return (
        <div className="text-white dark:text-gray-50 rounded-lg border-white dark:border-gray-50 p-4 mx-4 my-8 shadow-lg glass">
            <div className="profile_image pop">
                <img src={photo} alt=" " className="p-2 my-0 mx-auto" />
            </div>
            <div>
                <h2 className="font-bold">About Me</h2>
                <span className="text-justify block font-light">{profileText}</span>
            </div>
        </div>
    );
};

export default ProfileCard;