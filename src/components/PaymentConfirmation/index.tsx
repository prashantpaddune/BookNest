import { useSelector } from 'react-redux';
import {useRouter} from "next/router";

const ConfirmationPage = () => {
    const orders = useSelector(state => state.orders);
    const { query } = useRouter();
    const order = orders.find(order => order.orderId ==  query.orderId);

    if (!order) {
        return <div>No order details available.</div>;
    }

    return (
        <div className="min-h-screen sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl mb-6 font-semibold text-gray-700">Order Confirmation</h2>
                <div className="mb-8">
                    <p className="text-green-600 text-lg font-medium mb-3">Thank you for your purchase!</p>
                    <div className="border-t-2 border-green-400 w-16 mb-5"></div>
                    <h3 className="text-xl font-medium text-gray-700 mb-3">Order Details:</h3>
                    <ul className="text-gray-600 pl-5 space-y-2">
                        <li>Date: {new Date(order.orderDate).toLocaleString()}</li>
                        <li>Total Cost: ${order.totalCost}</li>
                        <li>Address: {order.address}</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-medium text-gray-700 mb-3">Card Details:</h3>
                    <ul className="text-gray-600 pl-5 space-y-2">
                        <li>Name: {order.cardDetails.name}</li>
                        <li>Number: **** **** **** {order.cardDetails.number.slice(-4)}</li>
                        <li>Expiry: {order.cardDetails.expiry}</li>
                    </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-blue-700">Your items will be shipped to the address provided. Please review your order details and contact support if you have any questions or concerns.</p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
