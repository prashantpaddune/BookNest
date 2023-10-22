
const useGetCurretedResults = () => {

    const getCurrentFilters = ()  => {
        const currentURL = new URL(window.location.href);
        const params = new URLSearchParams(currentURL.search);

        return {
            page: params.get('page') || '1',
            genre: params.get('genre') || '',
            language: params.get('language') || '',
            sortBy: params.get('sortBy') || ''
        };
    }

    const constructURL = (filters: any) => {
        const params = new URLSearchParams();

        if (filters.page) params.set('page', filters.page);
        if (filters.genre) params.set('genre', filters.genre);
        if (filters.sortBy) params.set('sortBy', filters.sortBy);

        return `/?${params.toString()}`;
    }

    const applyFilters = () =>  {

        const genreElement = document.getElementById('genre') as HTMLInputElement;
        const sortByElement = document.getElementById('sortBy') as HTMLInputElement;


        const genre = genreElement ? genreElement.value : '';
        const sortBy = sortByElement ? sortByElement.value : '';

        const currentFilters = getCurrentFilters();

        if (genre) currentFilters.genre = genre;
        if (sortBy) currentFilters.sortBy = sortBy;
        currentFilters.page = '1';

        const newUrl = constructURL(currentFilters);
        window.location.href = newUrl;
    }

    const handlePageChange = (newPage: number) => {
        const currentFilters = getCurrentFilters();

        currentFilters.page = newPage.toString();
        const newUrl = constructURL(currentFilters);

        window.location.href = newUrl;
    };

    return {
        getCurrentFilters,
        constructURL,
        applyFilters,
        handlePageChange
    }

}

export default useGetCurretedResults