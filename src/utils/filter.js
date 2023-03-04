export const getPriceBorder = (catalog) => {
    const prices = [
        ...catalog.flatMap((product) => {
            if (product.productModifications_02.length) {
                return product.productModifications_02.map((mdf) => mdf.mdfPrice)
            } else return product.promotionalPrice
        })
    ]
    const newPrices = prices.filter(element => element !== null);
    if (!newPrices.length) {
        newPrices.push(0);
        newPrices.push(9999999);
    }
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

export const resetAllFilter = (setFilterManufacturer, priceBorder, setFilterPrice) => {
    setFilterPrice({ minValue: priceBorder.minPrice, maxValue: priceBorder.maxPrice });
    setFilterManufacturer([]);
    const inputs = document.querySelectorAll('input[data-manufacturer]');
    inputs.forEach(input => {
        input.checked = false
    });
}

export const getCountsManufacturerList = (manufacturerList, fullManufacturerList) => {
    function getReduce(arrayList) {
        return arrayList.reduce((count, item) => {
            count[item.toLowerCase()] = (count[item.toLowerCase()] || 0) + 1;
            return count;
        }, {})
    }
    function getObjectMap(arrayList) {
        return Object.keys(arrayList).map((item) => ({
            title: item,
            count: arrayList[item],
        }));
    }

    const countsManufacturer = getReduce(manufacturerList);
    const newManufacturerList = getObjectMap(countsManufacturer);

    const countsFullManufacturer = getReduce(fullManufacturerList);
    const newFullManufacturerList = getObjectMap(countsFullManufacturer);

    const result = newFullManufacturerList.map((item) => {
        const foundItem = newManufacturerList.find((el) => el.title === item.title);
        if (!foundItem) {
            return { title: item.title, count: 0 };
        }
        return { title: item.title, count: foundItem.count };
    });

    return result;
}