import CartIcon from "./Cart";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/')
    }
    return (
        <main className={`flex min-h-screen mb-10 flex-col`}>
            <CartIcon />
            <div className="container mx-auto p-5 space-y-6">
                <h1 onClick={handleClick} className="text-4xl font-semibold text-gray-800 mb-4 cursor-pointer">Book Nest</h1>
                {children}
            </div>
        </main>
    );
};

export default Layout;