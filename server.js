const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const prerenderedDir = path.join(__dirname, 'prerendered');
const staticDir = path.join(__dirname, 'dist');

const BOT_USER_AGENTS = [
  /Googlebot/i,
  /Bingbot/i,
  /Slurp/i,
  /DuckDuckBot/i,
  /Baiduspider/i,
  /YandexBot/i,
];

function isBot(userAgent) {
  return BOT_USER_AGENTS.some((bot) => bot.test(userAgent));
}

app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'];

  if (isBot(userAgent)) {
    let urlPath = req.path.endsWith('/') ? req.path + 'index' : req.path;
    const filePath = path.join(prerenderedDir, `${urlPath}.html`);

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
      return;
    }
  }

  next();
});

app.use(express.static(staticDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`السيرفر يعمل على http://localhost:${PORT}`);
});

