import React from "react";
import { NavLink } from "react-router-dom";

import Heading from "./components/Heading";
import ProfileCard from "./components/ProfileCard";
import Link from "./components/Link";

import photo from "../../assets/imgs/IMG-20190902-WA0003.jpg";
import ItemHeader from "./components/ItemHeader";
import Timeline from "./components/Timeline";
import Item from "./components/Item";
import Skill from "./components/Skill";

const profileText = "Junior level web developer, recently completed a Computer Science double major. Strong technical and interpersonal skills. Adaptable and creative which strengthens openness to new ideas and concepts. Big fan of Linux.";

const links = [
    {
        icon: "Email",
        text: "chris.401@live.com"
    }, {
        icon: "Phone",
        text: "🇧🇧 (246) 847-4121 / 🇺🇸 (206) 403-5960",
    }, {
        icon: "Github",
        url: "https://github.com/JChris246",
        text: "JChris246",
    }, {
        icon: "Code",
        url: "https://chris-projects.netlify.app",
        text: "Projects",
    }, {
        icon: "Certificate",
        wrap: "certificates",
        text: "Other Achievements"
    }
];

const skills = [
    {
        icon: "Html",
        text: "HTML"
    }, {
        icon: "Css",
        text: "CSS"
    }, {
        icon: "Js",
        text: "Javascript"
    }, {
        icon: "Java",
        text: "Java"
    }, {
        icon: "Code",
        text: "C & C++",
        color: "#0180cd"
    }, {
        icon: "Php",
        text: "Php"
    }, {
        icon: "Python",
        text: "Python"
    }, {
        icon: "Nodejs",
        text: "NodeJS",
    }, {
        icon: "ReactIcon",
        text: "React"
    }, {
        icon: "Docker",
        text: "Docker"
    }, {
        icon: "Go",
        text: "GO"
    }, {
        icon: "Spring",
        text: "Spring"
    }
];

const courses = ["Unix – A", "Computing 1 & 2 – A+", "Networks 1 – A", "Networks 2 & 3 – A+",
    "Information Technology Engineering – A+", "Data Structures – A", "Algorithms – A",
    "Web Dev Concepts, Tools & Practises – A+", "Obj-Oriented Program Concepts – A+",
    "Mathematics for Computer Scientist 1 & 2 – A", "Database Management Systems 1 – A",
    "Database Management Systems 2 – A+"
];

const hc = [
    "Computer Science (CAPE) Unit 2 grade II", "Computer Science (CAPE) Unit 1 grade I",
    "Speech Day Prize for being the top performer in Computer Science (CAPE) Unit 1",
    "English Language (CSEC) grade I", "Mathematics (CSEC) grade I", "Information Technology (CSEC) grade I",
    "Speech Day Prize for being the top performer in Information Technology (CSEC)",
    "Speech Day Prize for being the top performer in Information Technology with a percentage of over 90%"
];

const CV = ({ isDarkTheme }) => {
    return (
        <div className="flex flex-col md:flex-row px-0">
            <div className="md:w-1/3 bg-blue-700 dark:bg-blue-800">
                <Heading firstName="Christopher" lastName="King" title="Junior Web Developer"/>
                <ProfileCard profileText={profileText} photo={photo}/>
                {
                    links.map((item, i) =>
                        item?.wrap ? <NavLink key={i} to={item.wrap}>
                            <Link
                                iconName={item.icon}
                                text={item.text}
                                url={item?.url}
                            />
                        </NavLink> :
                            <Link
                                key={i}
                                iconName={item.icon}
                                text={item.text}
                                url={item?.url}
                            />
                    )
                }
            </div>
            <div className="md:w-2/3 bg-white dark:bg-gray-900 p-4">
                <div className="md:ml-5 ml-1">
                    <ItemHeader text="Education"/>
                    <div className="ml-2 md:ml-4">
                        <Timeline text="2018 - 2022"/>
                        <div className="mx-1 px-4 mb-4 border-l-2 border-solid border-blue-500 dark:border-blue-600">
                            <span className="font-bold text-gray-800 dark:text-gray-50 block">University of the West Indies</span>
                            <a href="https://1drv.ms/i/s!AqgyohKEbXZb_3hVjuYxXbubnbml?e=q33iYT" className="text-gray-600 dark:text-gray-400 font-normal block">BSC. Science Computer Science [Double] – 4.06</a>
                        </div>
                        <div className="mx-1 px-4 mb-4 border-l-2 border-solid border-blue-500 dark:border-blue-600">
                            <span className="font-bold text-gray-800 dark:text-gray-50 block mt-4 mb-2">Some courses completed at present</span>
                            <ul>
                                {
                                    courses.map((course, i) =>
                                        <li key={i}
                                            className="text-gray-600 dark:text-gray-400 font-normal my-1">
                                            {course}
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="ml-2 md:ml-4">
                        <Timeline text="2011 - 2018"/>
                        <div className="mx-1 px-4 mb-4 border-l-2 border-solid border-blue-500 dark:border-blue-600">
                            <span className="font-bold text-gray-800 dark:text-gray-50 block">Harrison College</span>
                            <ul className="mt-2">
                                {
                                    hc.map((item, i) =>
                                        <li key={i}
                                            className="text-gray-600 dark:text-gray-400 font-normal my-1">
                                            {item}
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:ml-5 ml-1">
                    <ItemHeader text="Experience"/>
                    <Item
                        duration="2022 - 2023"
                        heading="Full Stack Developer - First Caribbean International Bank"
                        description="Integrate the application with all required systems and services. Provide clean and easy way to use API for the frontend part of the system. Bare the full responsibility for the application functionality, performance and
                            scalability. Write clean modern APIs, that integrate with legacy systems and work with databases. Design and develop the business logic and backend systems of the product. Work closely with frontend developers to design and develop functional, performing and complete APIs.
                            Decipher existing companies software systems and be able to hook in application to applicable data sources. Write both unit and integration tests, and develop automation tools for daily tasks. Develop high quality, well documented, and efficient code. Challenge ideas and opinions to avoid pitfalls and inefficient solutions."
                        extraContent={() => <>
                            <br/>
                            <span className="text-gray-600 dark:text-gray-400 font-normal block">Technologies included: Java, Spring, JS, TS, React, Tailwindcss, ChakraUI, Cosmos DB, Docker, Git, Azure Devops Services and Tools.</span>
                        </>}
                    />
                    <Item
                        duration="2020 - 2021"
                        heading="Software Developer Intern - WebStart"
                        description="Programme consisted of six (6) weeks where participants were introduced to practical software development skills and mentored directly by an experienced software developer. Topics included: React, Firebase, Jest, React Testing Library and Mapbox."
                    />
                </div>

                <div className="md:ml-5 ml-1">
                    <ItemHeader text="Skills"/>
                    <div className="custom_grid mt-4">
                        {
                            skills.map((item, i) =>
                                <Skill
                                    key={i}
                                    iconName={item.icon}
                                    text={item.text}
                                    color={item.color}
                                    dark={isDarkTheme}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;
