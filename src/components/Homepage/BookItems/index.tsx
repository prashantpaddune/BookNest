import Image from "next/image";
import renderStars from "@/utils/renderStars";
import Link from "next/link";

interface Book {
    id: string | undefined;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        averageRating?: number;
        imageLinks?: {
            thumbnail?: string;
        };
    };
    saleInfo: {
        listPrice?: {
            amount: number;
            currencyCode: string;
        };
        buyLink?: string;
    };
}

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const { volumeInfo, saleInfo } = book || {};
    const { title, authors, description, averageRating, imageLinks } = volumeInfo || {};
    const { thumbnail } = imageLinks || {};
    const { listPrice, buyLink } = saleInfo || {};
    const { amount, currencyCode } = listPrice || {};

    return (
        <Link href={`/details/${book.id}`} className="bg-white p-4 border rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl relative">
            {thumbnail && (
                <Image
                    width={50}
                    height={50}
                    src={thumbnail}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
            )}

            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

                {authors && (
                    <p className="text-sm text-gray-600 italic">by {authors.join(', ')}</p>
                )}

                <p className="text-sm text-gray-500 overflow-ellipsis overflow-hidden h-20">
                    {description}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                        {averageRating && (
                            <span className="text-yellow-400 text-xl">{renderStars(averageRating)}</span>
                        )}
                        {listPrice ? (
                            <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
                                {amount} {currencyCode}
                            </div>
                        ) : (
                            <div className="text-red-600 font-semibold">Out of Stock</div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookItem;
