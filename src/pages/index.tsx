import axios from "axios";
import { GetServerSideProps } from 'next';
export { default } from '@/components/Homepage';

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { data } = await axios.get('https://d1krvzwx5oquy1.cloudfront.net/books.json');
        return { props: { books: data } };
    } catch (error) {
        console.error(error);
        return { props: { books: [] } };
    }
};