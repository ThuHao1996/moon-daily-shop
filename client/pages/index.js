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
  return (
    <>
      <Head>
        <title>MOON-DAILY</title>
      </Head>

      <main className={styles.home_page}>
        <div className={styles.home_banner}>
          <div className={styles.banner_container}>
            <div className={styles.banner_left}>
              {/* <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src={img}
                  className="d-block w-100"
                  alt="dieuhoa"
                ></Image>
              </div>
              <div className="carousel-item">
                <Image
                  src={img1}
                  className="d-block w-100"
                  alt="tulanh"
                ></Image>
              </div>
              <div className="carousel-item">
                <Image
                  src={img2}
                  className="d-block w-100"
                  alt="sofa"
                ></Image>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
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
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
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
                    <Image src={img} className="d-block w-100" alt="sofa" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Image src={img1} className="d-block w-100" alt="dieuhoa" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <Image src={img2} className="d-block w-100" alt="tulanh" />
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
              {/* <div id="demo" className="carousel slide" data-ride="carousel">
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
                      src={img}
                      alt="Los Angeles"
                      width="1230"
                      height="450"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image src={img1} alt="Chicago" width="1230" height="450" />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={img2}
                      alt="New York"
                      width="1230"
                      height="450"
                    />
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div> */}
            </div>
            <div className={styles.banner_right}></div>
          </div>
        </div>
      </main>
    </>
  );
}
