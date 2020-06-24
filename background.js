chrome.webRequest.onBeforeRequest.addListener((details) => {
  if (details.url.includes('geo=IL')) {
    return { redirectUrl: details.url.split('geo=IL').join('geo=any') };
  }

},
  { urls: ["*://*.kan.org.il/*"] },
  ["blocking"]
);
