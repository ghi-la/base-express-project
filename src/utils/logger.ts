export function requestLogger(
  req: {
    ip: any;
    method: any;
    originalUrl: any;
  },
  _res: any,
  next: () => void
) {
  console.log('IP Address:', req.ip);
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
}
