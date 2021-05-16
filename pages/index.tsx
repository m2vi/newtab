import Head from 'next/head';
import { Bar } from '../engines/Bar';
import Image from '../components/Image';
import Nav from '../components/Nav';
import { ToastContainer } from 'react-toastify';
import Progress from '../components/Progress';
import { Bookmarks } from '../components/Bookmarks';

const Landing = () => {
  return (
    <>
      <Head>
        <title>New Tab</title>
      </Head>

      <Progress after={afterFinished} />

      <ToastContainer />
    </>
  );
};

export default Landing;

export const afterFinished = () => {
  return (
    <>
      <Bar />
      <Bookmarks />
      <Nav />
      <Image />
    </>
  );
};
