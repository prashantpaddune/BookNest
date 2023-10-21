import axios from "axios";
import { GetServerSideProps } from 'next';
import getSortedBooks from "@/utils/getSortedBooks";
import getGenre from "@/utils/getGenre";
export { default } from '@/components/Homepage';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { page = 1, genre = "", sortBy = "" } = context.query;
    const newPage = Number(page || 1);

    const BOOKS_PER_PAGE = 9;
    let filteredBooks = [];
    let orginalBooks = [];

    try {
        const { data } = await axios.get('https://d1krvzwx5oquy1.cloudfront.net/books.json');
        filteredBooks = data;
        orginalBooks = data;
    } catch (error) {
        console.error(error);
        filteredBooks = [];
    }

    const sortedBooks = getSortedBooks(genre, filteredBooks, sortBy);
    const genres = getGenre(orginalBooks);

    const start = (newPage - 1) * BOOKS_PER_PAGE;
    const end = start + BOOKS_PER_PAGE;
    const books = sortedBooks.slice(start, end);

    console.log(filteredBooks.length, "books");

    return {
        props: {
            books,
            genres,
            totalPages: Math.ceil(sortedBooks.length / BOOKS_PER_PAGE),
            page: newPage
        }
    };
};