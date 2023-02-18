import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from '../assets/img/foodshop.png';

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="w-40" alt="logo" src={Logo} />
  </a>
);

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="flex flex-row justify-between p-3 border-2 border-black">
      <Title />
      <div className="w-1/4 flex items-center">
        <ul className="flex justify-between list-none w-full">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <Link to={"/cart"}>
            <li data-testid="cart">
              Cart - {cartItems.length}
            </li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      <div>
        {!isLoggedIn ? (
          // <button className="btn" onClick={() => setIsLoggedIn(true)}>
          <Link to={"/login"}>
            <button
              className="h-14 bg-gray-500 text-white p-2"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          </Link>
        ) : (
          // <button className="btn" onClick={() => setIsLoggedIn(false)}>
          <button
            className="h-14 bg-gray-500 text-white p-2"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
