import * as Sentry from "@sentry/nextjs";

export const logClientError = (error: string) => {
  if (Sentry) {
    Sentry.captureMessage(error);
  }
};
