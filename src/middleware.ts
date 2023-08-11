import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware(['en', 'es'] as const, 'es');

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|monitoring|img|assets|favicon.ico|sw.js).*)',
  ],
};
