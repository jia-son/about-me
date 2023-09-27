// import React, { useEffect, useState } from "react";
// import './leftComponents.css';
// import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

// const LeftConponents = ({ onMenuItemClick }) => {
//     const [isMobile, setIsMobile] = useState(window.innerWidth);
//     const [menu, setMenu] = useState(true);

//     const changeMenu = () => {
//         const newMenu = !menu;
//         setMenu(newMenu);
//     }

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth);
//         };
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     const handleItemClick = (pageName) => {
//         onMenuItemClick(pageName);
//     }

//     if (!menu && isMobile <= 768) {
//         return <BiChevronsRight id="menuRightIcon" onClick={changeMenu} />;
//     }

//     return (
//         <>
//         <div className="leftBox">
//             {isMobile <= 768 ? 
//                 (
//                     <BiChevronsLeft id="menuIcon" onClick={changeMenu} />
//                 ) : null
//             }
//             <div className="leftBoxInImgBox">
//                 <div className="imgBox" />
//                 <h1>손지아</h1>
//                 <h5>Java 백엔드 개발자</h5>
//             </div>
//             <div className="menuBox">
//                 <p onClick={() => handleItemClick("aboutMe")}>자기소개</p>
//                 <p onClick={() => handleItemClick("skills")}>기술 스택</p>
//                 <p onClick={() => handleItemClick("project")}>프로젝트</p>
//                 <p onClick={() => handleItemClick("career")}>이력</p>
//                 <p onClick={() => handleItemClick("contact")}>컨택 가능 주소</p>
//             </div>
//         </div>
//         </>
//     );
// }

// export default LeftConponents;


import React, { useEffect, useState } from "react";
import './leftComponents.css';
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const LeftConponents = ({ onMenuItemClick }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth);
    const [menu, setMenu] = useState(true);
    const [scrollY, setScrollY] = useState(0); // 추가: 스크롤 위치 저장

    const changeMenu = () => {
        const newMenu = !menu;
        setMenu(newMenu);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth);
        };

        const handleScroll = () => {
            // 스크롤 위치를 스크롤 이벤트로 감지하여 저장
            setScrollY(window.scrollY);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll); // 추가: 스크롤 이벤트 등록

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll); // 추가: 스크롤 이벤트 해제
        };
    }, []);

    // 스크롤 위치에 따라 LeftComponent의 위치 조절
    const leftComponentStyle = {
        top: scrollY + "px" // 또는 다른 값으로 위치를 설정
    };

    const handleItemClick = (pageName) => {
        onMenuItemClick(pageName);
    }

    if (!menu && isMobile <= 768) {
        return <BiChevronsRight id="menuRightIcon" onClick={changeMenu} />;
    }

    return (
        <>
        <div className="leftBox" style={leftComponentStyle}> {/* 스타일 적용 */}
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
