import { useState } from "react";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <a href="/">
                <img src="https://cdn.dribbble.com/users/5482538/screenshots/14141766/image-1_4x.jpg" alt="logo" className="company-logo"/>
            </a>
            <div className="user-section">
                <ul className="list">
                    <li>Offers</li>
                    <li>Help</li>
                    <li>User</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>
                { !isLoggedIn ? 
                    <button className="btn" onClick={() => setIsLoggedIn(true)}>Login</button> :
                    <button className="btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
                }
            </div>
        </div>
    );
}

export default Header;