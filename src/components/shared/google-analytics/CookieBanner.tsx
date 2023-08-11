'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useI18n } from '@/locales/client';
import { getLocalStorage, setLocalStorage } from '@/lib/storage-helper';
import clsx from 'clsx';

export default function CookieBanner() {
  const t = useI18n();
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={clsx(
        cookieConsent != null ? 'hidden' : 'flex',
        'my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow'
      )}
    >
      <div className='text-center'>
        <Link href='/info/cookies'>
          <p>
            {t('we_use')}{' '}
            <span className='font-bold text-sky-400'>{t('cookies')}</span>{' '}
            {t('on_our_website')}.
          </p>
        </Link>
      </div>

      <div className='flex gap-2'>
        <button
          onClick={() => setCookieConsent(false)}
          className='px-5 py-2 text-gray-300 rounded-md border-gray-900 capitalize'
        >
          {t('decline_cookies')}
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className='bg-gray-900 px-5 py-2 text-white rounded-lg capitalize'
        >
          {t('allow_cookies')}
        </button>
      </div>
    </div>
  );
}
