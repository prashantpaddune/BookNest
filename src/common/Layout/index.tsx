import CartIcon from "./Cart";

const Layout = ({ children }) => {
    return (
        <main className={`flex min-h-screen mb-10 flex-col`}>
            <CartIcon />
            <div className="container mx-auto p-5 space-y-6">
                <h1 className="text-4xl font-semibold text-gray-800 mb-4">Book Nest</h1>
                {children}
            </div>
        </main>
    );
};

export default Layout;