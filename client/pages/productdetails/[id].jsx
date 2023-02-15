import React, { useState } from "react";
import Head from "next/head";
import { axiosClient } from "../../libraries/axiosClient";
import { API_URL } from "../../constants/URL";

// import { useRouter } from "next/router";

export default function ProductDetails({ product }) {
  const [tab, setTab] = useState(0);
  // const router = useRouter();
  // const { productId } = router.query;
  // console.log("product", product);
  return (
    <>
      <div className="row" style={{ width: "1020px", marginLeft: "50px" }}>
        <Head>
          <title>ProductDetails</title>
        </Head>
        {/* <div>{product.name}</div> */}
        {/* <p>Product: {productId}</p> */}
        <div className="col-md-6">
          <img
            src={`${API_URL}/${product.images[tab]}`}
            alt=""
            className="d-block img-thumbnail rounded mt-4 w-100"
            style={{ height: "350px" }}
          />
          <div className="row mx-0" style={{ cursor: "pointer" }}>
            {product.images.map((img, index) => {
              return (
                <img
                  key={index}
                  src={`${API_URL}/${img}`}
                  alt=""
                  className="img-thumbnail rounded"
                  style={{ width: "20%", height: "80px" }}
                  onClick={() => {
                    setTab(index);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const products = await axiosClient.get("/products");
  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
}

// export async function getServerSideProps({ param: { id } }) {
//   console.log(id);
//   //   const products = await axiosClient("/products");

//   return {
//     props: {
//       // products, // will be passed to the page component as props
//     },
//   };
// }

export async function getStaticProps({ params: { id } }) {
  console.log("id", id);

  // const product = await axiosClient(`/products/${params.id}`);
  const product = await axiosClient(`/products/${id}`);
  console.log("product", product);
  // console.log("params", params);
  return {
    props: {
      product,
    },
  };
}
