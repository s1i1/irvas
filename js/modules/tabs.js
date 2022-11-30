const tabs = () => {
    function bindTab(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });

            tab.forEach(item => {
                item.children[1] ? item.children[1].classList.remove(activeClass) :
                    item.classList.remove(activeClass);
            });
        }
        function showContent(i = 0) {
            content[i].style.display = display;

            tab[i].children[1] ? tab[i].children[1].classList.add(activeClass) :
                tab[i].classList.add(activeClass);
        }

        hideContent();
        showContent();

        header.addEventListener('click', (e) => {
            let target = e.target;

            if (target && target.parentNode.classList.contains(tabSelector.replace('.', ''))) {
                tab.forEach((item, index) => {
                    if (item == target.parentNode) {
                        hideContent();
                        showContent(index);
                    }
                });
            }
        });
    }

    bindTab('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    bindTab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    bindTab('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
};

export default tabs;