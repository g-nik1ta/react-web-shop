import { useMemo } from "react";

export const useSortedProducts = (products, sort) => {
    const sortedProducts = useMemo(() => {
        if (sort) {
            return [...products].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return products;
    }, [sort, products])

    return sortedProducts;
}

export const useProducts = (products, sort, filterPrice) => {
    const sortedProducts = useSortedProducts(products, sort);

    const sortedAndFiltredProducts = useMemo(() => {
        return sortedProducts.filter(product =>
            product.productModifications_02.some(mdf =>
                mdf.mdfPrice >= filterPrice.minValue && mdf.mdfPrice <= filterPrice.maxValue
            )
        )
    }, [filterPrice, sortedProducts]);

    return sortedAndFiltredProducts;
}