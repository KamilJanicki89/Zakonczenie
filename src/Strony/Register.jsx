import React from "react";

const Register = () => {
    return (
        <div className="PierwszyKontener">
            <div className="ZewnetrzyKontener">
                <span className="logo">Crypto Czat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Imie" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="Hasło" />
                    <input type="file" placeholder="załącznik" />
                    <button>Zapisz się</button>
                </form>
                <p>Dowolny tekst</p>
            </div>
        </div>
    );
}

export default Register;