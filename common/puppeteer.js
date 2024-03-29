const puppeteer = require('puppeteer');

const LAUNCH_PUPPETEER_OPTS = {
	args: [
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-dev-shm-usage',
		'--disable-accelerated-2d-canvas',
		'--disable-gpu',
		'--window-size=1920x1080',
	],
};

const PAGE_PUPPETEER_OPTS = {
	networkIdle2Timeout: 5000,
	waitUntil: 'networkidle2',
	timeout: 3000000,
};

async function getPageContent(url) {
	try {
		const browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
		const page = await browser.newPage();
		await page.goto(url, PAGE_PUPPETEER_OPTS);
		// await page.screenshot({
		// 	path: `screenshots/screenshot_${Math.floor(Math.random() * 100)}.png`,
		// });
		const content = await page.content();
		await browser.close();
		return content;
	} catch (error) {
		throw error;
	}
}

module.exports = getPageContent;
