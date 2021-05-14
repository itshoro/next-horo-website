const rateLimits = {};

export const addRateLimit = (
  apiSource,
  elapses = 0,
  relativeElapses = true
) => {
  const absoluteElapses = !relativeElapses
    ? elapses
    : (elapses) => {
        const now = new Date();
        now.setSeconds(now.getSeconds() + elapses);
        return now.getTime();
      };

  if (!rateLimits.includes(apiSource)) {
    rateLimits.append(apiSource, {
      isRateLimited: absoluteElapses > 0,
      absoluteElapses,
    });
  } else {
    rateLimits[apiSource] = {
      isRateLimited: absoluteElapses > 0,
      absoluteElapses,
    };
  }
};

export const resolveRateLimitIfPresent = (apiSource) => {
  const state = isRateLimited(apiSource);
  if (state === undefined)
    throw Error(
      "Register API using `addRateLimit(apiSource)` before trying to resolve a ratelimit."
    );
  if (!state) return true;

  if (Date.now() > rateLimits[apiSource].elapses) {
    rateLimits[apiSource].isRateLimited = false;
    rateLimits[apiSource].elapses = 0;
    return true;
  }
  return false;
};

export const isRateLimited = (apiSource) => {
  if (!rateLimits.includes(apiSource)) return undefined;
  return rateLimits[apiSource].isRateLimited;
};
