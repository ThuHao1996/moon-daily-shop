import Head from "next/head";
import React, { useContext, useState } from "react";
import numeral from "numeral";
import styles from "./Products.module.css";
import { axiosClient } from "../../libraries/axiosClient";
import { API_URL } from "../../constants/URLS";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import { Pagination } from "antd";
import { Avatar, Button, List, Skeleton } from "antd";
const count = 3;

export default function Products({ products }) {
  //---------Thêm sản phẩm vào giỏ hàng----------------
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  // const [products, setProducts] = useState(products);
  const [current, setCurrent] = useState(3);
  // const [page, setPage] = useState(1);
  // const onChange = (page) => {
  //   if(page === current)
  //   console.log(page);
  //   setCurrent(current + 1);
  // };
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  // const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
        }))
      )
    );
  };

  // const loadMore =
  // !initLoading && !loading ? (

  // const userLink = (id) => {
  //   return (
  //     <>
  //       <a
  //         href={`/products/${id}`}
  //         className="btn btn-info"
  //         style={{ marginRight: "5px", flex: 1, color: "#fff" }}
  //       >
  //         View
  //       </a>

  //       <button
  //         key={product._id}
  //         className="btn btn-success"
  //         style={{ marginLeft: "5px", flex: 1 }}
  //         disabled={product.stock === 0 ? true : false}
  //         onClick={() => dispatch(addToCart(product, cart))}
  //       >
  //         Buy
  //       </button>
  //     </>
  //   );
  // };

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
        <div>
          <div className={styles.product_container}>
            {products &&
              products.map((product) => {
                return (
                  <div key={product._id} style={{ height: "650px" }}>
                    <div className="card" style={{ width: "21rem" }}>
                      <img
                        src={`${API_URL}/${product.imageUrl}`}
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <div className="d-flex justify-content-between mx-0">
                          <p className={styles.product_price}>
                            {numeral(product.price).format("0,0$")}
                          </p>
                          <div>
                            {product.stock > 0 ? (
                              <span className="text-danger">
                                Stock: {numeral(product.stock).format("0,0.0")}
                              </span>
                            ) : (
                              <span className="text-danger">OutStock</span>
                            )}
                          </div>
                        </div>
                        <p style={{ color: "#ed14ed" }}>Sold: {product.sold}</p>

                        <p className="card-text">{product.description}</p>
                        <div className="d-flex justify-content-between mx-0">
                          <a
                            href={`/products/${product._id}`}
                            className="btn btn-info"
                            style={{
                              marginRight: "5px",
                              flex: 1,
                              color: "#fff",
                            }}
                          >
                            View
                          </a>

                          <button
                            key={product._id}
                            className="btn btn-success"
                            style={{ marginLeft: "5px", flex: 1 }}
                            //--------Nếu stock=0 thì vô hiệu hóa button Buy ở dưới--------
                            disabled={product.stock === 0 ? true : false}
                            //---------Thêm sản phẩm vào giỏ hàng--------------
                            onClick={() => dispatch(addToCart(product, cart))}
                          >
                            Buy
                          </button>
                          {/* {userLink(product._id)} */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* <div className={styles.product_container}>
       <List  
          className="demo-loadmore-list"
          //loading={initLoading}
         // loadMore={loadMore}
          itemLayout="horizontal"
          dataSource={products}
          renderItem={(p) => (
            // console.log("p", p)
            <List.Item
            // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            >
              <div key={p._id} style={{ height: "650px" }}>
                <div className="card" style={{ width: "21rem" }}>
                
                  <img
                    src={`${API_URL}/${p.imageUrl}`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="card-title">{p.name}</div>
                    <div className="d-flex justify-content-between mx-0">
                      <div>{numeral(p.price).format("0,0$")}</div>
                      <div>
                        {p.stock > 0 ? (
                          <span className="text-danger">
                            Stock: {numeral(p.stock).format("0,0.0")}
                          </span>
                        ) : (
                          <span className="text-danger">OutStock</span>
                        )}
                      </div>
                    </div>
                    <p style={{ color: "#ed14ed" }}>Sold: {p.sold}</p>

                    <p className="card-text">{p.description}</p>
                    <div className="d-flex justify-content-between mx-0">
                      <a
                        href={`/products/${p._id}`}
                        className="btn btn-info"
                        style={{ marginRight: "5px", flex: 1, color: "#fff" }}
                      >
                        View
                      </a>

                      <button
                        key={p._id}
                        className="btn btn-success"
                        style={{ marginLeft: "5px", flex: 1 }}
                        //--------Nếu stock=0 thì vô hiệu hóa button Buy ở dưới--------
                        disabled={p.stock === 0 ? true : false}
                        //---------Thêm sản phẩm vào giỏ hàng--------------
                        onClick={() => dispatch(addToCart(p, cart))}
                      >
                        Buy
                      </button>
                    </div>
                  </div>

                </div>
              </div>
              {products.length > 3 ? (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 12,
                    height: 32,
                    lineHeight: "32px",
                  }}
                >
                  <Button>loading more</Button>
                </div>
              ) : null}
            </List.Item>
          )}
        />
                </div>*/}
    </>
  );
}

export async function getStaticProps(context) {
  // let page = query.page || 1;
  // const category = query.category || "all";
  // const sort = query.sort || "";
  // const search = query.search || "all";
  // const products = await axiosClient.get(
  //   `/products?limit=${
  //     page * 6
  //   }$category=${category}$sort=${sort}$title=${search}`
  // );
  const products = await axiosClient.get("/products");

  return {
    props: {
      products,
    },

    revalidate: 3600,
  };
}
