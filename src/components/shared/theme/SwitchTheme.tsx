'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon as MoonIcon, Sun as SunIcon } from 'lucide-react';

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  } else {
    return (
      <>
        {theme && theme === 'light' && (
          <button
            type='button'
            onClick={() => setTheme('dark')}
            className='-m-2.5 p-2.5 text-slate-400 hover:text-slate-500'
          >
            <MoonIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        )}

        {theme && theme !== 'light' && (
          <button
            type='button'
            onClick={() => setTheme('light')}
            className='-m-2.5 p-2.5 text-slate-400 hover:text-slate-500'
          >
            <SunIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        )}
      </>
    );
  }
}
