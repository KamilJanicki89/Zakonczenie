import React from "react";
import Chat from '../components/Chat.jsx';
import Slider from "../components/Slider.jsx";
const Header = () => {
    return (
        <div className='Header'>
            <div className='container'>
                <Slider/>
                    {/* Treść dla Slidera */}
                <Chat/>
            </div>
        </div>
    );
}

export default Header;