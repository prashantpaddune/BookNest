import useGetCheckout from "@/hooks/useGetCheckout";

function CheckoutPage() {
    const { handleSubmit, onSubmit, errors, register, requiredValidation} = useGetCheckout();

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Address:</label>
                    <textarea {...register('address', requiredValidation)} className="w-full p-2 border rounded-md"></textarea>
                    {errors.address && <p className="text-red-500">Address is required</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Card Name:</label>
                    <input {...register('cardName', requiredValidation)} type="text" className="w-full p-2 border rounded-md" />
                    {errors.cardName && <p className="text-red-500">Card name is required</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Card Number:</label>
                    <input {...register('cardNumber', requiredValidation)} type="number" className="w-full p-2 border rounded-md" />
                    {errors.cardNumber && <p className="text-red-500">Card number is required</p>}
                </div>
                <div className="flex space-x-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Expiry Date:</label>
                        <input {...register('cardExpiry', requiredValidation)} type="text" placeholder="MM/YY" className="w-full p-2 border rounded-md" />
                        {errors.cardExpiry && <p className="text-red-500">Expiry date is required</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">CVV:</label>
                        <input {...register('cardCVV', requiredValidation)} type="number" className="w-full p-2 border rounded-md" />
                        {errors.cardCVV && <p className="text-red-500">CVV is required</p>}
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-medium transition mt-4">
                    Pay
                </button>
            </form>
        </div>
    );
}

export default CheckoutPage;
