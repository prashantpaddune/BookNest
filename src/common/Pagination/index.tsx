
type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center space-x-2 my-4">
            <button
                className={`p-2 border rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                « Prev
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    className={`p-2 border rounded ${currentPage === page ? 'bg-indigo-600 text-white' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`p-2 border rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next »
            </button>
        </div>
    );
}

export default Pagination;
