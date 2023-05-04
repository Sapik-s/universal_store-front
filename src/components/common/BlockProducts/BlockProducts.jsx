import React from 'react'
import style from "./BlockProduct.module.css"
/* import BlockProductsCategory from '../UI/BlockProductsCategory'
import BlockProductsCard from './BlockProductsCard/BlockProductsCard' */

 function BlockProducts({title,category,items}) {
  return (
    <div className={style.blockproducts}>
        <div className={style.blockproducts__container}>
        <div className={style.blockproducts__title}>{title}</div>
        <div className={style.blockproducts__category}>
       {/*  {category.map((el,id)=><BlockProductsCategory key={id}>{el}</BlockProductsCategory>)} */}
        </div>
        <div className={style.blockproducts__cards}>
            <div className={style.blockproducts__cards_left}></div>
            <div className={style.blockproducts__cards__items} >
           {/*  {items.map((el,id)=><BlockProductsCard />)} */}
            </div>
           
            <div className={style.blockproducts__cards_right}></div>
        </div>
        </div>
       
    </div>
  )
}

export default BlockProducts