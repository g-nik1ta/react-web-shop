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

export const useProducts = (products, filterPrice, filterManufacturer, sort) => {
    const sortedProducts = useSortedProducts(products, sort);

    const sortedAndFiltredProducts = useMemo(() => {
        return sortedProducts.filter(product => {
            let hasPrice;
            if (product.productModifications_02.length) {
                hasPrice = product.productModifications_02.some(mdf =>
                    mdf.mdfPrice >= filterPrice.minValue && mdf.mdfPrice <= filterPrice.maxValue
                );
            } else hasPrice = true;

            let hasManufacter;
            if (filterManufacturer.length) {
                hasManufacter = filterManufacturer.includes(product.manufacturer.toLowerCase());
            } else hasManufacter = true;

            return hasPrice && hasManufacter;
        })
    }, [filterPrice, filterManufacturer, sortedProducts]);

    return sortedAndFiltredProducts;
}