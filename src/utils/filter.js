export const getPriceBorder = (catalog) => {
    const prices = [
        ...catalog.flatMap((product) => product.productModifications_02.map((mdf) => mdf.mdfPrice))
    ]
    return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices) };
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

export const resetAllFilter = (setSelectedPriceFilter, setFilterManufacturer) => {
    setSelectedPriceFilter(false);
    setFilterManufacturer([]);
    const inputs = document.querySelectorAll('input[data-manufacturer]');
        inputs.forEach(input => {
            input.checked = false
        });
}

export const getCountsManufacturerList = (manufacturerList) => {
    const countsManufacturer = manufacturerList.reduce((count, manufacturer) => {
        count[manufacturer] = (count[manufacturer] || 0) + 1;
        return count;
    }, {})

    return Object.keys(countsManufacturer).map((manufacturer) => ({
        title: manufacturer,
        count: countsManufacturer[manufacturer],
    }));
}