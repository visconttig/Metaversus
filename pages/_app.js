import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />

      <meta 
  property="og:title"
  content="Metaversus - By Geronimo Viscontti." 
/><meta 
  name="image" 
  property="og:image" 
  content="%PUBLIC_URL%/metaversus-project.png" 
/><meta 
  property="og:description" 
  content="A beautiful Next.js app with animations and more."
/><meta 
  property="og:url" 
  content="https://metaversus-qknxe2d1w-visconttig.vercel.app/" 
/>

    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
