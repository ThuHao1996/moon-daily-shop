import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'
import styles from "./homepage/HomePage.module.css";
import img from "./homepage/images/dieuhoa.jpeg";
import img1 from "./homepage/images/tulanh.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "./homepage/images/sofa.jpeg";

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
                      style={{ height: "400px", width: "100%" }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={img1}
                      className="d-block"
                      alt="dieuhoa"
                      style={{ height: "400px", width: "100%" }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={img2}
                      className="d-block"
                      alt="tulanh"
                      style={{ height: "400px", width: "100%" }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
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
            <div className={styles.banner_right}></div>
          </div>
        </div>
      </main>
    </>
  );
}
