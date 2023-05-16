import React from 'react'
import style from '../../BlockProduct.module.css'

export default function BlockProductsCategory({children,bool,setNowCategory}) {
  return (
    <div onClick={e=>setNowCategory(children)} className={bool?`${style.blockproducts__category_item}`:`${style.blockproducts__category_item} ${style.blockproducts__category_item_active}`}>{children}</div>
  )
}