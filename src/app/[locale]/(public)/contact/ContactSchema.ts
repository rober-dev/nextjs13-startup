import { setYupLocale } from '@/lib/yup-set-locale';
import * as yup from 'yup';

export const ContactSchema = (lng: string) => {
  setYupLocale(lng);

  return yup.object().shape({
    name: yup.string().min(3).max(250).required(),
    email: yup.string().email().min(4).max(250).required(),
    phone: yup.string().max(20).optional(),
    subject: yup.string().max(250).optional(),
    message: yup.string().min(4).max(1000).required(),
  });
};
