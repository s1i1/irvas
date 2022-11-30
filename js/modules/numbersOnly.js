const numbersOnly = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default numbersOnly;