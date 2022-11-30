import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeState from './modules/changeState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
  let state = {};
  changeState(state);

  modals();
  tabs();
  forms(state);
  timer('.container1', '2023-03-22T00:00');
  images();
});
