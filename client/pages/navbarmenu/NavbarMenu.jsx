import React from "react";
import styles from "./NavbarMenu.module.css";
import { axiosClient } from "../../libraries/axiosClient";

export default function NavbarMenu({ categories, products, suppliers }) {
  console.log("categories", categories);
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <a className={styles.menu_heading} href="/">
            HOME
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "15px", paddingLeft: "10px" }}
            ></i>
          </a>
        </li>
        <li className={styles.menu_item}>
          <a className={styles.menu_heading} href="/categories/Categories">
            CATEGORIES
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "15px", paddingLeft: "10px" }}
            ></i>
          </a>
          <ul className={styles.sub_menu}>
            {categories &&
              categories.map((c) => {
                console.log("c", c);
                return (
                  <li key={c._id} className={styles.menu_item}>
                    <a href="">{c.name}</a>
                  </li>
                );
              })}
          </ul>

          {/* <ul className={styles.sub_menu}>
            <li className={styles.sub_menu1}>
              <a href="/">Smart Phone & Accessory</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/"> Electronic Equipment</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Laptop</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Watch</a>
            </li>
            <li className={styles.sub_menu1}>
              Household Electrical Appliances
              <a href="/"></a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Sport & Travel</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Mom & Babies</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Home & Lifestyle</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Beauty Products</a>
            </li>
            <li className={styles.sub_menu1}>
              Healthcare Products
              <a href="/"></a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Books</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Balo & Bags</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/"> Pets Care Products</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/"> Accessories & Jewelry</a>
            </li>
          </ul> */}
        </li>
        <li className={styles.menu_item}>
          <a className={styles.menu_heading} href="/products/Products">
            PRODUCTS
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "15px", paddingLeft: "10px" }}
            ></i>
          </a>
          <ul className={styles.sub_menu}>
            <li className={styles.sub_menu1}>
              <a href="/">Apple Iphone 14 Pro Max 128GB</a>
            </li>
            <li className={styles.sub_menu1}>
              Điện thoại Samsung Galaxy Z Flip4 5G 128GB
              <a href="/"></a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Tai nghe Samsung Galaxy Buds2 Pro Bluetooth</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Loa Bluetooth Di Động LG Xboomgo PL7</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Máy giặt lồng ngang LG Inverter 9kg-FM1209S6W</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Google Tivi Sony 4K 65 inch KD-65X75K</a>
            </li>
            <li className={styles.sub_menu1}>
              Nồi chiên không dầu Philips HD9270/90-6.2L
              <a href="/"></a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Bếp nướng điện Nagakawa NAG3104</a>
            </li>
          </ul>
        </li>
        <li className={styles.menu_item}>
          <a className={styles.menu_heading} href="">
            SUPPLIERS
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "15px", paddingLeft: "10px" }}
            ></i>
          </a>
          <ul className={styles.sub_menu}>
            <li className={styles.sub_menu1}>
              <a href="/">Samsung</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/"> Apple</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Gucci</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Louis Vuitton</a>
            </li>
            <li className={styles.sub_menu1}>
              Sharp
              <a href="/"></a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Mac</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Panasonic</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">LG</a>
            </li>
            <li className={styles.sub_menu1}>
              <a href="/">Oppo</a>
            </li>
            <li className={styles.sub_menu1}>
              Dior
              <a href="/"></a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  const products = await axiosClient.get("/products");
  const categories = await axiosClient.get("/categories");
  const suppliers = await axiosClient.get("/suppliers");

  return {
    props: {
      products,
      categories,
      suppliers,
    },

    // revalidate: 3600,
  };
}
