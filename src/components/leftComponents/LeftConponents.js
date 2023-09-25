import React, { useEffect, useState } from "react";
import './leftComponents.css';
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const LeftConponents = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth);
    const [menu, setMenu] = useState(true);

    const changeMenu = () => {
        const newMenu = !menu;
        setMenu(newMenu)
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

    if (!menu && isMobile <= 768) {
        return <BiChevronsRight id="menuRightIcon" onClick={changeMenu} />;
    }

    return (
        <>
        <div className="leftBox">
            {
            isMobile <= 768 ? 
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
                <p>자기소개</p>
                <p>기술 스택</p>
                <p>프로젝트</p>
                <p>이력</p>
                <p>컨택 가능 주소</p>
            </div>
        </div>
        </>
    );
}

export default LeftConponents;