'use client';

import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export default function SwitchLng() {
  const t = useI18n();
  const lng = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='text-slate-400 hover:text-slate-500 ring-0 border-0'>
        {lng.toUpperCase()}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className={cn(
            'cursor-pointer',
            lng === 'es' && 'bg-slate-800 text-slate-400'
          )}
          onClick={() => changeLocale('es')}
        >
          ES
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            'cursor-pointer',
            lng === 'en' && 'bg-slate-800 text-slate-400'
          )}
          onClick={() => changeLocale('en')}
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
