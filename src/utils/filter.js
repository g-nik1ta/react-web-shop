export const getPriceBorder = (catalog) => {
    const prices = [
        ...catalog.flatMap((product) => product.productModifications_02.map((mdf) => mdf.mdfPrice))
    ]
    return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices) };
}