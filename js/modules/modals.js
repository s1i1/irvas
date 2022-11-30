import numbersOnly from './numbersOnly';

const modals = () => {
  let allModals = [];

  function bindModal(triggerSelector, modalSelector, cancelSelector, closeOverModal = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      cancel = document.querySelector(cancelSelector);

    numbersOnly('#width');
    numbersOnly('#height');

    allModals.push(modal);

    const closeAllModals = () => {
      allModals.forEach((item) => {
        item.style.display = 'none';
      });
    };

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        closeAllModals();

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    cancel.addEventListener('click', () => {
      closeAllModals();

      modal.style.display = 'none';
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target == modal && closeOverModal) {
        closeAllModals();

        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  function showModalByTime(selector, time) {
    let modal = document.querySelector(selector);

    setTimeout(() => {
      modal.style.display = 'block';
      document.body.style.overflow = '';
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  showModalByTime('.popup', 3000);
};

export default modals;
