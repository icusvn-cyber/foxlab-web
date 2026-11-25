import https from 'node:https';
import fs from 'node:fs';

function fetchUrl(url, customHeaders = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
        ...customHeaders
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location, customHeaders));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://www.facebook.com/p/Fox-Lab-61594878101291/',
    'https://www.facebook.com/profile.php?id=61594878101291',
    'https://m.facebook.com/p/Fox-Lab-61594878101291/',
    'https://www.facebook.com/p/Fox-Lab-61594878101291/photos/'
  ];

  for (const url of urls) {
    console.log('Fetching:', url);
    try {
      const res = await fetchUrl(url);
      console.log('Result for', url, 'Status:', res.statusCode, 'Length:', res.body.length);
      const matches = res.body.match(/https:\/\/[^"'\s\\]*(?:scontent|lookaside|fbcdn)[^"'\s\\]*/gi) || [];
      const cleaned = [...new Set(matches.map(m => m.replace(/&amp;/g, '&')))];
      console.log('Images found:', cleaned.length);
      for (const img of cleaned) {
        console.log('  ->', img.slice(0, 150));
      }
      fs.writeFileSync(`dump_${url.replace(/[^a-zA-Z0-9]/g, '_')}.html`, res.body);
    } catch (e) {
      console.error('Error fetching', url, e.message);
    }
  }
}

run();
