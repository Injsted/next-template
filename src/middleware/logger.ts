import logger from '@/lib/winston/global-logger';
import type { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  logger.info('Incoming request', {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });
  return res;
}
