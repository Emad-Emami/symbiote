function authenticationMiddleware() {
  return (next) => (action) => {
    const returnValue = next({
      ...action,
      options: {
        ...action?.options,
        headers: {
          ...action?.options?.headers,
          ...(action?.type === '@@query/REQUEST_ASYNC' && {
            'Content-Type': 'application/json',
            Authorization:
              'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMjc5MDY2IiwiZ2l2ZW5uYW1lIjoiUG9zdCIsInN1cm5hbWUiOiJSZWxlYXNlIiwic3ViIjoidmljdG9yeW9jYWxlQGdtYWlsLmNvbSIsInR5cGUiOiJVc2VyIiwicm9sZXMiOiJCdXNpbmVzcyxDb25zdW1lcixQcm92aWRlciIsImJ1c2luZXNzaWRzIjoiOTE3NiIsImJ1c2luZXNzaWR0eXBlIjoiQnVzaW5lc3MiLCJwcm92aWRlcmlkIjoiMTMwNzgiLCJzZXNzaW9uaWQiOiIiLCJuYmYiOjE2MDM2NjczMTUsImV4cCI6MTYwMzc1MzcxNSwiaWF0IjoxNjAzNjY3MzE1LCJpc3MiOiJodHRwczovL3lvY2FsZS1hdXRoZW50aWNhdGlvbi1wcm9kLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9hcGkueW9jYWxlLmNvbSJ9.icWEn_-vxp4S9jr6wdCNFtf3AO5HLQgWmzcY9ntIlYk',
          }),
        },
      },
    });
    return returnValue;
  };
}

export default authenticationMiddleware;
