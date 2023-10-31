import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

const useSuccessMessage = () => {
  const { t } = useTranslation();
  return {
    showSuccessMessage: () => {
      Swal.fire({
        icon: 'success',
        title: t('swal.success_message.title'),
        text: t('swal.success_message.text'),
      });
    },
  };
};

const useContactMessage = () => {
  const { t } = useTranslation();
  return {
    showContactMessage: () => {
      Swal.fire({
        icon: 'success',
        title: t('swal.contact_message.title'),
        text: t('swal.contact_message.text'),
      });
    },
  };
};

const useCheckOutMessage = () => {
  const { t } = useTranslation();
  return {
    showCheckOutMessage: () => {
      Swal.fire({
        icon: 'success',
        title: t('swal.checkout_message.title'),
        text: t('swal.checkout_message.text'),
      });
    },
  };
};

const useErrorMessage = () => {
  const { t } = useTranslation();
  return {
    showError: () => {
      Swal.fire({
        icon: 'error',
        title: t('swal.error_message.title'),
        text: t('swal.error_message.text'),
      });
    },
  };
};

export { useSuccessMessage, useErrorMessage, useContactMessage, useCheckOutMessage };
