export const resetCatalogCard = (product) => {
    let currentColor;
    product.productModifications_01.forEach(element => {
        if (element.mdfCurrent) currentColor = element.mdf;
    })

    const resetUrl_1 = product.productUrl_1.replace(/__(.*?)__/g, `__${currentColor}__`);
    let resetUrl_2 = null;
    if (product.productUrl_2 !== null) {
        resetUrl_2 = product.productUrl_2.replace(/__(.*?)__/g, `__${currentColor}__`);
    }

    let currentPrice;
    product.productModifications_02.forEach(element => {
        if (element.mdfCurrent) currentPrice = element.mdfPrice;
    })

    return [currentColor, currentPrice, resetUrl_1, resetUrl_2];
}