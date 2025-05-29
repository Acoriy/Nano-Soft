const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// قائمة User-Agent للروبوتات الشهيرة
const BOT_USER_AGENTS = [
  /Googlebot/i,
  /Bingbot/i,
  /Slurp/i,
  /DuckDuckBot/i,
  /Baiduspider/i,
  /YandexBot/i,
];

// دالة لفحص ما إذا كان الزائر روبوت
function isBot(userAgent) {
  if (!userAgent) return false;
  return BOT_USER_AGENTS.some((bot) => bot.test(userAgent));
}

app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'];

  if (isBot(userAgent)) {
    const urlPath = req.path === '/' ? '/index' : req.path;
    const filePath = path.join(__dirname, 'prerendered', `${urlPath}.html`);

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
      return;
    }
  }

  // إذا لم يكن روبوت أو ملف HTML غير موجود، سيرفر ملفات React العادية
  next();
});

// خدمة ملفات البناء (React العادي)
app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
