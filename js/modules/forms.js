import numbersOnly from "./numbersOnly";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    numbersOnly('input[name="user_phone"]');

    const messages = {
        'loading': 'Идет отправка',
        'success': 'Отправлено',
        'error': 'Ошибка',
    };

    const sendForm = async (url, formData) => {
        const request = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        return await request.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = messages.loading;
            item.appendChild(statusMessage);

            sendForm('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    statusMessage.textContent = messages.success;
                })
                .catch(() => statusMessage.textContent = messages.error)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
        });
    });

};

export default forms;