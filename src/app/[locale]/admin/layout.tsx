'use client';

import { Fragment, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { Moon as MoonIcon, Sun as SunIcon } from 'lucide-react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import SwitchTheme from '@/components/shared/theme/SwitchTheme';
import SwitchLng from '@/components/shared/language/SwitchLng';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useI18n();
  const lng = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navigation = [
    {
      name: t('dashboard'),
      href: `/${lng}/admin/dashboard}`,
      icon: HomeIcon,
      current: true,
    },
    {
      name: t('courses'),
      href: `/${lng}/admin/courses}`,
      icon: UsersIcon,
      current: false,
    },
    {
      name: t('participants'),
      href: `/${lng}/admin/participants}`,
      icon: FolderIcon,
      current: false,
    },
    {
      name: t('signers'),
      href: `/${lng}/admin/signers}`,
      icon: CalendarIcon,
      current: false,
    },
    {
      name: t('templates'),
      href: `/${lng}/admin/templates}`,
      icon: CalendarIcon,
      current: false,
    },
    {
      name: t('invoices'),
      href: `/${lng}/admin/invoices}`,
      icon: CalendarIcon,
      current: false,
    },
  ];

  const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ];
  const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50 lg:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-slate-900/80' />
          </Transition.Child>

          <div className='fixed inset-0 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                    <button
                      type='button'
                      className='-m-2.5 p-2.5'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XMarkIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4 ring-1 ring-white/10'>
                  <div className='flex h-16 shrink-0 items-center'>
                    <Image
                      className='-ml-1 h-12 w-auto'
                      src={`/img/sinaturas-h-240-white.png`}
                      priority={true}
                      alt='Sinaturas'
                      width={240}
                      height={60}
                    />
                  </div>
                  <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                      <li>
                        <ul role='list' className='-mx-2 space-y-1'>
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-slate-800 text-white'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon
                                  className='h-6 w-6 shrink-0'
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className='text-xs font-semibold leading-6 text-slate-400 capitalize'>
                          {t('lastCourses')}
                        </div>
                        <ul role='list' className='-mx-2 mt-2 space-y-1'>
                          {teams.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? 'bg-slate-800 text-white'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-[0.625rem] font-medium text-slate-400 group-hover:text-white'>
                                  {team.initial}
                                </span>
                                <span className='truncate'>{team.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className='mt-auto'>
                        <a
                          href='#'
                          className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-slate-400 hover:bg-slate-800 hover:text-white capitalize'
                        >
                          <Cog6ToothIcon
                            className='h-6 w-6 shrink-0'
                            aria-hidden='true'
                          />
                          {t('settings')}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 dark:bg-slate-950 px-6 pb-4'>
          <div className='flex h-20 shrink-0 items-center'>
            <Image
              priority={true}
              className='-ml-1 h-12 w-auto'
              src={`/img/sinaturas-h-240-white.png`}
              alt='Sinaturas'
              width={240}
              height={60}
            />
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-slate-800 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold capitalize'
                        )}
                      >
                        <item.icon
                          className='h-6 w-6 shrink-0'
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className='text-xs font-semibold leading-6 text-slate-400 capitalize'>
                  {t('lastCourses')}
                </div>
                <ul role='list' className='-mx-2 mt-2 space-y-1'>
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? 'bg-slate-800 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-[0.625rem] font-medium text-slate-400 group-hover:text-white'>
                          {team.initial}
                        </span>
                        <span className='truncate'>{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='mt-auto'>
                <a
                  href='#'
                  className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-slate-400 hover:bg-slate-800 hover:text-white capitalize'
                >
                  <Cog6ToothIcon
                    className='h-6 w-6 shrink-0'
                    aria-hidden='true'
                  />
                  {t('settings')}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='lg:pl-72'>
        <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b light:border-slate-200 dark:border-slate-800 light:bg-white dark:bg-slate-900  px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-slate-700 lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* Separator */}
          <div
            className='h-6 w-px bg-slate-900/10 lg:hidden'
            aria-hidden='true'
          />

          <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
            <form className='relative flex flex-1' action='#' method='GET'>
              <label htmlFor='search-field' className='sr-only'>
                {t('search')}
              </label>
              <MagnifyingGlassIcon
                className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-slate-400'
                aria-hidden='true'
              />
              <input
                id='search-field'
                className='block h-full w-full border-0 py-0 pl-8 pr-0 text-slate-900 dark:bg-slate-900 dark:text-gray-200 placeholder:text-slate-400 focus:ring-0 sm:text-sm capitalize'
                placeholder={t('search') + ' ...'}
                type='search'
                name='search'
              />
            </form>
            <div className='flex items-center gap-x-4 lg:gap-x-6'>
              <button
                type='button'
                className='-m-2.5 p-2.5 text-slate-400 hover:text-slate-500'
              >
                <span className='sr-only'>View notifications</span>
                <BellIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              <button
                type='button'
                className='-m-2.5 p-2.5 text-slate-400 hover:text-slate-500'
              >
                <UserCircleIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              <SwitchTheme />

              <SwitchLng />

              {/* Separator */}
              <div
                className='hidden lg:block lg:h-6 lg:w-px lg:bg-slate-900/10'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>

        <main className='py-10'>
          <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
        </main>
      </div>
    </div>
  );
}
