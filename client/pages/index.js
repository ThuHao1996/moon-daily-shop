import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'
import styles from "./homepage/HomePage.module.css";
import img from "./homepage/images/maylanh.jpg";
import img1 from "./homepage/images/tivi.png";
import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "./homepage/images/sofa.jpg";
import img3 from "./homepage/images/iphone.jpg";
import img4 from "./homepage/images/bepga.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const toggleCarousel = (action) => {
    const { Carousel } = require("bootstrap");
    const carousel = new Carousel("#demo");
    if (action === "next") {
      carousel.next();
    } else {
      carousel.prev();
    }
  };

  return (
    <>
      <Head>
        <title>MOON-DAILY</title>
      </Head>

      <main className={styles.home_page}>
        <div className={styles.home_banner}>
          <div className={styles.banner_container}>
            <div className={styles.banner_left}>
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="false"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      src={img}
                      className="d-block"
                      alt="sofa"
                      style={{ height: "450px", width: "100%" }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <button className={styles.carousel_button}>
                        <a href="/shop/ShopDefault">SHOP NOW</a>
                      </button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={img1}
                      className="d-block"
                      alt="dieuhoa"
                      style={{ height: "450px", width: "100%" }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <button className={styles.carousel_button}>
                        <a href="/shop/ShopDefault">SHOP NOW</a>
                      </button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={img2}
                      className="d-block"
                      alt="tulanh"
                      style={{ height: "450px", width: "100%" }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <button className={styles.carousel_button}>
                        <a href="/shop/ShopDefault">SHOP NOW</a>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className={styles.banner_right}>
              <a href="/shop/ShopDefault">
                <Image
                  src={img3}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    marginBottom: "50px",
                  }}
                />
              </a>
              <a href="/shop/ShopDefault">
                <Image
                  src={img4}
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
              </a>
            </div>
          </div>
          <div className={styles.banner_features}>
            <div className={styles.banner_container}>
              <div className={styles.features_block}>
                <div className={styles.block_item}>
                  <div className={styles.block_left}>
                    <i
                      className="fa-solid fa-truck"
                      style={{
                        fontSize: "45px",
                        color: "orange",
                      }}
                    ></i>
                  </div>
                  <div className={styles.block_right}>
                    <h2 className={styles.block_heading}>Free Delivery</h2>
                    <span className={styles.block_desc}>
                      For all oders over 2.000.000đ
                    </span>
                  </div>
                </div>
                <div className={styles.block_item}>
                  <div className={styles.block_left}>
                    <i
                      className="fa-solid fa-dollar-sign"
                      style={{
                        fontSize: "45px",
                        color: "orange",
                      }}
                    ></i>
                  </div>
                  <div className={styles.block_right}>
                    <h2 className={styles.block_heading}>Discount Code</h2>
                    <span className={styles.block_desc}>
                      Many attractive discount codes
                    </span>
                  </div>
                </div>
                <div className={styles.block_item}>
                  <div className={styles.block_left}>
                    <i
                      className="fa-solid fa-cloud-bolt"
                      style={{
                        fontSize: "45px",
                        color: "orange",
                      }}
                    ></i>
                  </div>
                  <div className={styles.block_right}>
                    <h2 className={styles.block_heading}>Hunting Time Frame</h2>
                    <span className={styles.block_desc}>
                      Unlimited sale hunting
                    </span>
                  </div>
                </div>
                <div className={styles.block_item}>
                  <div className={styles.block_left}>
                    <i
                      class="fa-solid fa-message"
                      style={{
                        fontSize: "45px",
                        color: "orange",
                      }}
                    ></i>
                  </div>
                  <div className={styles.block_right}>
                    <h2 className={styles.block_heading}>24/7 Support</h2>
                    <span className={styles.block_desc}>Dedicated support</span>
                  </div>
                </div>
                <div className={styles.block_item}>
                  <div className={styles.block_left}>
                    <i
                      className="fa-solid fa-arrow-rotate-left"
                      style={{
                        fontSize: "45px",
                        color: "orange",
                        margin: "0 20px",
                      }}
                    ></i>
                  </div>
                  <div className={styles.block_right}>
                    <h2 className={styles.block_heading}>30 Days Return</h2>
                    <span className={styles.block_desc}>
                      If the fault is caused by the manufacturer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
