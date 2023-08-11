// Vendor libs
import { setLocale } from 'yup';

import validationES from '@/locales/yup/es';
import validationEN from '@/locales/yup/en';

export function setYupLocale(lng: string) {
  switch (lng) {
    case 'es':
      setLocale(validationES);
      break;
    case 'en':
      setLocale(validationEN);
      break;
    default:
      setLocale(validationEN);
      break;
  }
}
