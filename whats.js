const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: false,
        args: [
            '--window-size=1280,800'
        ],
    });

    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 800});
    await page.goto('https://web.whatsapp.com');

})();