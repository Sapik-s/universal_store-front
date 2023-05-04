import React from 'react'
import style from "./BlockProduct.module.css"
import BlockProductsCategory from '../UI/BlockProductsCategory'
import BlockProductsCard from './BlockProductsCard/BlockProductsCard'

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination,Navigation } from 'swiper'
 function BlockProducts({title,category,items}) {
  return (
    <div className={style.blockproducts}>
        <div className={style.blockproducts__container}>
        <div className={style.blockproducts__title}>{title}</div>
        <div className={style.blockproducts__category}>
        {category.map((el,id)=><BlockProductsCategory key={id}>{el}</BlockProductsCategory>)}
        </div>
        <div className={style.blockproducts__cards}>
            <div className={`${style.blockproducts__cards_left} left`}></div>
            <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView='auto'

            navigation={{
              nextEl:'right',
              prevEl:'left'
            }}
            className={style.blockproducts__cards__items} >
            {items.map((el,id)=><SwiperSlide><BlockProductsCard /></SwiperSlide>)}
            </Swiper>
           
            <div className={`${style.blockproducts__cards_right} right`}></div>
        </div>
        </div>
       
    </div>
  )
}

export default BlockProducts