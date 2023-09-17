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
                    원활한 협업을 위해서는 Git을 사용했으며, 꾸준히 기능의 수정과 추가를 진행해본 경험이 있습니다.
                    현재 추가로 꾸준히 공부하고 있는 부분으로는 Node.js가 있습니다.
                </p>
            </div>
            
            <div className="skillsBoxInBox">
                <div className="skillsLeft">
                    으하하....
                </div>
                <div className="skillsRight">
                    아 된다.
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills;