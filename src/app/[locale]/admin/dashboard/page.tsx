import { getI18n } from '@/locales/server';

export default async function DashboardPage() {
  const t = await getI18n();
  return (
    <div>
      <h1 className='capitalize'>{t('dashboard')}</h1>
    </div>
  );
}
