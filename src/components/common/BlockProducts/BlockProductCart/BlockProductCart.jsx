import React from 'react'
import style from "./BlockProductCart.module.css"
import Like from "../UI/Like";
import Cart from "../UI/Cart";
import {Link} from "react-router-dom";

import picture from "../../picture.png"

 function BlockProductsCard({id,title,category,margin}) {
    const [liked,setLiked]=React.useState(false)

     let count=1
  return (
    <div className={style.cart_container} style={id===0?{marginLeft:margin}:{}}  id={id}>
      <Link to={ '/items'} className={ `${style.card_item} ${style.card_item_watch}`}>
        
        

      <div className={style.card_item__sale}>SALE</div>
       <Like setLiked={setLiked} liked={liked} className={liked?`${style.card_item__like} ${style.active}`:`${style.card_item__like} `}/>
    <img src={picture} alt='image' className={style.card_item__image}/>
      <div className={style.card_item__title}>Водонепроницаемый Рюкзак {id}</div>
          {count!==0? <div className={style.card_item__price}>9 800 ₽</div>
              :
              <div className={style.card_item_none}>
              <div >Нет в наличии</div>
              <div onClick={e=>e.preventDefault()} className={style.card_item_none_link} >Сообщить о поступлении</div>
          </div>}
          {
            count!==0?<Cart  className={style.card_item__cart}/>:<></>
          }
          
    </Link>
    </div>
  )
}

export default BlockProductsCard