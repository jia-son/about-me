import React, { useEffect, useState } from "react";
import './main.css';
import LeftConponents from "../leftComponents/LeftConponents";

const Main = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
        <div className="mainBox">
            {isMobile <= 768 ? null : (
                <LeftConponents />
            )}
        </div>
        </>
    );
}

export default Main;