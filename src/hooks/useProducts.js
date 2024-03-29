import { useMemo } from "react";

export const useSortedProducts = (products, sort, currentCategory) => {
    const sortedProducts = useMemo(() => {
        switch (sort) {
            case 'cheapToExpansive':
                return [...products].sort((a, b) => {
                    if (a.productModifications_02.length !== 0 && b.productModifications_02.length !== 0) {
                        return (a.productModifications_02.find(e => e.mdfCurrent)).mdfPrice -
                            (b.productModifications_02.find(e => e.mdfCurrent)).mdfPrice
                    }
                    return a.price - b.price
                })
            case 'expansiveToCheap':
                return [...products].sort((a, b) => {
                    if (b.productModifications_02.length !== 0 && a.productModifications_02.length !== 0) {
                        return (b.productModifications_02.find(e => e.mdfCurrent)).mdfPrice -
                            (a.productModifications_02.find(e => e.mdfCurrent)).mdfPrice
                    }
                    return b.price - a.price
                })
            case 'novelties':
                return [...products].sort((a, b) => {
                    const dateA = new Date(a.date.split('.').reverse().join("-"));
                    const dateB = new Date(b.date.split('.').reverse().join("-"));
                    return dateB - dateA;
                })
            case 'popular':
                return [...products].sort((a, b) => b.popular - a.popular);
            case 'promotional':
                return [...products].filter(product => product.promotionalPrice !== null);
            default:
                console.log("Нет подходящей сортировки!")
        }
        return products;
    }, [sort, products, currentCategory])
    if (currentCategory) {
        if (currentCategory.urlParam === 'novelties') {
            const today = new Date();
            const maxDate  = new Date(today.getTime() - (42 * 24 * 60 * 60 * 1000)); //сутки * часы * минуты * секунды * миллисекунды
            const filteredArray = sortedProducts.filter(item => {
                const itemDate = new Date(item.date.split('.').reverse().join('-'));
                return itemDate >= maxDate && itemDate <= today;
            });
            return filteredArray;
        }
        return sortedProducts.filter(item => item.category === currentCategory.urlParam);
    }
    return sortedProducts;
}

export const useProducts = (products, filterPrice, filterManufacturer, sort, currentCategory = false, isManufacturerList = false) => {
    const sortedProducts = useSortedProducts(products, sort, currentCategory);

    const sortedAndFiltredProducts = useMemo(() => {
        return sortedProducts.filter(product => {
            let hasPrice;
            if (product.productModifications_02.length) {
                hasPrice = product.productModifications_02.find(mdf =>
                    product.promotionalPrice
                        ?
                        (mdf.promotionalMdfPrice >= filterPrice.minValue && mdf.promotionalMdfPrice <= filterPrice.maxValue)
                        :
                        (mdf.mdfPrice >= filterPrice.minValue && mdf.mdfPrice <= filterPrice.maxValue)
                );
            } else {
                product.promotionalPrice
                    ?
                    hasPrice = (product.promotionalPrice >= filterPrice.minValue && product.promotionalPrice <= filterPrice.maxValue)
                    :
                    hasPrice = (product.price >= filterPrice.minValue && product.price <= filterPrice.maxValue)
            }
            if (isManufacturerList) {
                return hasPrice
            } else {
                let hasManufacter;
                if (filterManufacturer.length) {
                    hasManufacter = filterManufacturer.includes(product.manufacturer.toLowerCase());
                } else hasManufacter = true;
                return hasPrice && hasManufacter;
            }
        })
    }, [filterPrice, filterManufacturer, sortedProducts]);

    return sortedAndFiltredProducts;
}