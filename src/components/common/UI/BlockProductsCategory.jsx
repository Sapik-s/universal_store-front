import React from 'react'
import style from '../BlockProducts/BlockProduct.module.css'

export default function BlockProductsCategory({children}) {
  return (
    <div className={style.blockproducts__category_item}>{children}</div>
  )
}
