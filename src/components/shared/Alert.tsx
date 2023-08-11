import clsx from 'clsx';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

export default function Alert({
  success,
  message,
}: {
  success?: boolean;
  message?: string;
}) {
  return (
    <p
      className={clsx(
        'flex px-2 py-2 rounded',
        success
          ? 'bg-green-200 text-green-800 border border-y-2 border-green-600'
          : 'bg-red-200 text-red-800 border border-y-2  border-red-600'
      )}
    >
      {success === false ? (
        <ExclamationCircleIcon className='w-6 h-6 mr-2' />
      ) : (
        <CheckIcon className='w-6 h-6 mr-2' />
      )}

      {message}
    </p>
  );
}
