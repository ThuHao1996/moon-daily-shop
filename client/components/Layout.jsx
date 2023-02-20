import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Modal from "./Modal";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Modal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
