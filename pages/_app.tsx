import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import Router from 'next/router';

import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../theme/COLORS.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
