import Head from 'next/head';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change'


export default function Home() {
  const [count, setCount] = useState(0);
  const themes = [
    "winter", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee"
  ];

  useEffect(() => {
    let localCount = localStorage.getItem("count");
    if (localCount != null) {
      setCount(parseInt(localStorage.getItem("count")));
    } else {
      setCount(0);
    }
    themeChange(false);
  }, [])

  useEffect(() => {
    if (count) {
      localStorage.setItem("count", count);
    }
  }, [count]);

  return (

    <>
      <Head>
        <title>Hello world</title>
      </Head>


      <div className="container mx-auto">

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
          </div>
          <div className="navbar-center hidden lg:flex">
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
          <div className="navbar-end">

            <select className="select" data-choose-theme>
              {
                themes.map((name, index) => {
                  return (<option key={index} value={name}>{name}</option>);
                })
              }
            </select>
            <a className="btn">Get started</a>
          </div>
        </div>

        <div className="hero min-h-fit bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="card w-96 bg-base-100 shadow-xl mx-auto">
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
            </div>
          </div>
        </div>



      </div>
    </>
  );
}
