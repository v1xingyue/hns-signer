import Head from 'next/head';
import { Navbar, SampleCounter, Footer } from "../components";
import { ethers } from "ethers";
import { useEffect, useState } from 'react';


export default function Home() {

  const [account, updateAccount] = useState("");
  const [pubKey, updatePubKey] = useState("");
  const [domain, updateDomain] = useState("");
  const [tokenId, updateTokenId] = useState("");

  const checkIsAuthenticated = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("install metamask");
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length > 0) {
        updateAccount(accounts[0]);
      }

      // const pubKey = await ethereum.request({
      //   method: 'eth_getEncryptionPublicKey', params: [accounts[0]]
      // })
      // updatePubKey(pubKey);

    } catch (error) {
      console.log(error);
    }
  };

  const nameTokenId = (domainName) => {
    const normalilze = ethers.ensNormalize(domainName);
    const domainHash = ethers.namehash(normalilze);
    return BigInt(domainHash).toString();
  }

  useEffect(async () => {
    checkIsAuthenticated();
  }, [account]);

  return (
    <>
      <Head>
        <title>Hello this is wonderful ui world</title>
      </Head>
      <>
        <Navbar />
        <div className='p-5 min-h-full'>
          <p>
            Account : {account}
          </p>
          <p>
            Public key : {pubKey}
          </p>
          <p>
            Name : <input value={domain} onChange={(e) => {
              updateDomain(e.target.value);
            }} />
          </p>
          <p>
            Name token id : {tokenId}
          </p>

          <button className='btn btn-primary' onClick={() => {
            let tokenId = nameTokenId(domain);
            updateTokenId(tokenId);
          }} >Name owner</button>

        </div>
        <Footer />
      </>
    </>
  );
}
