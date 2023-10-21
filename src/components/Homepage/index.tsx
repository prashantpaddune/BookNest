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

    return (
        <main className={`flex min-h-screen flex-col p-10`}>
            <div className="container mx-auto p-4 space-y-6">
                <h1 className="text-4xl font-semibold text-gray-800 mb-4">Book Nest</h1>
                <Filters options={sortOptions} name="sortBy" value={sortBy} onChange={applyFilters}/>
                <Filters options={genres} name="genre" value={defaultGenre} onChange={applyFilters}/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </div>
                <Pagination
                    totalPages={totalPages}
                    currentPage={parseInt(page, 10)}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    )
}

export default Home;