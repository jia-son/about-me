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
                    1:1 작가 전담 케어, 고객 응대 및 동료와의 협업은 무엇보다 커뮤니케이션 능력을 가장 크게 필요로 했습니다.
                    <br />
                    차근차근 길러온 커뮤니케이션 능력은 개발 공부를 시작하고 팀 프로젝트를 진행하게 되었을 때,
                    동료들의 의견을 모으고 조율하거나 서로 간의 의사 소통이 원활하게 이루어질 수 있도록 많은 도움을 주었습니다.
                </p>
            </div>
        </div>
        </>
    );
}

export default Career;