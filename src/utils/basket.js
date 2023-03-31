export const getTotalPrice = (basket) => {
    let totalPrice = 0;
    basket.forEach(item => {
        if (item.promotionalPrice) {
            totalPrice += Number(item.promotionalPrice) * item.count;
        } else totalPrice += Number(item.price) * item.count;
    });
    return (Number(totalPrice)).toLocaleString('ru')
}

export const getFullProductPrice = (item) => {
    if (item.promotionalPrice) {
        const totalPrice = Number(item.promotionalPrice) * item.count;
        return (Number(totalPrice)).toLocaleString('ru')
    }
    const totalPrice = Number(item.price) * item.count;
    return (Number(totalPrice)).toLocaleString('ru')
}

export const getTotalDiscountPrice = (basket, discount) => {
    const totalPrice = getTotalPrice(basket);
    const totalPriceFormat = Number(totalPrice.replace(/\s/g, ''));
    const result = totalPriceFormat * ( 1 - (discount / 100));
    return (Number(result)).toLocaleString('ru')
}

export const getTotalLength = (basket) => {
    let totalLength = 0;
    basket.forEach(item => {
        totalLength += 1 * item.count
    });
    return totalLength;
}

export const generateOrderHash = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let hash = '#';
    for (let i = 0; i < 8; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
}

export const getFullDate = () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    return formattedDate;
}

export const getStatus = (dateString) => {
    const parts = dateString.split('.');
    const dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    const today = new Date();
    const date = new Date(dateObject);

    // Отсекаем время и оставляем только дату
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 3) {
        return 'Новый';
    } else if (diffDays < 10) {
        return 'Недавний';
    } else if (diffDays < 30) {
        return 'Старый';
    } else if (diffDays < 90) {
        return 'Очень старый';
    } else {
        return 'Архивный';
    }
}