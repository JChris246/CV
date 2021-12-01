import React from "react";
import { NavLink } from "react-router-dom";

import LeftArrow from "../../assets/icons/LeftArrow";


const importAll = (r) => {
    let images = {};
    r.keys().forEach(item => images[item.substr(2, item.lastIndexOf(".") - 2)] = r(item).default);
    return images;
};
const images = importAll(require.context("../../assets/imgs", false, /\.(png|jpe?g)$/));

const certificates = [
    {
        link: "https://www.coursera.org/verify/VDVRBRMTMT7J",
        img: images["Coursera VDVRBRMTMT7J"]
    }, {
        link: "https://www.coursera.org/verify/GR9ZLBBKLJSZ",
        img: images["Coursera GR9ZLBBKLJSZ"]
    }, {
        link: "https://www.coursera.org/verify/YJLMNWSM4CTC",
        img: images["Coursera YJLMNWSM4CTC"]
    }, {
        link: "https://www.coursera.org/verify/6EEZDDYURZUJ",
        img: images["Coursera 6EEZDDYURZUJ"]
    }, {
        link: "https://www.coursera.org/verify/5HF46EQE9WS7",
        img: images["Coursera 5HF46EQE9WS7"]
    }, {
        link: "https://chrispi6fe.duckdns.org/chris_ecv/assets/UC-U07SO2VH.pdf",
        img: images["UC-U07SO2VH"]
    }
];

const Certificates = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <header className="p-4 mb-2 bg-blue-700 dark:bg-blue-800">
                <NavLink to="/">
                    <LeftArrow width="25" height="25"/>
                </NavLink>
            </header>
            <div className="cert_grid">
                {
                    certificates.map((cert, i) =>
                        <a href={cert.link} key={i}>
                            <img
                                src={cert.img}
                                alt="thumb of cert"
                                className="shadow p-6 bg-white"/>
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default Certificates;