interface Book {
    volumeInfo: {
        categories?: string | string[];
    };
}

interface Genre {
    value: string;
    label: string;
    count: number;
}

const getGenre = (orginalBooks: Book[]): Genre[] =>
    orginalBooks.reduce((acc: Genre[], book: Book) => {
        if (book.volumeInfo.categories) {
            for (let i = 0; i < book.volumeInfo.categories.length; i++) {
                const category = book.volumeInfo.categories[i];

                const existingCategory = acc.find(item => item.value === category);
                if (existingCategory) {
                    existingCategory.count++;
                } else {
                    acc.push({
                        value: category,
                        label: category,
                        count: 1
                    });
                }
            }
        }
        return acc;
    }, []);


export default getGenre;
