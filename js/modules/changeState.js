const changeState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    const bindValue = (element, event, stateKey, setValue) => {
        element.forEach((item, index) => {
            item.addEventListener(event, (e) => {
                switch (setValue) {
                    case 'index':
                        state[stateKey] = index;
                        break;
                    case 'value':
                        state[stateKey] = item.value;
                        break;
                    case 'checked':
                        index === 0 ? state[stateKey] = 'Cold' : state[stateKey] = 'Warm';

                        element.forEach((box, j) => {
                            box.checked = false;

                            if (index === j) {
                                box.checked = true;
                            }
                        });
                        break;
                }
            });
        });
    };

    bindValue(windowForm, 'click', 'window_form', 'index');
    bindValue(windowWidth, 'input', 'window_width', 'value');
    bindValue(windowHeight, 'input', 'window_height', 'value');
    bindValue(windowType, 'change', 'window_type', 'value');
    bindValue(windowProfile, 'change', 'window_profile', 'checked');
};

export default changeState;