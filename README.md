# React + TypeScript Shop

یه پروژه‌ی یادگیری: یه سایت فروشگاهی ساده با React و TypeScript، برای تمرین عملی سینتکس TypeScript در یه پروژه‌ی واقعی. فعلاً فقط فرانت‌اند است و از داده‌ی fake استفاده می‌کند؛ در آینده یک بک‌اند واقعی با Node.js به آن اضافه خواهد شد.

## تکنولوژی‌ها

- [Vite](https://vite.dev/) — ابزار build و dev server
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) — مسیریابی
- [Tailwind CSS](https://tailwindcss.com/) — استایل‌دهی
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) — تست

## امکانات فعلی

- مرور، فیلتر (دسته‌بندی) و جستجوی محصولات
- صفحه‌ی جزئیات هر محصول
- سبد خرید (افزودن، تغییر تعداد، حذف) با پایداری در `localStorage`
- ورود/خروج (fake auth) با پایداری در `localStorage`، و مسیر محافظت‌شده (`/account`)
- فرآیند تکمیل خرید با اعتبارسنجی فرم و ثبت سفارش

## اجرای پروژه

```bash
npm install
npm run dev       # اجرای سرور توسعه
npm run test      # اجرای تست‌ها
npm run build     # build نهایی برای production
```

### ورود آزمایشی

چون احراز هویت فعلاً fake است، با این اطلاعات می‌توان وارد شد:

- ایمیل: `test@example.com`
- رمز: `123456`

## ساختار پروژه

```
src/
  types/       # تعریف مدل‌های داده (Product, Cart, Order, User, ...)
  data/        # داده‌ی fake محصولات
  services/    # توابع async که داده برمی‌گردانند (در آینده جایگزین با API واقعی)
  context/     # مدیریت state سراسری (سبد خرید، احراز هویت) با Context + useReducer
  hooks/       # هوک‌های سفارشی قابل‌استفاده‌ی مجدد
  components/  # کامپوننت‌های قابل‌استفاده‌ی مجدد
  pages/       # کامپوننت هر صفحه
  router/      # تعریف مسیرها
```

نکته‌ی معماری: کامپوننت‌ها هیچ‌وقت مستقیم به `data/` دسترسی ندارند، همیشه از `services/` عبور می‌کنند. این‌طوری وقتی در آینده بک‌اند واقعی اضافه شود، فقط کافی‌ست داخل `services/` تغییر کند (fake → `fetch`)، بقیه‌ی کد دست‌نخورده می‌ماند.

## برنامه‌ی آینده

- افزودن بک‌اند واقعی با Node.js (Express + دیتابیس)
- جایگزینی احراز هویت fake با JWT واقعی
- دیپلوی (Vercel/Netlify برای فرانت، Render/Railway برای بک‌اند)

---

# English

A learning project: a simple e-commerce storefront built with React and TypeScript, for hands-on practice with TypeScript syntax in a real-ish codebase. Currently frontend-only, using fake data; a real Node.js backend will be added later.

## Tech Stack

- [Vite](https://vite.dev/) — build tool & dev server
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) — routing
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) — testing

## Current Features

- Browse, filter (by category), and search products
- Product detail page
- Shopping cart (add, update quantity, remove), persisted in `localStorage`
- Fake login/logout, persisted in `localStorage`, with a protected route (`/account`)
- Checkout flow with form validation and order placement

## Running the Project

```bash
npm install
npm run dev       # start the dev server
npm run test      # run tests
npm run build     # production build
```

### Test Login

Since auth is currently fake, use these credentials to log in:

- Email: `test@example.com`
- Password: `123456`

## Project Structure

```
src/
  types/       # data model definitions (Product, Cart, Order, User, ...)
  data/        # fake product data
  services/    # async functions that return data (swapped for a real API later)
  context/     # global state (cart, auth) via Context + useReducer
  hooks/       # reusable custom hooks
  components/  # reusable components
  pages/       # one component per page/route
  router/      # route definitions
```

Architecture note: components never access `data/` directly — they always go through `services/`. This means that when a real backend is added later, only `services/` needs to change (fake arrays → `fetch` calls); the rest of the codebase stays untouched.

## Roadmap

- Add a real Node.js backend (Express + database)
- Replace fake auth with real JWT-based auth
- Deploy (Vercel/Netlify for the frontend, Render/Railway for the backend)
