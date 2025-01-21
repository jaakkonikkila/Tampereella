# [Tampereella](https://tampereella.vercel.app/fi)

This is a project built with Next.js 15 and Chakra UI 3, focused on providing a seamless and modern web application experience.

This project showcases my ability to quickly learn and adapt to new technologies, creating a modern, efficient web application while staying up-to-date with the latest frameworks and tools.

Project is hosted with [Vercel](https://vercel.com/): https://tampereella.vercel.app/fi

## Technologies Used

- **[Next.js 15](https://nextjs.org/)**: A powerful React framework for building fast, scalable web applications. The latest version (15) introduces improved performance, routing, and API support.
- **[Chakra UI 3](https://chakra-ui.com/)**: A modern React UI framework that provides a set of accessible, customizable, and composable components to build beautiful applications.
- **[next-intl](https://github.com/amannn/next-intl)**: A library for internationalization (i18n) in Next.js, providing a simple and flexible way to manage translations, locale switching, and formatting for multi-language support in your application.
- **TypeScript**: A statically typed superset of JavaScript that enhances development with type safety and auto-completion.
- **React Icons**: A library of popular icons for React applications, used to enrich the UI with scalable vector icons.

## Features

- **Dynamic Language Support**: The application supports multiple languages, automatically switching between Finnish and English based on user preferences.
- **Responsive Design**: Ensuring a nice user experience with mobile and desktop with a responsive user interface.
- **Dark Mode Support**: Dark mode support for those who don't want to get blinded ;)
- **Custom reusable components**: Custom reusable components for modularity. For example Card and Filter components.

## Explanation and thought process

- The webpage consists of a homepage and multiple content pages.
- I use reusable custom components for the content pages.
- Card component is used to display the content. Card component varies in size with restrictions. It has option to display Google Maps link and Website link. It has popover action for long descriptions and better readability. 
- Filter component is used in all content pages and it has options for single and multiselect.
- ScrollToTopButton is displayed when needed on the content pages to easily navigate to the top of the page.
- User can choose the language and prefered color mode from the TopBar.
- TopBar on mobile has logo and openable drawer with the navigation links and language and color mode selectors. On Desktop they are directly shown on the TopBar.
- Footer scales with the device size.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
