import renderStars from "@/utils/renderStars";

const BookDetails = ({ book }) => {
    const { volumeInfo, saleInfo, accessInfo } = book;

    return (
        <div className="bg-gray-100 p-10 min-h-screen">
            <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6 space-y-8">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div
                        className="flex-none w-1/3 mr-6 bg-gray-200"
                        style={{
                            height: '50vh',
                            backgroundImage: `url(${volumeInfo.imageLinks.thumbnail})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                    </div>
                    <div className="flex-1 space-y-6">
                        <h1 className="text-3xl font-bold">{volumeInfo.title}</h1>
                        <h2 className="text-xl text-gray-700">By {volumeInfo.authors.join(", ")}</h2>
                        {volumeInfo.averageRating && (
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-lg font-bold">Rating:</span>
                                <span className="text-yellow-400 text-xl">{renderStars(volumeInfo.averageRating)}</span>
                            </div>
                        )}

                        <div
                            className="relative w-2/3 overflow-hidden"
                            style={{ maxHeight: '200px' }}>

                            <p className="description-text">
                                {volumeInfo.description}
                            </p>

                            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
                        </div>

                        {saleInfo.retailPrice?.amount ? (
                            <>
                                <div className="text-2xl font-bold mb-2">
                                    {saleInfo.retailPrice.amount} {saleInfo.retailPrice.currencyCode}
                                </div>

                                <div className="flex items-center space-x-4">
                                    <label htmlFor="quantity" className="text-lg">Qty:</label>
                                    <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" className="p-2 border rounded-md w-20 text-center" />
                                </div>

                                <div className="mt-2">
                                    <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-2xl text-red-500 font-bold mt-2">Out of Stock</div>
                        )}

                        <div className="flex-grow"></div>
                    </div>
                </div>

                <div className="mt-10 space-y-4">
                    <h2 className="text-2xl font-bold border-b pb-2">Additional Details</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <li><strong>Publisher:</strong> {volumeInfo.publisher}</li>
                        <li><strong>Published Date:</strong> {volumeInfo.publishedDate}</li>
                        <li><strong>Language:</strong> {volumeInfo.language}</li>
                        <li><strong>Category:</strong> {volumeInfo.categories.join(", ")}</li>
                        <li><strong>Pages:</strong> {volumeInfo.pageCount}</li>
                        <li><strong>Viewability:</strong> {accessInfo.viewability}</li>
                        <li><strong>Is eBook:</strong> {saleInfo.isEbook ? "Yes" : "No"}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
