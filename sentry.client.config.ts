import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e45236a251c4d5894461d2e1854f3c07@o4506019266887681.ingest.sentry.io/4506121429123072",

  // We recommend adjusting this value in production, or using `tracesSampler`
  // for finer control
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 0.15 : 0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 0.15 : 0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 0.15 : 0,
  enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "production",
  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration goes in here, for example:
      maskAllText: false,
      blockAllMedia: true,
    }),
  ],

});
