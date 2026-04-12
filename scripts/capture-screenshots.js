const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PAGES = [
  { name: 'home', path: '/', title: 'Home' },
  { name: 'about', path: '/about', title: 'About' },
  { name: 'experience', path: '/experience', title: 'Experience' },
  { name: 'projects', path: '/projects', title: 'Projects' },
  { name: 'experiments', path: '/experiments', title: 'Experiments' },
  { name: 'contact', path: '/contact', title: 'Contact' },
];

const SCREENSHOT_DIR = path.join(__dirname, '../public/screenshots');
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

// Create screenshots directory
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function isServerReady(url, timeout = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return true;
    } catch (e) {
      // Server not ready yet
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error(`Server did not respond within ${timeout}ms`);
}

async function captureScreenshots() {
  let browser;
  let serverProcess;

  try {
    console.log('Starting Next.js dev server...');
    serverProcess = spawn('pnpm', ['dev'], {
      cwd: path.join(__dirname, '..'),
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let serverReadyFlag = false;
    serverProcess.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('localhost:300') && !serverReadyFlag) {
        serverReadyFlag = true;
      }
    });

    console.log('Waiting for server to be ready...');
    await isServerReady(BASE_URL);
    console.log('✓ Server is ready!\n');

    console.log('Launching browser...');
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium',
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1024 });

    for (const pageInfo of PAGES) {
      const url = `${BASE_URL}${pageInfo.path}`;
      console.log(`Capturing screenshot for ${pageInfo.title} (${pageInfo.path})...`);
      
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        // Wait a bit for animations to settle
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const screenshotPath = path.join(SCREENSHOT_DIR, `${pageInfo.name}.png`);
        await page.screenshot({ 
          path: screenshotPath, 
          fullPage: true,
          omitBackground: true 
        });
        console.log(`✓ Saved: ${screenshotPath}`);
      } catch (error) {
        console.error(`✗ Error capturing ${pageInfo.title}:`, error.message);
      }
    }

    await page.close();
    console.log('\n✓ All screenshots captured successfully!');
    console.log(`Screenshots saved to: ${SCREENSHOT_DIR}`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    if (serverProcess) {
      console.log('\nShutting down server...');
      serverProcess.kill();
      // Wait a bit for server to shut down
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    process.exit(0);
  }
}

captureScreenshots();
