import Link from "next/link";
import useGetBooksCart from "@/hooks/useGetBooksCart";
import { useRouter } from "next/router";
import Image from "next/image";

interface CartItem {
    id: string;
    quantity: number;
    saleInfo: {
        retailPrice: {
            amount: number;
        };
    };
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        averageRating?: number;
        imageLinks?: {
            thumbnail?: string;
        };
    };
}

function CartPage() {
    const { handleIncrease, handleDecrease, totalAmount, cartItems } = useGetBooksCart();
    const router = useRouter();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-6 h-screen flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-8">Looks like you have added anything to your cart yet. Start shopping to fill it up!</p>
                <Link href="/" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-medium transition">
                    Go to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl mb-8 font-semibold">Your Cart</h1>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
                {cartItems.map((item: any) => (
                    <div key={item.id} className="border-b p-4 flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Image src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} height={20} width={16} className="h-20 w-16 object-cover rounded" />
                            <div>
                                <h2 className="text-xl font-medium">{item.volumeInfo.title}</h2>
                                <p className="text-gray-600">{item.saleInfo.retailPrice.amount} INR x {item.quantity}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleDecrease(item)}
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                            >-</button>
                            <span className="text-lg">{item.quantity}</span>
                            <button
                                onClick={() => handleIncrease(item)}
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                            >+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-end">
                <div className="text-right">
                    <p className="text-2xl font-semibold mb-2">Total: {totalAmount.toFixed(2)} INR</p>
                    <button onClick={() => router.push('/checkout')} className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-medium">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
