import React, { useEffect, useState } from "react";
import './main.css';
import LeftConponents from "../leftComponents/LeftConponents";
import AboutMe from "../menu/aboutMe/AboutMe";
import Skills from "../menu/skills/Skills";

const Main = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
        <div className="mainBox">
            <div className="left">
                {isMobile <= 768 ? null : (
                    <LeftConponents />
                )}
            </div>
            <div className="right">
                <AboutMe />
                <Skills />
            </div>
        </div>
        </>
    );
}

export default Main;