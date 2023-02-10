import React from "react";
import Head from "next/head";
import styles from "./ShopDefault.module.css";
import Image from "next/image";
import img from "./images/may giat.jpeg";
import img1 from "./images/sonsale.jpeg";
import img2 from "./images/maygiat.png";
import img3 from "./images/Dior.jpg";
import img4 from "./images/samsung.webp";
import img5 from "./images/apple.png";
import img6 from "./images/LG.webp";
import img7 from "./images/sharp.jpg";
import img8 from "./images/mac.jpg";
import img9 from "./images/panasonic.jpg";
import img10 from "./images/laptop.jpeg";
import img11 from "./images/dieuhoa.jpeg";
import img12 from "./images/lo nuong.jpeg";
import img13 from "./images/baby.jpeg";
import img14 from "./images/my pham.jpeg";
import img15 from "./images/thuc pham.jpeg";
import img16 from "./images/daychuyen.jpeg";
import img17 from "./images/hotel.jpeg";
import Product from "../../components/product/Product";
import img18 from "../../components/product/img/blockui7.1.jpg";
import img19 from "../../components/product/img/blockui7.2.jpg";
import img20 from "../../components/product/img/blockui7.3.jpg";
import img21 from "../../components/product/img/blockui7.4.jpg";
import img22 from "../../components/product/img/blockui7.5.jpg";
import img23 from "../../components/product/img/blockui7.6.jpg";

export default function ShopDefault() {
  return (
    <>
      <Head>
        <title>SHOP DEFAULT</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.shop_header}>
          <div className={styles.header_title}>
            <a className={styles.header_link} href="/">
              HOME
            </a>
            <a className={styles.header_link1} href="">
              SHOP DEFAULT
            </a>
          </div>
        </div>
        <div className={styles.shop_container}>
          <div className={styles.shop_banner}>
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className={styles.img_name}
                    src={img2}
                    alt=""
                    width={1650}
                    height={470}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className={styles.img_name}
                    src={img}
                    alt=""
                    width={1650}
                    height={470}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className={styles.img_name}
                    src={img1}
                    alt=""
                    width={1650}
                    height={470}
                  />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#e9822b",
                  }}
                ></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#e9822b",
                  }}
                ></span>
              </a>
            </div>
          </div>
          <div className={styles.shop_brand}>
            <a href="">
              <Image src={img3} width={150} height={70} alt="" />
            </a>
            <a href="">
              <Image src={img4} width={150} height={70} alt="" />
            </a>
            <a href="">
              <Image src={img5} width={150} height={70} alt="" />
            </a>
            <a href="">
              <Image src={img6} width={150} height={70} alt="" />
            </a>
            <a href="">
              <Image src={img7} width={150} height={70} alt="" />
            </a>
            <a href="">
              <Image src={img8} width={150} height={70} alt="" />
            </a>
            <a href="">
              <Image src={img9} width={150} height={70} alt="" />
            </a>
          </div>
          <div className={styles.shop_categories}>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img10}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>
                  Smart Phone & Accessory
                </h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Desktop PC
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Laptop
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Tablet
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Phone
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img11}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>Electronic Equipment</h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Air Conditioners
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Washing Machines
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Office Electronics
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      TV Televisions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img12}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>
                  Household electrical appliances
                </h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Blender
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Gas Stove
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Electric Fan
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Oil-free Fryer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img13}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>Mom & Babies</h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Newborn Toys
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Diaper Towel
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Baby Socks
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Beanie
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img14}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>Beauty Products</h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Lipstick
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Sunscreen
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Cream Liner
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Cleanser
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img15}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>Healthcare Products</h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Face Lift Machine
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Massage Machine
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Shower Gel
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Exfoliating Pad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img16}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>Accessories & Jewelry</h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Watch
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Necklace
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Ring
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Earring
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group_menu}>
              <div className={styles.group_left}>
                <Image
                  src={img17}
                  alt=""
                  width={100}
                  height={120}
                  style={{ padding: "20px 0 0 5px" }}
                />
              </div>
              <div className={styles.group_right}>
                <h3 className={styles.group_heading}>Sport & Travel</h3>
                <ul className={styles.group_list}>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Plane Ticket
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Sport Shoes
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Hotels & Motels{" "}
                    </a>
                  </li>
                  <li className={styles.group_item}>
                    <a className={styles.links_item} href="/shop/ShopDefault">
                      Sportswear
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.layout_shop}>
            <Product
              name={"BEST SALE ITEMS"}
              icon2={"fa-solid fa-chevron-left"}
              icon3={"fa-solid fa-chevron-right"}
              number={"-39%"}
              name2={"YOUNG SHOP"}
              price={"$1,422.7"}
              price1={"$1,025.5"}
              text={"18% off"}
              text1={"LG White Front Load Steam Washer"}
              icon={"fa-solid fa-star"}
              icon1={"fa-regular fa-star"}
              bgColor={"rgb(251 188 42)"}
              bgColor1={"#e0dedefb"}
              widthColor={180}
              text2={"Sold: 10"}
              img={img18}
            />
            <Product
              number={"-13%"}
              name2={"YOUNG SHOP"}
              price={"$96"}
              price1={"$85"}
              text={"18% off"}
              text1={"Edifier Powered Bookshelf Speakers"}
              icon={"fa-solid fa-star"}
              icon1={"fa-regular fa-star"}
              bgColor={"rgb(251 188 42)"}
              bgColor1={"#e0dedefb"}
              widthColor={160}
              text2={"Sold: 15"}
              img={img19}
            />
            <Product
              number={"-37%"}
              name2={"YOUNG SHOP"}
              price={"$62.99"}
              price1={"$45.9"}
              text={"18% off"}
              text1={"Amcrest Security Camera in White Color"}
              icon={"fa-solid fa-star"}
              icon1={"fa-regular fa-star"}
              bgColor={"rgb(251 188 42)"}
              bgColor1={"#e0dedefb"}
              widthColor={140}
              text2={"Sold: 20"}
              img={img20}
            />
            <Product
              number={"-27%"}
              name2={"YOUNG SHOP"}
              price={"$41.99"}
              price1={"$32.99"}
              text={"18% off"}
              text1={"Grand Slam Indoor Of Show Jumping Novel"}
              icon={"fa-solid fa-star"}
              icon1={"fa-regular fa-star"}
              bgColor={"rgb(251 188 42)"}
              bgColor1={"#e0dedefb"}
              widthColor={130}
              text2={"Sold: 22"}
              img={img21}
            />
            <Product
              number={"-6%"}
              name2={"YOUNG SHOP"}
              price={"$106.96"}
              price1={"$100.99"}
              text={"18% off"}
              text1={"Sound Intone I65 Earphone White Verson"}
              icon={"fa-solid fa-star"}
              icon1={"fa-regular fa-star"}
              bgColor={"rgb(251 188 42)"}
              bgColor1={"#e0dedefb"}
              widthColor={180}
              text2={"Sold: 10"}
              img={img22}
            />
            <Product
              number={"-18%"}
              name2={"YOUNG SHOP"}
              price={"$670.2"}
              price1={"$567.8"}
              text={"18% off"}
              text1={"Korea Long Sofa Fabric In Blue Navy Color"}
              icon={"fa-solid fa-star"}
              icon1={"fa-regular fa-star"}
              bgColor={"rgb(251 188 42)"}
              bgColor1={"#e0dedefb"}
              widthColor={200}
              text2={"Sold: 79"}
              img={img23}
            />
          </div>
        </div>
      </div>
    </>
  );
}
