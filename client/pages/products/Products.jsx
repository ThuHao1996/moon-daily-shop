import Head from "next/head";
import React from "react";
import numeral from "numeral";
import styles from "./Products.module.css";
import { axiosClient } from "../../libraries/axiosClient";
import { API_URL } from "@/constants/URL";

export default function Products({ products }) {
  const userLink = (id) => {
    return (
      <>
        <a
          href={`/productdetails/${id}`}
          className="btn btn-info"
          style={{ marginRight: "5px", flex: 1, color: "#fff" }}
        >
          View
        </a>
        <button
          className="btn btn-success"
          style={{ marginLeft: "5px", flex: 1 }}
        >
          Buy
        </button>
      </>
    );
  };
  return (
    <>
      <Head>
        <title>PRODUCTS</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.header_title}>
            <a className={styles.header_link} href="/">
              HOME
            </a>
            <a className={styles.header_link1} href="">
              PRODUCTS
            </a>
          </div>
        </div>
        <div className={styles.product_container}>
          {products &&
            products.map((product) => {
              // console.log(product);
              return (
                <div key={product._id}>
                  <div className="card" style={{ width: "21rem" }}>
                    <img
                      src={`${API_URL}/${product.images[0]}`}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h3 className="card-title">{product.name}</h3>
                      <div className="d-flex justify-content-between mx-0">
                        <p className={styles.product_price}>
                          {numeral(product.price).format("0,0")}đ
                        </p>
                        <p className="text-danger">
                          Stock: {numeral(product.stock).format("0,0.0")}
                        </p>
                      </div>

                      <p className="card-text">{product.description}</p>
                      <div className="d-flex justify-content-between mx-0">
                        {userLink(product._id)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const products = await axiosClient.get("/products");

  return {
    props: {
      products,
    },

    revalidate: 3600,
  };
}
