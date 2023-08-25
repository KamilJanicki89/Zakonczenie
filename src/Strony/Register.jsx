import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {


    const handleSubmit = (e) =>{
        e.preventDefault()
        const text = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;



        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    return (
        <div className="PierwszyKontener">
            <div className="ZewnetrzyKontener">
                <span className="logo">Crypto Czat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
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