import React, { useEffect, useState, useRef } from "react";
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
    const menuItems = ["aboutMe", "skills", "project", "career", "contact"];

    const mainRef = useRef(null);

    const changeMenu = () => {
        const newMenu = !menu;
        setMenu(newMenu);
    }

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);

        const componentIndex = menuItems.indexOf(menuItem);
        if (mainRef.current && componentIndex !== -1) {
            const element = mainRef.current.getElementsByClassName("menuContainer")[componentIndex];
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
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

    const leftStyle = {
        top: 0,
        zIndex: 1,
        position: isMobile <= 768 && !menu ? "fixed" : "static",
    };

    return (
        <div className="mainBox" ref={mainRef}>
            <div className="left" style={leftStyle}>
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
                {menuItems.map((menuItem) => (
                    <div
                        key={menuItem}
                        className={`menuContainer ${selectedMenuItem === menuItem ? "active" : ""}`}
                    >
                        {menuItem === "aboutMe" && <AboutMe />}
                        {menuItem === "skills" && <Skills />}
                        {menuItem === "project" && <Project />}
                        {menuItem === "career" && <Career />}
                        {menuItem === "contact" && <Contact />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;