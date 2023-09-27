import React, { useEffect, useState } from "react";
import './main.css';
import LeftConponents from "../leftComponents/LeftConponents";
import AboutMe from "../menu/aboutMe/AboutMe";
import Skills from "../menu/skills/Skills";
import Project from "../menu/project/Project";
import Career from "../menu/career/Career";
import Contact from "../menu/contact/Contact";
import { BiChevronsRight } from "react-icons/bi";

const Main = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth);
    const [menu, setMenu] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState("aboutMe");

    const changeMenu = () => {
        const newMenu = !menu;
        setMenu(newMenu)
    }

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    }

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
                {isMobile <= 768 ? 
                (
                    !menu ? <BiChevronsRight id="menuRightIcon" onClick={changeMenu} />
                    : <LeftConponents onMenuItemClick={handleMenuItemClick} />
                )
                : (
                    <LeftConponents onMenuItemClick={handleMenuItemClick} />
                )}
            </div>
            <div className="right">
                {selectedMenuItem === "aboutMe" && <AboutMe />}
                {selectedMenuItem === "skills" && <Skills />}
                {selectedMenuItem === "project" && <Project />}
                {selectedMenuItem === "career" && <Career />}
                {selectedMenuItem === "contact" && <Contact />}
            </div>
        </div>
        </>
    );
}

export default Main;
