import '../styles/global.css';
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <div className="hero min-h-fit bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <Component data-theme="dark"  {...pageProps} />;
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp;
