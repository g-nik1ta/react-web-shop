export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    let result = [];
	for(let i = 0; i < totalPages; i++) {
		result.push(i + 1);
	}
    return result;
}

export const getProductsPage = (sortedAndFiltredProducts, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return sortedAndFiltredProducts.slice(startIndex, endIndex);
}