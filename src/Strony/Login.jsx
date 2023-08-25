import React from "react";

const Login = () => {
    return (
        <div className="PierwszyKontener">
            <div className="ZewnetrzyKontener">
                <span className="logo">Crypto Czat</span>
                <span className="title">Zaloguj się</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="Hasło" />
                    <button>Zaloguj się</button>
                </form>
                <p>Przejdz do strony Rejestracji</p>
            </div>
        </div>
    );
}

export default Login;