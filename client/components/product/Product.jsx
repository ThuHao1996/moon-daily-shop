import React from "react";
import styles from "./Product.module.css";
import Image from "next/image";

export default function Product(props) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.heading}>{props.name}</div>
        <div className={styles.icon_list}>
          <a href="" className="carousel-prev" style={{ paddingRight: "12px" }}>
            <i className={`${styles.icon3} ${props.icon2}`}></i>
          </a>
          <a href="" className="carousel-next">
            <i className={`${styles.icon3} ${props.icon3}`}></i>
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.img} src={props.img} alt="" />
        <div className={styles.number}>{props.number}</div>
        <div className={styles.name2}>{props.name2}</div>
        <div className={styles.price}>
          <div className={styles.price1}>{props.price}</div>
          <div className={styles.price2}>{props.price1}</div>
          <div className={styles.text}>{props.text}</div>
        </div>
        <div className={styles.text1}>{props.text1}</div>
        <div className={styles.icon}>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon1} ${props.icon}`}></div>
          <div className={`${styles.icon2} ${props.icon1}`}></div>
        </div>
        <div className={styles.item}>
          <div
            style={{ backgroundColor: props.bgColor, width: props.widthColor }}
          ></div>
          <div
            className={styles.item2}
            style={{ backgroundColor: props.bgColor1 }}
          ></div>
        </div>
        <div className={styles.text2}>{props.text2}</div>
      </div>
    </>
  );
}
