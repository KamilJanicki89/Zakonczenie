import React from "react";
import Kamera from "../image/Kamera.png";
import Dodaj from "../image/Dodaj.png";
import Więcej from "../image/Więcej.png";
import Messagers from "./Messagers.jsx";
const Chat = () => {

    return(
        <div className='chat'>
            <div className="chatInfo">
                <span>Kamil</span>
                <div className="chatIcons">
                    <img src={Kamera} alt="" />
                    <img src={Dodaj} alt="" />
                    <img src={Więcej} alt="" />
                </div>
                <Messagers />
            </div>
        </div>

    )
}
export default Chat;