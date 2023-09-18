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
                        <p>Java의 기초 문법을 공부한 후, 자료구조와 알고리즘을 기반으로 학습하고 있습니다.
                            현재는 TDD 개발법으로 객제 지향 개발에 대한 능력을 훈련하고 있습니다.
                        </p>
                    </div>

                    <div className="skillsLeftCard">
                        <h4 id="textWithShadow" style={{color: "#ded85d"}}>JavaScript</h4>
                        <p>JavaScript와 JQuery를 활용해 간단한 이벤트를 만들 수 있으며,
                            Ajax를 사용하여 서버와의 비동기 통신을 통해 데이터를 가져올 수 있습니다.</p>
                    </div>

                    <div className="skillsLeftCard">
                        <h4 id="textWithShadow" style={{color: "#f53e62"}}>HTML5</h4>
                        <p>HTML 페이지를 설계하고 데이터를 원하는 위치에 넣을 수 있습니다.</p>
                    </div>

                    <div className="skillsLeftCard">
                        <h4 id="textWithShadow" style={{color: "#9a19d2"}}>CSS3</h4>
                        <p>CSS3를 통해 꾸밈을 넣을 수 있습니다. 간단한 애니메이션을 넣는 것까지 구현이 가능합니다.
                        </p>
                    </div>
                </div>
                <div className="skillsRight">
                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#195922"}}>Spring Boot</h4>
                        <p>메인 프레임워크로 Spring Boot를 사용하고 있습니다.
                            REST API를 활용해 웹 서비스를 개발하며, RESTful한 개발을 위해 더 많이 고민하고 있습니다.
                        </p>
                    </div>

                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#114ab5"}}>MySQL</h4>
                        <p>데이터베이스로 활용해 본 것은 MySQL입니다. 기본 쿼리문을 활용할 수 있으며,
                            데잍베이스의 더 깊은 이해를 위해 SQLD 자격증을 취득했습니다.
                        </p>
                    </div>

                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#f69e41"}}>AWS S3</h4>
                        <p>사진 데이터를 다루기 위해 AWS S3를 사용한 경험이 있습니다.
                            그 외에도 AWS EC2등을 공부하고 있습니다.
                        </p>
                    </div>

                    <div className="skillsRightCard">
                        <h4 id="textWithShadow" style={{color: "#2d2d2d"}}>GitHub</h4>
                        <p>원활한 팀 프로젝트를 위해 GitHub를 활용했습니다.
                            GitHub를 더 다양하게 사용해볼 수 있도록 이슈를 통한 프로젝트 관리, 코드 리뷰 등을 자주 사용해보려 하고 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills;