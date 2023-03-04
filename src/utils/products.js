export const resetCatalogCard = (product) => {
    const mdf_01 = product.productModifications_01;
    const mdf_02 = product.productModifications_02;
    const mdf_01Current = mdf_01.find(element => element.mdfCurrent);

    const resetUrl_1 = mdf_01.length && mdf_01Current.url_1 ? mdf_01Current.url_1 : product.productUrl_1;
    const resetUrl_2 = mdf_01.length && mdf_01Current.url_2 ? mdf_01Current.url_2 : product.productUrl_2;
    const currentPrice = mdf_02.length ? mdf_02.find(element => element.mdfCurrent).mdfPrice : product.price;

    return [!!mdf_01Current, currentPrice, resetUrl_1, resetUrl_2];
}