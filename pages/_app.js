import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (
    <div className="md:container md:mx-auto bg-slate-200 rounded shadow" >
      <Component data-theme="dark"  {...pageProps} />
    </div >
  )
}

export default MyApp;
