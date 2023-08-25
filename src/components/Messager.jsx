import React from 'react';

const Messager = () => {
    return (
        <div className='messager mp'>
            <div className="messagerInfo">
                <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307019544_1477981735949036_8164660571619419878_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7XRYlhiqFooAX-AIbSE&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwdpHSC8kUHjt0P_rbrNVxkC7P2f-h8GRn-HL0uOeqWQ&oe=64EB2B5F" alt="" />
                <span>Wiadomość nadeszła</span>
            </div>
            <div className="messagerContent">
                <p>Część</p>
                {/*<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/357745640_6331258180324798_3505562225331713133_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XV4On1L7JRAAX_2Eik0&_nc_ht=scontent-waw1-1.xx&oh=00_AfDT_erxKgOS6bN3HZ4vf2MszRRAyXfnEhmMl5wihG3WVA&oe=64EE0259" alt="" />*/}
            </div>
        </div>
    );
}

export default Messager;