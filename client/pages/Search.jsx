// import React, { useState, useEffect } from "react";
// import filterSearch from "./utils/filterSearch";
// import { useRouter } from "next/router";
// import { axiosClient } from "../libraries/axiosClient";

// export default function Search({ state, categories }) {
//   const [title, setTitle] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   // const { categories } = state;

//   const router = useRouter();

//   const handleCategory = (e) => {
//     setCategory(e.target.value);
//     filterSearch({ router, category: e.target.value });
//   };

//   useEffect(() => {
//     // console.log(search);
//     filterSearch({ router, search: search ? search.toLowerCase() : "all" });
//   }, [search]);
//   return (
//     <>
//       <form
//         style={{
//           display: "flex",
//           flexFlow: "row nowrap",
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: "14%",
//             borderRight: "1px solid #ccc",
//           }}
//           className="col-md-2"
//         >
//           <select
//             style={{
//               height: "100%",
//               width: "142px",
//               color: "#202020",
//               border: "none",
//               outline: "none",
//               fontSize: "14px",
//               backgroundColor: "#fff",
//               padding: "0 10px",
//             }}
//             value={category}
//             onChange={handleCategory}
//           >
//             <option value="All">All Categories</option>
//             {categories &&
//               categories.map((c) => {
//                 <option key={c._id} value={c._id}>
//                   {c.name}
//                 </option>;
//               })}
//             {/* <option value="All">All</option>
//             <option value="Smart Phone & Accessory">
//               Smart Phone & Accessory
//             </option>
//             <option value="Electronic equipment">Electronic equipment</option>
//             <option value="Laptop">Laptop</option>
//             <option value="Watch">Watch</option>
//             <option value="Household electrical appliances">
//               Household electrical appliances
//             </option>
//             <option value="Sport & Travel">Sport & Travel</option>
//             <option value="Mom & Babies">Mom & Babies</option>
//             <option value="Home & Lifestyle">Home & Lifestyle</option>
//             <option value="Beauty Products">Beauty Products</option>
//             <option value="Healthcare Products">Healthcare Products</option>
//             <option value="Books">Books</option>
//             <option value="Balo & Bags">Balo & Bags</option>
//             <option value="Pets Care Products">Pets Care Products</option>
//             <option value="Accessories & Jewelry">Accessories & Jewelry</option> */}
//           </select>
//         </div>
//         <div style={{ width: "86%", display: "flex" }} className="col-md-8">
//           <input
//             style={{
//               height: "100%",
//               width: "89%",
//               outline: "none",
//               border: "none",
//               fontSize: "15px",
//               paddingLeft: "18px",
//             }}
//             type="text"
//             // className="form-control"
//             placeholder="I'm shopping for..."
//             list="title_product"
//             value={search.toLowerCase()}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           {/* <datalist id="title_product">
//             <option value="name">Title Name</option>
//           </datalist> */}
//           {/* <div style={{ display: "flex" }}>
//             <button
//               type="submit"
//               style={{
//                 width: "110px",
//                 backgroundColor: "#5385df",
//                 color: "#fff",
//                 border: "none",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 borderBottomRightRadius: "3px",
//                 borderTopRightRadius: "3px",
//               }}
//             >
//               Search
//             </button>
//           </div> */}
//         </div>
//       </form>
//     </>
//   );
// }

// export async function getStaticProps(context) {
//   const products = await axiosClient.get("/products");
//   const categories = await axiosClient.get("/categories");

//   return {
//     props: {
//       products,
//       categories,
//     },

//     // revalidate: 3600,
//   };
// }
