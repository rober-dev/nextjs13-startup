'use client';

import SwitchLng from '@/components/shared/language/SwitchLng';
import SwitchTheme from '@/components/shared/theme/SwitchTheme';

export default function AppBar() {
  return (
    <div className='flex flex-row justify-between items-center p-3'>
      <h1 className='text-2xl font-bold'>APP NAME</h1>

      <div className='flex flex-row justify-end items-center gap-4 mr-2'>
        <SwitchTheme />
        <SwitchLng />
      </div>
    </div>
  );
}
