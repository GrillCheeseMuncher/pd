// Write a JavaScript function to parse an URL
// Test Data:
// console.log(parseUrl(url));
// // Output:
// URL {
//   href: 'https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python',
//   origin: 'https://github.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'github.com',
//   hostname: 'github.com',
//   port: '',
//   pathname: '/pubnub/python/search',
//   search: '?utf8=%E2%9C%93&q=python',
//   searchParams: URLSearchParams { 'utf8' => '✓', 'q' => 'python' },
//   hash: ''
// }

const url = 'https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python';

const parseUrl = (url) => {
  try {
    const parsedUrl = new URL(url);

    return {
      href: parsedUrl.href,
      origin: parsedUrl.origin,
      protocol: parsedUrl.protocol,
      username: parsedUrl.username,
      password: parsedUrl.password,
      host: parsedUrl.host,
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      pathname: parsedUrl.pathname,
      search: parsedUrl.search,
      searchParams: parsedUrl.searchParams,
      hash: parsedUrl.hash,
    };
  } catch (error) {
    console.error('Invalid URL:', error);
    return null;
  }
};

console.log(parseUrl(url));
