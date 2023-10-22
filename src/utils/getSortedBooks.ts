interface VolumeInfo {
    categories?: string | string[];
    averageRating?: number;
    publishedDate?: string;
}

interface ListPrice {
    amount?: number;
}

interface SaleInfo {
    listPrice?: ListPrice;
}

interface Book {
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
}

const getSortedBooks = (
    genre: string | string[] | null,
    filteredBooks: Book[],
    sortBy: string | string[] | null,
): Book[] => {
    if (genre && typeof genre === 'string') {
        filteredBooks = filteredBooks.filter(book =>
            book.volumeInfo.categories && book.volumeInfo.categories.includes(genre)
        );
    }

    if (sortBy) {
        if (sortBy === 'inStock') {
            filteredBooks = filteredBooks.filter(book => book.saleInfo && book.saleInfo.listPrice);
        } else {
            filteredBooks = filteredBooks.sort((a, b) => {
                const aRating = a.volumeInfo.averageRating || 0;
                const bRating = b.volumeInfo.averageRating || 0;

                const aPrice = a.saleInfo.listPrice?.amount || Infinity;
                const bPrice = b.saleInfo.listPrice?.amount || Infinity;


                const aPriced = a.saleInfo.listPrice?.amount || 0;
                const bPriced = b.saleInfo.listPrice?.amount || 0;

                const aDate = new Date(a.volumeInfo.publishedDate || '1970-01-01');
                const bDate = new Date(b.volumeInfo.publishedDate || '1970-01-01');

                if (sortBy === 'default') {
                    return aPriced - bPriced;
                }

                if (sortBy === 'highestRating') {
                    return bRating - aRating;
                }

                if (sortBy === 'lowestRating') {
                    return aRating - bRating;
                }

                if (sortBy === 'lowestPrice') {
                    return aPrice - bPrice;
                }

                if (sortBy === 'highestPrice') {
                    return bPriced - aPriced;
                }

                if (sortBy === 'publishDate') {
                    return bDate.getTime() - aDate.getTime();
                }

                return 0;
            });
        }
    }

    return filteredBooks;
}

export default getSortedBooks;
