import {useState} from "react";
import {addToCart, removeFromCart, updateCartItem} from "@/reducers/cart";
import {useDispatch, useSelector} from "react-redux";

interface RootState {
    cart: {
        id: string;
        quantity: number;
        saleInfo: {
            retailPrice: {
                amount: number;
            };
        };
    }[];
}

const useGetBooksCart = () => {
    const [showNotification, setShowNotification] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);

    const handleAddToCart = (book: any) => {
        const quantityElement = document.getElementById("quantity") as HTMLInputElement;
        const quantity = quantityElement ? parseInt(quantityElement.value, 10) : 1;

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

    const handleIncrease = (item: any) => {
        dispatch(updateCartItem({ ...item, quantity: item.quantity + 1 }));
    };

    const handleDecrease = (item: any) => {
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