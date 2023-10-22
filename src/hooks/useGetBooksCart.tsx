import {useState} from "react";
import {addToCart, removeFromCart, updateCartItem} from "@/reducers/cart";
import {useDispatch, useSelector} from "react-redux";

const useGetBooksCart = () => {
    const [showNotification, setShowNotification] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    const handleAddToCart = (book) => {
        const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;

        const payload = {
            ...book,
            quantity: quantity
        }

        dispatch(addToCart(payload));
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const handleIncrease = (item) => {
        dispatch(updateCartItem({ ...item, quantity: item.quantity + 1 }));
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            dispatch(updateCartItem({ ...item, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeFromCart(item.id));
        }
    };

    const totalAmount = cartItems.reduce((sum, item) => sum + (item.saleInfo.retailPrice.amount * item.quantity), 0);


    return { handleAddToCart, showNotification, handleDecrease, handleIncrease, totalAmount, cartItems };
}
export default useGetBooksCart;