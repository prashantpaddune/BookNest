import { useSelector } from 'react-redux';

function CartIcon() {
    const cartItems = useSelector(state => state.cart);

    return (
        <span className="absolute top-5 right-10 bg-red-500">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7j0SBzjy4-lmyhs3qFH8mMRQeYFvJC2w1-uV6C-QtW32aPtZ6Fp2lqeUUTRw9u74h_w&usqp=CAU"
                alt="Cart"
                height={30}
                width={30}
            />
            {cartItems.length > 0 && (
                <span className={"text-white rounded-full flex items-center justify-center text-xs font-bold"}>{cartItems.length} </span>
            )}
        </span>

    );
}

export default CartIcon;
