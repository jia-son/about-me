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
                    <div className="title">
                        <p>스튜디오 JHS - 편집자</p>
                        <p>2019.04~2019.10 (6개월)</p>
                    </div>
                    <div className="graphAndBar">
                        <div className="graph1">
                            <div className="bar1" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="title">
                        <p>아이코스 - 사원</p>
                        <p>2019.11~2020.08 (9개월)</p>
                    </div>
                    <div className="graphAndBar">
                        <div className="graph2">
                            <div className="bar2" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="title">
                        <p>마음샘 정신건강의학과 - 사원</p>
                        <p>2020.09~2022.12 (2년 3개월)</p>
                    </div>
                    <div className="graphAndBar">
                        <div className="graph3">
                            <div className="bar3" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="careerSecondText">
                <p>
                    이력 수행하며 느낀점
                </p>
            </div>
        </div>
        </>
    );
}

export default Career;