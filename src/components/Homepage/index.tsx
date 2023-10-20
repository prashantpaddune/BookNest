import BookItem from "@/components/Homepage/BookItems";

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
}

function Home({ books = [] }: HomeProps) {
    console.log(books);
    return (
        <main className={`flex min-h-screen flex-col p-10`}>
            <div className="container mx-auto p-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Home;