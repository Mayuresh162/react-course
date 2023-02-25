import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
    <div>
        <h1 className="font-bold text-3xl">Cart Page</h1>
        <button onClick={() => handleClearCart()} className="bg-green-100 p-2 m-5">Clear Cart</button>
        <div className="flex">
            {cartItems.map((item) => (
                <FoodItem key={item.id} item={item} />
            ))}
        </div>
        {/* <div>
            <span>{total}</span>
            <button>CHECKOUT</button>
        </div> */}
    </div>
    )
}

export default Cart;