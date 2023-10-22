import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addOrder} from "@/reducers/orders";
import {clearCart} from "@/reducers/cart";

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

const useGetCheckout = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const cartItems = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const onSubmit = (data: any) => {
        const totalAmount = cartItems.reduce((sum, item) => sum + (item.saleInfo.retailPrice.amount * item.quantity), 0);
        const orderId = Math.floor(Math.random() * 1000000);

        const order = {
            orderDate: new Date().toISOString(),
            orderId: orderId,
            totalCost: totalAmount,
            address: data.address,
            cardDetails: {
                name: data.cardName,
                number: data.cardNumber,
                expiry: data.cardExpiry,
                cvv: data.cardCVV
            },
            items: cartItems
        };

        dispatch(addOrder(order));
        dispatch(clearCart());

        router.push(`/confirmation/${orderId}`);
    };

    const requiredValidation = {
        required: "This field is required"
    };

    return { register, handleSubmit, errors, onSubmit, requiredValidation };
}

export default useGetCheckout