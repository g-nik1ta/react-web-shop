export function toggleClass(e) {
    const parentEl = e.target.closest('.modifications-choose-line');

    parentEl.childNodes.forEach(element => {
        element.classList.remove('product-mdf-item-current');
    });

    if (e.target.classList.contains('product-mdf-img')) {
        e.target.parentElement.classList.toggle('product-mdf-item-current');
    } else
        e.target.classList.toggle("product-mdf-item-current");
}

export const hiddenFields = (e, visibleBlockRef) => {
    e.target.classList.toggle("up");
    e.target.classList.toggle("down");
    visibleBlockRef.current.classList.toggle("hidden");
}

export const openSidebar = (window) => {
    document.querySelector(window).classList.add('open');
}

export const closeSidebar = (window) => {
    document.querySelector(window).classList.remove('open');
}

export const toggleSidebar = (window) => {
    document.querySelector(window).classList.toggle('open');
}