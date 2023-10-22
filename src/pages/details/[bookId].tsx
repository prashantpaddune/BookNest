import axios from "axios";
import { GetServerSideProps } from "next";

export { default } from '@/components/BookDetails';
export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!context.params) {
        return {
            notFound: true
        };
    }

    const bookId = context.params.bookId || '';

    let originalBooks = [];

    try {
        const { data } = await axios.get('https://d1krvzwx5oquy1.cloudfront.net/books.json');
        originalBooks = data;
    } catch (error) {
        console.error(error);
        originalBooks = [];
    }

    const bookDetails = originalBooks.find((book: any) => book.id == bookId);

    const booksWithSameCategory = originalBooks.filter((book: any) => book.volumeInfo.categories
        && book.volumeInfo.categories.some((category: any) => bookDetails.volumeInfo.categories.includes(category) && book.id !== bookDetails.id));

    return {
        props: {
            book: bookDetails,
            booksWithSameCategory
        }
    };
}