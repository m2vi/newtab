import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import Favicon from '../components/Favicon';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='de-AT'>
        <Head>
          <Favicon />
          <link rel='preload' href='/icons/DuckDuckGo.svg' as='image' />
          <link rel='preload' href='/icons/Google.svg' as='image' />
          <link rel='preload' href='/icons/MsBing.svg' as='image' />
        </Head>
        <body className='theme-dark'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
