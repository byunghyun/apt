import { toast } from 'react-toastify';

class AlertToastSingleton {
  private static instance: AlertToastSingleton;
  private closeTime = 3000;
  public static getInstance() {
    if (!AlertToastSingleton.instance) {
      AlertToastSingleton.instance = new AlertToastSingleton();
    }
    return AlertToastSingleton.instance;
  }

  public success(message: string) {
    toast.success(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  public info(message: string) {
    toast.info(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  public warn(message: string) {
    toast.warn(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  public error(message: string) {
    toast.error(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}

export const toastify = AlertToastSingleton.getInstance();

export default AlertToastSingleton;
