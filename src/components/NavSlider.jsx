import { useState } from 'react';

const NavSlider = () => {
    const renderLogo = () => (
        <header className="logo">
             Czat
        </header>
    );

    const renderUserImage = () => (
        <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307019544_1477981735949036_8164660571619419878_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7XRYlhiqFooAX-AIbSE&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwdpHSC8kUHjt0P_rbrNVxkC7P2f-h8GRn-HL0uOeqWQ&oe=64EB2B5F" alt="User" />
    );

    const renderUserName = () => (
        <span>Kamil</span>
    );

    const renderLogoutButton = () => (
        <button onClick={() => { /* Tutaj możesz dodać funkcję wylogowywania */ }}>
            Wyloguj
        </button>
    );

    return (
        <div className='NavSlider'>
            {renderLogo()}
            {renderUserName()}
            {renderUserImage()}
            {renderLogoutButton()}
        </div>
    );
}

export default NavSlider;