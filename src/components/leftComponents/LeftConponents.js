import React from "react";
import './leftComponents.css';

const LeftConponents = () => {
    return (
        <>
        <div className="leftBox">
            <div className="leftBoxInImgBox">
                <div className="imgBox" />
                <h1>손지아</h1>
                <h5>Java 백엔드 개발자</h5>
            </div>
            <div className="menuBox">
                <p>자기소개</p>
                <p>기술 스택</p>
                <p>프로젝트</p>
                <p>트러블 슈팅</p>
                <p>이력</p>
                <p>컨택 가능 주소</p>
            </div>
        </div>
        </>
    );
}

export default LeftConponents;