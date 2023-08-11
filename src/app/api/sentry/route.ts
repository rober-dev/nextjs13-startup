import { NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';

export async function GET() {
  try {
    throw new Error('Error handled by Sentry in APP API route');
  } catch (error: Error | any) {
    Sentry.captureException(error);
    return NextResponse.json(error?.message || 'Error', {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
