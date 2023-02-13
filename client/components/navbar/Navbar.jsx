import React from "react";
import styles from "./Navbar.module.css";
import img from "./images/shopping-cart.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.header}>
          <div className={styles.header_top}>
            <div className={styles.header_container}>
              <div className={styles.header_left}>
                <Image
                  src={img}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.image}
                />
                <h1 className={styles.heading}>MOON-DAILY</h1>
              </div>
              <div className={styles.header_center}>
                <form className={styles.header_form} method="get" action="/">
                  <div className={styles.form_categories}>
                    <select className={styles.form_control}>
                      <option value="All">All</option>
                      <option value="Smart Phone & Accessory">
                        Smart Phone & Accessory
                      </option>
                      <option value="Electronic equipment">
                        Electronic equipment
                      </option>
                      <option value="Laptop">Laptop</option>
                      <option value="Watch">Watch</option>
                      <option value="Household electrical appliances">
                        Household electrical appliances
                      </option>
                      <option value="Sport & Travel">Sport & Travel</option>
                      <option value="Mom & Babies">Mom & Babies</option>
                      <option value="Home & Lifestyle">Home & Lifestyle</option>
                      <option value="Beauty Products">Beauty Products</option>
                      <option value="Healthcare Products">
                        Healthcare Products
                      </option>
                      <option value="Books">Books</option>
                      <option value="Balo & Bags">Balo & Bags</option>
                      <option value="Pets Care Products">
                        Pets Care Products
                      </option>
                      <option value="Accessories & Jewelry">
                        Accessories & Jewelry
                      </option>
                    </select>
                  </div>
                  <div className={styles.form_center}>
                    <input
                      className={styles.form_input}
                      type="text"
                      placeholder="I'm shopping for..."
                    />
                    <div className={styles.form_button}>
                      <button className={styles.header_button}>Search</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.header_right}>
                <div className={styles.header_actions}>
                  <Link legacyBehavior href="/whishlist/Whishlist">
                    <a className={styles.header_extra}>
                      <i
                        className="fa-regular fa-heart"
                        style={{ fontSize: "33px", color: "#db6451" }}
                      ></i>
                      <span className={styles.header_item}>
                        <i className={styles.header_number}>0</i>
                      </span>
                    </a>
                  </Link>
                  <Link className={styles.header_extra} href="#">
                    <i
                      className="fa-solid fa-cart-plus"
                      style={{ fontSize: "33px", color: "#db6451" }}
                    ></i>
                    <span className={styles.header_item}>
                      <i className={styles.header_number}>0</i>
                    </span>
                    <div className={styles.desc}>No products in cart</div>
                  </Link>
                  <div className={styles.header_user}>
                    <div className={styles.user_left}>
                      <i
                        className="fa-regular fa-user"
                        style={{ fontSize: "33px", color: "#db6451" }}
                      ></i>
                    </div>
                    <div className={styles.user_right}>
                      <Link href="/login/Login">LOGIN</Link>
                      <Link href="/register/Register">REGISTER</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className={styles.nav}>
            <div className={styles.nav_container}>
              <div className={styles.nav_left}>
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
                    <a
                      className={styles.menu_heading}
                      href="/categories/Categories"
                    >
                      CATEGORIES
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ fontSize: "15px", paddingLeft: "10px" }}
                      ></i>
                    </a>
                    <ul className={styles.sub_menu}>
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
                    </ul>
                  </li>
                  <li className={styles.menu_item}>
                    <a
                      className={styles.menu_heading}
                      href="/products/Products"
                    >
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
                        <a href="/">Apple AirPods Pro</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/">Apple Pencil 1</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/">Apple 20W USB-C Power Adapter</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        Điện thoại Samsung Galaxy Z Flip4 5G 128GB
                        <a href="/"></a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/">
                          Tai nghe Samsung Galaxy Buds2 Pro Bluetooth
                        </a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/">Loa Bluetooth Di Động LG Xboomgo PL7</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/">
                          Máy giặt lồng ngang LG Inverter 9kg-FM1209S6W
                        </a>
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
                      <li className={styles.sub_menu1}>
                        <a href="/">Máy xay sinh tố Philips HR2223/00 700W</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/"> Máy ép trái cây Philips HR1811</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/"> Nồi áp suất điện tử 6L HD2137/65</a>
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
                        <a href="/">Smart Phone & Accessory</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/"> Electronic equipment</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/">Laptop</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        <a href="/">Watch</a>
                      </li>
                      <li className={styles.sub_menu1}>
                        Household electrical appliances
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
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.nav_right}>
                <a
                  href="/ordertracking/OrderTracking"
                  className={styles.nav_order}
                >
                  Tract your order
                </a>
                <div className={styles.nav_language}>
                  <i
                    className="fa-solid fa-globe"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <select className={styles.nav_select}>
                    <option value="English">English</option>
                    <option value="Tiếng Việt">Tiếng Việt</option>
                  </select>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
