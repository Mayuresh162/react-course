import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from '../utils/useOnline';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div className="flex flex-row justify-between p-3 border-2 border-black">
      <Link to={'/'}>
        <img
          src="https://cdn.dribbble.com/users/5482538/screenshots/14141766/image-1_4x.jpg"
          alt="logo"
          className="w-40"
        />
      </Link>
      <div className="w-1/4 flex items-center">
        <ul className="flex justify-between list-none w-full">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>Cart</li>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <div>
        {!isLoggedIn ? (
          // <button className="btn" onClick={() => setIsLoggedIn(true)}>
          <Link to={'/login'}>
            <button className="h-14 bg-gray-500 text-white p-2" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          </Link>
        ) : (
          // <button className="btn" onClick={() => setIsLoggedIn(false)}>
          <button className="h-14 bg-gray-500 text-white p-2" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
