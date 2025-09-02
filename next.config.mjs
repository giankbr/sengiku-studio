let userConfig = undefined;
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import('./v0-user-next.config');
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';
    const securityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-XSS-Protection', value: '0' },
      {
        key: 'Permissions-Policy',
        value: [
          'accelerometer=()',
          'autoplay=()',
          'camera=()',
          'display-capture=()',
          'encrypted-media=()',
          'fullscreen=(self)',
          'geolocation=()',
          'gyroscope=()',
          'magnetometer=()',
          'microphone=()',
          'midi=()',
          'payment=()',
          'usb=()',
        ].join(', '),
      },
      // Very strict CSP to minimize injected script/style visibility.
      // Note: CSP has limited effect on XML rendering, but is harmless and helpful for HTML.
      {
        key: 'Content-Security-Policy',
        value: (() => {
          const csp = [
            "default-src 'none'",
            "base-uri 'none'",
            "form-action 'self'",
            "frame-ancestors 'none'",
            "img-src 'self' data:",
            // Allow Google Fonts stylesheet in both envs if used
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            // Next.js dev and some tools rely on eval; keep as-is
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            // Will extend connect-src in dev below
            "connect-src 'self'",
            // Allow Google Fonts font files
            "font-src 'self' data: https://fonts.gstatic.com",
            "manifest-src 'self'",
            "object-src 'none'",
            "media-src 'self'",
          ];

          if (isDev) {
            // Permit local websocket connections for HMR/devtools, any port
            csp[csp.findIndex((d) => d.startsWith('connect-src'))] = "connect-src 'self' ws://localhost:* ws://127.0.0.1:*";
          }
          return csp.join('; ');
        })(),
      },
    ];

    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
