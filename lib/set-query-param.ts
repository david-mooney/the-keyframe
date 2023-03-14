const setQueryParam = (query: string, route) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  if (query.length > 0) {
    searchParams.set('q', query);
  } else {
    searchParams.delete('q');
  }

  url.search = searchParams.toString();
  route.push(url.toString(), undefined, { shallow: true });
};

export default setQueryParam;
