import React from "react";
import NavSlider from "./NavSlider.jsx";
import Magnifier from "./magnifier.jsx";
import Chat1 from "./chat1.jsx";

const Slider = () => {
    return (
        <div className="slider">
            <NavSlider />
            <Magnifier/>
            <Chat1/>
        </div>
    );
}

export default Slider;