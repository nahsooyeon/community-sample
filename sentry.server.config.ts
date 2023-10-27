import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e45236a251c4d5894461d2e1854f3c07@o4506019266887681.ingest.sentry.io/4506121429123072",

  // We recommend adjusting this value in production, or using `tracesSampler`
  // for finer control
  tracesSampleRate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 0.15 : 0,
  enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "production",
  debug: false,
});
