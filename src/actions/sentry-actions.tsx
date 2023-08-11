'use server';

import { ActionResponse } from '@/types/form-types';
import * as Sentry from '@sentry/nextjs';

export async function sentryWithRSC(): Promise<ActionResponse> {
  try {
    throw new Error('Error handled with Sentry in Server Action');
  } catch (error) {
    Sentry.captureException(error);

    return {
      success: false,
      message: 'Error handled with Sentry in Server Action',
    } as ActionResponse;
  }
}
