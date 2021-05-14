const rateLimits = [];

export const addRateLimit = (
  apiSource,
  elapses = 0,
  relativeElapses = true
) => {
  const absoluteElapses = (() => {
    if (elapses <= 0) {
      return 0;
    } else if (!relativeElapses) {
      return elapses;
    } else {
      Date.now() + elapses;
    }
  })();

  const position = rateLimits
    .map((limit) => limit.apiSource)
    .indexOf(apiSource);

  if (position === -1) {
    console.log("[RateLimit] Added source " + apiSource);

    rateLimits.push({
      apiSource,
      isRateLimited: absoluteElapses > 0,
      absoluteElapses,
    });
  } else {
    console.log("[RateLimit] Modified source " + apiSource);

    rateLimits[position].isRateLimited = absoluteElapses > 0;
    rateLimits[position].absoluteElapses = absoluteElapses;
  }
};

export const rateLimitIsNotPresent = (apiSource) => {
  const state = isRateLimited(apiSource);
  if (state === undefined)
    throw Error(
      "Register API using `addRateLimit(apiSource)` before trying to resolve a ratelimit."
    );
  if (!state) return true;

  const position = rateLimits
    .map((limit) => limit.apiSource)
    .indexOf(apiSource);

  if (Date.now() > rateLimits[position].elapses) {
    rateLimits[position].isRateLimited = false;
    rateLimits[position].elapses = 0;
    return true;
  }
  return false;
};

export const isRateLimited = (apiSource) => {
  const position = rateLimits
    .map((limit) => limit.apiSource)
    .indexOf(apiSource);
  if (position === -1) return undefined;
  return rateLimits[position].isRateLimited;
};
