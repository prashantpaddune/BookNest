import { useSelector } from 'react-redux';

function CartIcon() {
    const cartItems = useSelector(state => state.cart);

    return (
        <div>
            {/*<img src="/path-to-cart-icon.svg" alt="Cart" />*/}
            <span>{cartItems.length}</span>
        </div>
    );
}

export default CartIcon;
