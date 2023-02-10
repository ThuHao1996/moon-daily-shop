import React from "react";
import Head from "next/head";
import styles from "./Whishlist.module.css";

export default function Whishlist() {
  return (
    <>
      <Head>
        <title>WHISHLIST</title>
      </Head>
      <div className={styles.account_container}>
        <div className={styles.account_header}>
          <div className={styles.account_title}>
            <a className={styles.account_link} href="/">
              HOME
            </a>
            <a className={styles.account_link1} href="">
              Whishlist
            </a>
          </div>
        </div>
        <h1 className={styles.account_heading}>WHISHLIST</h1>
        <div className={styles.account_name}>Wishlist is empty!</div>
      </div>
    </>
  );
}
