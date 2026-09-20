# Jordan AI Data Assistant

A professional frontend MVP for an AI-powered business intelligence assistant aimed at small and medium-sized businesses in Jordan. It uses realistic mock data and mock AI responses; no backend or API key is needed.

## ملفات المشروع وGitHub

تم استبعاد الملفات المُولّدة والكبيرة من المستودع:

- `node_modules/`: يُعاد إنشاؤه بالأمر `npm install`.
- `dist/`: ناتج البناء ويُعاد إنشاؤه بالأمر `npm run build`.
- مجلدات الكاش والتغطية وملفات السجل.

لذلك يجب رفع ملفات المصدر و`package.json` و`package-lock.json` فقط إلى GitHub. لا تحذف `package-lock.json`؛ فهو يضمن تثبيت نفس إصدارات الحزم عند تشغيل المشروع على جهاز آخر أو على منصة النشر.

## التشغيل المحلي على VS Code

1. Open this folder in VS Code.
2. Open the integrated terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. افتح الرابط الذي يظهر في Terminal. استخدم `http://localhost:5173` على نفس الكمبيوتر فقط.

## التجربة من هاتف أو جهاز آخر على نفس Wi-Fi

1. تأكد أن الهاتف والكمبيوتر متصلان بنفس شبكة Wi-Fi الخاصة.
2. شغّل `npm run dev`.
3. انسخ الرابط الذي يظهر بعد كلمة `Network:`، مثل `http://192.168.1.25:5173`، وافتحه من الهاتف.
4. إذا ظهرت نافذة Windows Firewall، اختر السماح على **Private networks** فقط.

لا تستخدم `localhost` من الهاتف؛ فهو يشير دائمًا إلى الهاتف نفسه وليس إلى الكمبيوتر.

## رابط عام دائم لجميع مناطق الأردن

التشغيل عبر `npm run dev` مخصص للتطوير فقط؛ لا يمكن أن يكون رابطًا عامًا دائمًا. للوصول من أي شبكة أو محافظة، أنشئ نسخة إنتاج ثم انشرها على استضافة عامة:

```bash
npm run build
```

ينشئ هذا الأمر مجلد `dist/`، وهو النسخة الجاهزة للنشر. ارفع هذا المجلد إلى Vercel أو Netlify أو Cloudflare Pages. ستعطيك الاستضافة رابط HTTPS عام، مثل `https://your-project.vercel.app`، يعمل من أي جهاز ومن أي مكان، حتى عند إغلاق جهازك.

لا تفتح منافذ الراوتر أو تكشف جهازك الشخصي للإنترنت؛ الاستضافة العامة هي الخيار الاحترافي والآمن.

## Project structure

```text
jordan-ai-data-assistant/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── ChatDemo.jsx
    │   ├── Dashboard.jsx
    │   └── Icons.jsx
    └── data/
        └── mockData.js
```

Mock metrics, products, insights, sales history, and chat responses are all collected in `src/data/mockData.js` for easy replacement later.
