import Head from 'next/head';
import { Navbar, SampleCounter, Footer } from "../components";

export default function Home() {

  return (
    <>
      <Head>
        <title>Hello this is wonderful ui world</title>
      </Head>
      <>
        <Navbar />
        <div className='p-5 min-h-full'>
          <SampleCounter />
        </div>
        <Footer />
      </>
    </>
  );
}
