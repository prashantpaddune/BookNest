import {useState} from "react";
import {addToCart} from "@/reducers/cart";
import {useDispatch} from "react-redux";

const useGetBooksCart = () => {
    const [showNotification, setShowNotification] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
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

    return {handleAddToCart, showNotification};
}
export default useGetBooksCart;