import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <>
        <div className="skillsBox">
            <div className="skillsFirstText">
                <h3>SKILLS</h3>
            </div>
            
            <div className="skillsSecondText">
                <p>
                    개발 언어로 처음 접하게 된 것은 Java였습니다.
                    그 이후로 학원을 다니며 프로젝트에 Spring Boot, React, MySQL, AWS S3를 사용해보았습니다.
                    원활한 협업을 위해 Git을 사용했으며, 프로젝트의 기능 추가 및 수정을 진행해본 경험이 있습니다.
                    추가적으로 공부하고 있는 부분으로는 Node.js가 있습니다.
                </p>
            </div>
            
            <div className="skillsBoxInBox">
                <div className="skillsLeft">
                    <div className="skillsLeftCard">
                        <h4 id="textWithShadow" style={{color: "#08cd26"}}>Java</h4>
                        <p>Java 내용</p>
                    </div>

                    <div className="skillsLeftCard">
                        <h4 id="textWithShadow" style={{color: "#ded85d"}}>JavaScript</h4>
                        <p>JavaScript 내용</p>
                    </div>

                    <div className="skillsLeftCard">
                        <h4 id="textWithShadow" style={{color: "#f53e62"}}>HTML5</h4>
                        <p>HTML5 내용</p>
                    </div>

                    <div className="skillsLeftCard">
                        <h4 id="textWithShadow" style={{color: "#9a19d2"}}>CSS3</h4>
                        <p>CSS3 내용</p>
                    </div>
                </div>
                <div className="skillsRight">
                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#195922"}}>Spring Boot</h4>
                        <p>Spring Boot 내용</p>
                    </div>

                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#114ab5"}}>MySQL</h4>
                        <p>MySQL 내용</p>
                    </div>

                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#f69e41"}}>AWS S3</h4>
                        <p>AWS S3 내용</p>
                    </div>

                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#2d2d2d"}}>GitHub</h4>
                        <p>GitHub 내용</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills;