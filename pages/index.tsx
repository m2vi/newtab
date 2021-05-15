import Head from 'next/head';
import { Bar } from '../engines/Bar';
import Image from '../components/Image';
import Nav from '../components/Nav';
import { ToastContainer } from 'react-toastify';
import Progress from '../components/Progress';

export default function Home() {
  return (
    <>
      <Head>
        <title>New Tab</title>
      </Head>

      <Progress after={afterFinished} />

      <ToastContainer />
    </>
  );
}

export const afterFinished = () => {
  return (
    <>
      <Bar />
      <Nav />
      <Image />
    </>
  );
};
