import React from "react";
import './career.css';

const Career = () => {
    return (
        <>
        <div className="careerBox">
            <div className="careerFirstText">
                <h3>Career</h3>
            </div>

            <div className="careerContent">
                <div className="experience">
                    <div className="title">스튜디오 JHS - 편집자</div>
                    <div className="graph1">
                        <div className="bar1" style={{ width: '100%' }}></div>
                    </div>
                </div>
                <div className="experience">
                    <div className="title">아이코스 - 사원</div>
                    <div className="graph2">
                        <div className="bar2" style={{ width: '100%' }}></div>
                    </div>
                </div>
                <div className="experience">
                    <div className="title">마음샘 정신건강의학과 - 사원</div>
                    <div className="graph3">
                        <div className="bar3" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Career;