import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import Router from 'next/router';

import { ThemeProvider } from '../context/theme';

import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

import '../styles/notifications.css';
import '../theme/COLORS.css';
import '../styles/globals.css';
import Wrapper from '../components/Wrapper';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}
