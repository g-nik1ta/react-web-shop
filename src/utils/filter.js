export const getPriceBorder = (catalog) => {
    const prices = [
        ...catalog.flatMap((product) => {
            if (product.productModifications_02.length) {
                return product.productModifications_02.map((mdf) => mdf.mdfPrice)
            } else return product.promotionalPrice
        })
    ]
    const newPrices = prices.filter(element => element !== null);
    return { minPrice: Math.min(...newPrices), maxPrice: Math.max(...newPrices) };
}

export const getChangeFilter = (e, selectedValues, filter = false) => {
    let manufacturerName = e.currentTarget.dataset.manufacturer;
    if (filter) {
        const input = document.querySelector(`input[data-manufacturer="${manufacturerName}"]`);
        input.checked = false;
    }

    if (selectedValues.includes(manufacturerName)) {
        return selectedValues.filter(value => value !== manufacturerName)
    } else {
        return [...selectedValues, manufacturerName.toLowerCase()]
    }
}

export const resetAllFilter = (setSelectedPriceFilter, setFilterManufacturer, priceBorder, setFilterPrice) => {
    setSelectedPriceFilter(false);
    setFilterPrice({ minValue: priceBorder.minPrice, maxValue: priceBorder.maxPrice });
    setFilterManufacturer([]);
    const inputs = document.querySelectorAll('input[data-manufacturer]');
        inputs.forEach(input => {
            input.checked = false
        });
}

export const getCountsManufacturerList = (manufacturerList) => {
    const countsManufacturer = manufacturerList.reduce((count, manufacturer) => {
        count[manufacturer.toLowerCase()] = (count[manufacturer.toLowerCase()] || 0) + 1;
        return count;
    }, {})

    return Object.keys(countsManufacturer).map((manufacturer) => ({
        title: manufacturer,
        count: countsManufacturer[manufacturer],
    }));
}