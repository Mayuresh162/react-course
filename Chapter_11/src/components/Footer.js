import UserContext from "../utils/UserContext";

function Footer({useContext}) {
  const { user } = useContext(UserContext);
    return (
        <div className="flex items-center justify-around bg-black text-white h-28">
            <span>About Us</span>
            <span>&#169; 2023 Food Shop</span>
            <span>Contact Us</span>
            <h4 className="p-10 m-10">This site is developed by {user.name} - {user.email}</h4>
        </div>
    );
}

export default Footer;