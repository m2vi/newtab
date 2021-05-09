import Head from 'next/head';
import { Bar } from '../components/Bar';
import Image from '../components/Image';
import Nav from '../components/Nav';

import { useContext, useEffect } from 'react';
import { detectTheme, ThemeContext } from '../context/theme';

export default function Home() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    theme.dispatch({
      type: detectTheme(),
    });
  }, []);

  return (
    <>
      <Head>
        <title>New Tab</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Bar Engine='DuckDuckGo' />
      <Nav className='absolute bottom-0 right-0' />
      <Image />
    </>
  );
}
