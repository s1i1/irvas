const images = () => {
    const works = document.querySelector('.works');

    const divContainer = document.createElement('div');
    divContainer.classList.add('popup');
    divContainer.style.display = 'none';
    works.appendChild(divContainer);

    const img = document.createElement('img');
    divContainer.appendChild(img);

    works.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();

            if (e.target.classList.contains('preview')) {
                let path = e.target.parentNode.getAttribute('href');

                divContainer.style.display = 'flex';
                divContainer.style.justifyContent = 'center';
                divContainer.style.alignItems = 'center';

                img.setAttribute('src', path);
            }
            if (e.target.classList.contains('popup')) {
                divContainer.style.display = 'none';
            }
        }
    });
};

export default images;