import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { getI18n } from '@/locales/server';

import ContactForm from './ContactForm';

export default async function ContactPage() {
  const t = await getI18n();

  return (
    <main className='flex flex-col p-3'>
      <div className='flex flex-row justify-content w-full gap-4'>
        <div className='hidden md:flex w-1/2 '>Image</div>
        <div className='w-full md:w-1/2 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800'>
          <h1 className='text-2xl mb-8 flex flex-row items-center justify-start border-b pb-3 capitalize'>
            <EnvelopeIcon className='w-8 h-8 inline-block mr-2' />
            {t('contact_form')}
          </h1>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
