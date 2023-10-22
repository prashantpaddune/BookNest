import BookItem from "@/components/Homepage/BookItems";
import Pagination from "@/common/Pagination";
import Filters from "../../common/Filters";
import { sortOptions } from "@/constants/filters";
import { useRouter } from "next/router";
import useGetCurretedResults from "@/hooks/useGetCurretedResults";

interface Book {
    id: number;
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

interface HomeProps {
    books: Book[];
    totalPages: number;
    page: string;
    genres: any[];
}

function Home({ books = [], totalPages, page, genres }: HomeProps) {
    const { query = '' } = useRouter();
    const { genre: defaultGenre = '', sortBy = '', page: pageNo = '' } = query;

    const {
        handlePageChange = () => {},
        applyFilters = () => {},
    } = useGetCurretedResults();

    const renderData = () => {
        if (books.length === 0) {
            return (
                <div className="text-center py-8">
                    <p className="text-xl font-bold">No data</p>
                    <p className="text-gray-500">No books available.</p>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            <div className="container overflow-hidden space-y-8">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="container mx-auto space-y-6">
                        <Filters options={sortOptions} name="sortBy" value={sortBy} onChange={applyFilters}/>
                        <Filters options={genres} name="genre" value={defaultGenre} onChange={applyFilters}/>
                        {renderData()}
                        <Pagination
                            totalPages={totalPages}
                            currentPage={parseInt(page, 10)}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;