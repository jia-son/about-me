import React from "react";
import './project.css';
import ttImage from '../../img/TT.jpg';

const Project = () => {
    return (
        <div className="projectBox">
            <div className="projectFirstText">
                <h3>Project</h3>
            </div>
            
            <div className="projectImgBox">
                <div className="image-container">
                    <img className="projectImg" src={ttImage} alt="이미지" />
                    <div className="overlay-card">
                        <p>이미지 설명 또는 추가 텍스트</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
