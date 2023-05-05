import React from 'react'
import style from "./BlockProductCart.module.css"

/* import like from "../UI/like.svg"
import cart from "../UI/cart.svg" */

 function BlockProductsCard({id,title,category,margin}) {
  return (
    <div className={style.cart_container} style={id===0?{marginLeft:margin}:{}}  id={id}>
      <div className={style.card_item}>
      <div className={style.card_item__sale}>SALE</div>
       <img alt='like' /* src={like} */ className={style.card_item__like}/>
      <div className={style.card_item__image}></div>
      <div className={style.card_item__title}>Водонепроницаемый
Рюкзак {id}</div>
      <div className={style.card_item__price}>9 800 ₽</div>
      <img alt='cart'/*  src={cart} */ className={style.card_item__cart}/>
    </div>
    </div>
  )
}

export default BlockProductsCard