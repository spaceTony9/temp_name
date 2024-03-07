import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function notificationError() {
  return iziToast.show({
    message: 'We were not able to fetch your data. Try again!',
    iconUrl: './img/error-icon.png',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'topRight',
  });
}
