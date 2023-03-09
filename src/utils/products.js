export const resetCatalogCard = (product) => {
    const mdf_01 = product.productModifications_01;
    const mdf_02 = product.productModifications_02;
    const currentMdf_01 = mdf_01 ? mdf_01.find(element => element.mdfCurrent) : null;
    const currentMdf_02 = mdf_02 ? mdf_02.find(element => element.mdfCurrent) : null;

    const resetUrl_1 = mdf_01.length
        ?
        currentMdf_01.url_1
            ?
            currentMdf_01.url_1
            :
            product.productUrl_1
        :
        product.productUrl_1;

    const resetUrl_2 = mdf_01.length
        ?
        currentMdf_01.url_2
            ?
            currentMdf_01.url_2
            :
            product.productUrl_2
        :
        product.productUrl_2;

    const currentPrice = mdf_02.length ? currentMdf_02.mdfPrice : product.price;
    const currentPromotionalPrice = product.promotionalPrice
        ?
        mdf_02.length
            ?
            currentMdf_02.promotionalMdfPrice
            :
            product.promotionalPrice
        :
        null

    return [currentPrice, currentPromotionalPrice, resetUrl_1, resetUrl_2];
}