import React, { useContext } from "react";
import './ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import drop_down from '../Components/Assets/down-arrow-removebg-preview.png'


const ShopCategory = (props) => {
    const {all_Product}= useContext(ShopContext);
    return(
        <div className="shop-category"> 
          <img src={props.banner} alt=""/>
          <div className="shopcategory-indexSort">
            <p>
              <span>Showing 1-12</span>out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={drop_down} alt=""/>
            </div>
          </div>
        <div className="shopcategory-products">
          {all_Product.map((item,i)=>{
           if(props.category===item.category){
           return <Item key={item.i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           }
           else{
            return null;
           }
          })}
        </div>
        </div>
    )
}
export default ShopCategory