import { useSelector } from 'react-redux';

const MyOrders = () => {
    const orders = useSelector(state => state.orders);

    const renderOrders = () => {
        if (orders.length === 0) {
            return (
                <div className="text-xl text-center mt-12">
                    You haven't placed any orders yet.
                </div>
            );
        }

        return (
            orders.map(order => (
                <div key={order.orderId} className="bg-white p-4 md:p-6 mb-6 rounded-lg shadow">
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl font-semibold">Order ID: {order.orderId}</h2>
                        <div className="text-sm text-gray-600">Ordered on: {new Date(order.orderDate).toLocaleDateString()}</div>
                    </div>

                    {order.items.map(item => (
                        <div key={item.id} className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4">
                            <div className="flex items-center space-x-4 mb-2 md:mb-0">
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} className="w-16 h-16 object-cover" />
                                <div className="flex-1 min-w-0">
                                    <div className="text-md md:text-lg font-bold truncate">{item.volumeInfo.title}</div>
                                    <div className="text-xs md:text-sm text-gray-600">By {item.volumeInfo.authors.join(", ")}</div>
                                </div>
                            </div>
                            <div className="text-md md:text-lg">Quantity: {item.quantity}</div>
                            <div className="text-md md:text-lg font-bold">{item.saleInfo.retailPrice.amount} {item.saleInfo.retailPrice.currencyCode}</div>
                        </div>
                    ))}

                    <div className="text-right">
                        <div className="text-xl font-bold">Total: {order.totalCost.toFixed(2)} {order.items[0]?.saleInfo.retailPrice.currencyCode}</div>
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className="min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-6">My Orders</h1>
                {renderOrders()}
            </div>
        </div>
    );
};

export default MyOrders;
