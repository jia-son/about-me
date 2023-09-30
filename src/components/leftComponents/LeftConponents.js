import React, { useEffect, useState } from "react";
import './leftComponents.css';
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const LeftConponents = ({ onMenuItemClick }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth);
    const [menu, setMenu] = useState(true);

    const changeMenu = () => {
        const newMenu = !menu;
        setMenu(newMenu);
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

    const leftComponentStyle = {
        position: "fixed",
        top: "0",
        zIndex: 1,
    };

    const handleItemClick = (pageName) => {
        onMenuItemClick(pageName);
        changeMenu();
    }

    if (!menu && isMobile <= 768) {
        return <BiChevronsRight id="menuRightIcon" style={leftComponentStyle} onClick={changeMenu} />;
    }

    return (
        <>
        <div className="leftBox" style={leftComponentStyle}>
            {isMobile <= 768 ? 
                (
                    <BiChevronsLeft id="menuIcon" onClick={changeMenu} />
                ) : null
            }
            <div className="leftBoxInImgBox">
                <div className="imgBox" />
                <h1>손지아</h1>
                <h5>Java 백엔드 개발자</h5>
            </div>
            <div className="menuBox">
                <p onClick={() => handleItemClick("aboutMe")}>자기소개</p>
                <p onClick={() => handleItemClick("skills")}>기술 스택</p>
                <p onClick={() => handleItemClick("project")}>프로젝트</p>
                <p onClick={() => handleItemClick("career")}>이력</p>
                <p onClick={() => handleItemClick("contact")}>컨택 가능 주소</p>
            </div>
        </div>
        </>
    );
}

export default LeftConponents;
