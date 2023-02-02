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