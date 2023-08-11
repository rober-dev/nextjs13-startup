'use client';

import { Button } from '@/components/ui/button';
import { sentryWithRSC } from '@/actions/sentry-actions';
import { useState, useTransition } from 'react';
import { ActionResponse } from '@/types/form-types';
import clsx from 'clsx';
import { ProgressBar } from '@/components/shared/progress-bar/ProgressBar';

export default function SentryRSCPage() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<ActionResponse | null>(null);

  async function handleOnSubmit(input: FormData) {
    startTransition(async () => {
      const result = await sentryWithRSC();
      setResponse(result);
    });
  }

  return (
    <div>
      <h1>Sentry RSC Page</h1>
      <form action={handleOnSubmit}>
        <p>Test Sentry with a RSC component and Server Action</p>

        {isPending && <ProgressBar />}

        {response && (
          <div
            className={clsx(
              response.success ? 'text-green-500' : 'text-red-600'
            )}
          >
            {response.message}
          </div>
        )}

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}
