
import React, { Component } from 'react'
import RenderListProduct from './Component/RenderListProduct/RenderList';

import HomeLayout from './Component/HomeLayout/Home';
import ExShoeStore from "./Component/Props/ExShoeStore/ShoeStore";
import Modal from "./Component/Props/Modal/ViewShoeDetail";
import ItemCart from './Component/RenderListProduct/ItemCart';
import ListProductItem from './Component/RenderListProduct/ListItem';
import ProductItem from './Component/Props/ExShoeStore/ProductItem';
import ProductListItem from './Component/Props/ExShoeStore/ProductListItem';
import CartShoe from './Component/Props/ExShoeStore/CartShoe';
import ShoeStore from './Component/Props/ExShoeStore/ShoeStore';


export default class index extends Component {
  render() {
    return (
      <div>
        <HomeLayout />
      
      <RenderListProduct />
      <ExShoeStore/> 
      <Modal />
      <ItemCart />
      <ListProductItem />
      <ProductItem />
      <ProductListItem />
      <CartShoe />
      <ShoeStore /> 

      </div>
    )
  }
}

  



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';
// import ExShoeStore from './components/Props/ExShoeStore/ExShoeStore';
// import HomeLayout from './components/HomeLayout/HomeLayout';
// import RenderListProduct from "./Component/RenderListProduct/RenderList";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// // jsx : => html được viết trong file js (nền js) được gọi là jsx
// // 2 loại function component , class component
// root.render(
//   <BrowserRouter>
//     {/* Những thẻ nào để ngoài Routes thì luôn luôn được load lên */}
//     {/* Thẻ Navlink (của react router dom) để di chuyển giữa các trang trong react */}
//     {/* isActive sẽ trả về true khi router đó đang active, ngược lại sẽ trả về false */}
//     <NavLink
     
//       style={(props) => {
//         if (props.isActive) {
//           return {
//             textDecoration: 'none',
//           };
//         }
//       }}
//       to="/shoe-store"
//     >
//       Bài tập shoe store
//     </NavLink>
//     <NavLink
//       className={(props) => {
//         if (props.isActive) {
//           return 'text-warning';
//         } else {
//           return 'text-danger';
//         }
//       }}
//       to="/bt-change-color"
//     >
//       Bài tập đổi màu
//     </NavLink>
//     <NavLink
//       className={(props) => {
//         if (props.isActive) {
//           return 'text-warning';
//         } else {
//           return 'text-danger';
//         }
//       }}
//       to="/bt-change-car"
//     >
//       Bài tập đổi xe
//     </NavLink>

//     {/* <NavLink className={clsx('mx-2', 'text-primary', 'bg-dark')} to="">
//       Trang chủ
//     </NavLink> */}

//     <Routes>
//       {/* localhost:3000/shoe-store */}

//       <Route path="" element={<div>Trang chủ</div>}></Route>
//       <Route path="/shoe-store" element={<ExShoeStore />}></Route>
//       <Route path="/bt-change-car" element={<ChangeCar />}></Route>
//     </Routes>
//   </BrowserRouter>,
// );
