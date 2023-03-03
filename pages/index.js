import Head from 'next/head';
import { ThemeSelector } from "../components";
import { useState, useEffect } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let localCount = localStorage.getItem("count");
    if (localCount != null) {
      setCount(parseInt(localStorage.getItem("count")));
    } else {
      setCount(0);
    }
  }, [])

  useEffect(() => {
    if (count) {
      localStorage.setItem("count", count);
    }
  }, [count]);
  return (
    <>
      <Head>
        <title>Hello this is wonderful ui world</title>
      </Head>
      <>

        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                  </a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Move Page</a>

            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">

          </div>
          <div className="navbar-end">
            <ThemeSelector />
            <a className="btn">Get started</a>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
          <div className="card-body">
            <h2 className="card-title">Move Page counter!</h2>
            <p>Current count : {count}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={() => {
                setCount(count + 1)
              }} >+</button>
              <button className="btn btn-info" onClick={() => {
                setCount(count - 1)
              }} >-</button>
            </div>
          </div>
        </div>

      </>
    </>
  );
}
