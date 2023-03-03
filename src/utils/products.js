export const resetCatalogCard = (product) => {
    let currentColor;
    product.productModifications_01.forEach(element => {
        if (element.mdfCurrent) currentColor = element.mdf;
    })

    const resetUrl_1 = product.productUrl_1 ? product.productUrl_1.replace(/__(.*?)__/g, `__${currentColor}__`) : null;
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

export const setDataImgProduct = (item) => {
    const dataImg = {
        productUrl_1: null,
        productUrl_2: null,
        mdfUrl: [],
    }
    const normalUrl = item.urls.normal;
    const miniUrl = item.urls.mini;

    if (normalUrl.length > 1) {
        if (normalUrl.length === 2) {
            if (normalUrl.find(element => element.urlName.endsWith("02"))) {
                if (miniUrl.length) {
                    const mdf = normalUrl[0].urlName.split("__")[1];
                    const url_mini = miniUrl.find(element => element.urlName.split("__")[1] === mdf).url;

                    dataImg.mdfUrl.push({
                        mdf,
                        url_1: normalUrl.filter(img => img.urlName.endsWith("01"))[0].url,
                        url_2: normalUrl.filter(img => img.urlName.endsWith("02"))[0].url,
                        url_mini
                    })
                } else {
                    dataImg.productUrl_1 = normalUrl.filter(img => img.urlName.endsWith("01"))[0].url;
                    dataImg.productUrl_2 = normalUrl.filter(img => img.urlName.endsWith("02"))[0].url;
                }
            } else {
                normalUrl.forEach(img => {
                    const mdf = img.urlName.split("__")[1];
                    const url_mini = miniUrl.find(element => element.urlName.split("__")[1] === mdf).url;

                    dataImg.mdfUrl.push({
                        mdf,
                        url_1: img.url,
                        url_2: null,
                        url_mini
                    })
                })
            }
        } else {
            normalUrl.forEach(img => {
                if (img.urlName.endsWith('01')) {
                    const url_2 = normalUrl.find(element => element.urlName === img.urlName.slice(0, -1) + "2");
                    const mdf = img.urlName.split("__")[1];
                    const url_mini = miniUrl.find(element => element.urlName.split("__")[1] === mdf).url;

                    dataImg.mdfUrl.push({
                        mdf,
                        url_1: img.url,
                        url_2: url_2 ? url_2.url : null,
                        url_mini
                    })
                }

            })
        }
    } else dataImg.productUrl_1 = normalUrl[0].url

    return dataImg;
}