import React, { useState } from "react";

import Modal from "../Modal";

import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const [isModal, setIsModal] = useState(false);

  const hanldeChangeModal = (flag) => {
    setIsModal(flag);
  };

  return (
    <>
      <div className="productList_item">
        <div className="productList_bg" onClick={() => hanldeChangeModal(true)}>
        <img src={product.avatar} alt="" className="avatar" />
        <div className="userName">{product.UserName}</div>
        <div className="postDate">{product.postDate}</div>
        <div className="title">{product.title}</div>
        <img src={product.photo} alt="" className="photo"/>
      </div>
      
      </div>
     
      {isModal && (
        <Modal close={hanldeChangeModal}>
         
          <div className="modal_info">
    
          <img src={product.photo} alt="" className="photos" /> 
          <img src={product.avatar} alt="" className="avatars" />
          <div className="userName">{product.UserName}</div>
          <div className="postDate">{product.postDate}</div>
          <div className="titles">{product.full_title}</div>
      
            </div>
        </Modal>
      )}

    </>
  );
};

export default ProductItem;
