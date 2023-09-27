import React from "react";
import './project.css';
import ttImage from '../../img/TT.jpg';
import {AiFillGithub} from 'react-icons/ai';

const Project = () => {
    const openGitHubTab = () => {
        window.open("https://github.com/orgs/exen-academy-jjjw/repositories", "_blank");
    };

    return (
        <div className="projectBox">
            <div className="projectFirstText">
                <h3>Project</h3>
            </div>
            
            <div className="projectImgBox">
                <div className="image-container">
                    <img className="projectImg" src={ttImage} alt="이미지" />
                    <div className="overlayCard">
                        <p>
                            <strong>Tomorrow? Today!</strong>
                        </p>
                        <p>
                            개발 기간 : 2023.06 (1개월)
                            <br />
                            기능 수정 및 추가 기간 : 2023.08 ~
                        </p>
                        <p>
                            버킷을 작성, 관리할 수 있는 웹 서비스입니다.
                            <br />
                            가장 기본적인 CRUD에 집중해 개발했습니다.
                        </p>
                        <button onClick={openGitHubTab}>
                            <AiFillGithub />
                            <span>GitHub로 이동하기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;