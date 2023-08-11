import { getI18n } from '@/locales/server';

export default async function Home() {
  const t = await getI18n();

  return (
    <main className='flex flex-col justify-between p-3'>
      <h1>{t('hello')}</h1>
    </main>
  );
}
