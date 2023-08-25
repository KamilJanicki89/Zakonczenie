import React from "react";
import Dodaj from "../image/Dodaj.png";
import pliki from "../image/pliki.png"


const Inp = () => {
    return (
        <div className='inp'>
            <input type="text" placeholder='Wpisz wiadomość. . . ' />
            <div className="send">
                <img src={pliki} alt="" />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <img src={Dodaj} alt="" />
                </label>
                <button>Wyślij</button>
            </div>
        </div>
    );
}

export default Inp;