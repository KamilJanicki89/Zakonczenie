import React from "react";

const Magnifier = () => {
    return (
        <div>
            <div className='magnifier'>
                <div className="magnifierForm">
                    <input type="text" placeholder='Szukaj'/>
                </div>
                <div className="userChat">
                    <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307019544_1477981735949036_8164660571619419878_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7XRYlhiqFooAX-AIbSE&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwdpHSC8kUHjt0P_rbrNVxkC7P2f-h8GRn-HL0uOeqWQ&oe=64EB2B5F" alt="" />
                    <div className="userChatInfo">
                        <span>
                            Kamil Janicki
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Magnifier;