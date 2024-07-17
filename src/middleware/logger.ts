import logger from '@/utils/logger/logger';
import { NextRequest, NextResponse } from 'next/server';

export function logRequest(
  req: NextRequest,
  res: NextResponse,
  next: () => void
) {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
}
