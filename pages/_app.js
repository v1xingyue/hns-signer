import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component data-theme="dark"  {...pageProps} />;
}

export default MyApp;
