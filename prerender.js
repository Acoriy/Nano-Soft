const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // قائمة روابط صفحات موقعك التي تريد توليد نسخة HTML منها
  const urls = [
    'https://nanosoft.ly',          
    'https://nanosoft.ly/pricing', 
    'https://nanosoft.ly/contact',
    'https://nanosoft.ly/accounting',
    'https://nanosoft.ly/inventory',
    'https://nanosoft.ly/hr',
    'https://nanosoft.ly/injaz',
    'https://nanosoft.ly/erp',
    'https://nanosoft.ly/software-development',
    'https://nanosoft.ly/cyber-security',
    'https://nanosoft.ly/cloud-services',
    'https://nanosoft.ly/privacy-policy',
    'https://nanosoft.ly/terms-of-use',
  ];

  // تأكد أن مجلد prerendered موجود، أو أنشئه
  const prerenderedDir = path.join(__dirname, 'prerendered');
  if (!fs.existsSync(prerenderedDir)) {
    fs.mkdirSync(prerenderedDir);
  }

  for (const url of urls) {
    await page.goto(url, { waitUntil: 'networkidle0' }); // انتظر حتى تحميل الصفحة بالكامل

    const html = await page.content();

    // اسم الملف: index.html للصفحة الرئيسية، أو اسم الصفحة للبقية
    const fileName = url.endsWith('/') ? 'index.html' : url.split('/').pop() + '.html';

    const filePath = path.join(prerenderedDir, fileName);

    fs.writeFileSync(filePath, html);

    console.log(`تم توليد الصفحة: ${fileName}`);
  }

  await browser.close();
})();
