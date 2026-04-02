<div align="center">

# Nikoloz Pairaziani

### Frontend Developer · Portfolio

**Production:** [nick-and-dev.vercel.app](https://nick-and-dev.vercel.app)

Персональный сайт-портфолио: проекты, опыт, контакты. Собран как **production-ready** продукт, а не как учебный шаблон.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

</div>

---

## Зачем этот репозиторий

Если вы **рекрутер** или **техлид**: здесь видно не только визуал, но и то, *как* написан фронтенд — архитектура, i18n, SEO, разделение server/client, переиспользуемые абстракции.

## Что внутри (инженерный уровень)

| Область | Решение |
|--------|---------|
| **Фреймворк** | Next.js 16 (App Router), React 19 |
| **Компилятор** | React Compiler (`babel-plugin-react-compiler`) |
| **Локализация** | `next-intl`, локали `ru` / `en`, префикс в URL |
| **UI / анимации** | Framer Motion, CSS Modules, дизайн-токены в `:root` |
| **Архитектура** | Слайсы с публичным API (`index.js`), общая логика в `shared/` |
| **SEO** | `generateMetadata`, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, JSON-LD (`WebSite`, `ProfilePage`, `Person`) |
| **Иконки / OG** | Статический `favicon.png`, динамические `apple-icon` и `opengraph-image` |
| **Качество кода** | Oxlint, Oxfmt |
| **Шрифты** | Self-hosted, `font-display: swap`, WOFF2 + TTF fallback |

## Структура проекта (кратко)

```
src/
├── app/                 # маршруты App Router, layout, metadata
├── components/          # фичи и виджеты (aside, projects, about, …)
├── shared/              # ui-kit, хуки, утилиты
├── i18n/                # routing, request config, locale helpers
├── constants/           # ссылки, брендинг, SITE_URL
messages/                # ru.json, en.json
```

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) — произойдёт редирект на локаль по умолчанию (`/en` или `/ru` в зависимости от настроек).

### Сборка

```bash
npm run build
npm run start
```

## Переменные окружения

| Переменная | Назначение |
|------------|------------|
| `NEXT_PUBLIC_SITE_URL` | Канонический URL сайта (metadata, sitemap, OG). По умолчанию: `https://nick-and-dev.vercel.app` |

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Режим разработки |
| `npm run build` | Production-сборка |
| `npm run start` | Запуск production-сервера |
| `npm run lint` | Oxlint |
| `npm run format` | Oxfmt (запись) |
| `npm run format:check` | Проверка форматирования |

---

## Контакты

- **Сайт:** [nick-and-dev.vercel.app](https://nick-and-dev.vercel.app)
- **Telegram:** [@nikapair](https://t.me/nikapair)
- **LinkedIn:** [linkedin.com/in/nika-pair](https://www.linkedin.com/in/nika-pair)

---

<div align="center">

*Репозиторий отражает текущий стек и подход к разработке интерфейсов.*

</div>
