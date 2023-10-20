const renderStars = (rating: number) => {
    const fullStars = Array(Math.floor(rating)).fill("★");
    const halfStar = (rating % 1) !== 0 ? ["★"] : [];
    const emptyStars = Array(5 - fullStars.length - halfStar.length).fill("☆");
    return [...fullStars, ...halfStar, ...emptyStars].join('');
};

export default renderStars;