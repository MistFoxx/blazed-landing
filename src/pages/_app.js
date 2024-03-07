import Head from 'next/head';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '@/components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-lightbg">
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Blazed</title>
      </Head>
      <Header />
      <div className="m-auto w-11/12">
      <Component {...pageProps} />  
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default MyApp;
