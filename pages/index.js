import Head from 'next/head';
import SampleCounter from "../components/sampleCounter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello this is wonderful ui world</title>
      </Head>
      <SampleCounter />
    </>
  );
}
