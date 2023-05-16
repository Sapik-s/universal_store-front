import React from 'react'
import style from "./BlockProduct.module.css"
import BlockProductsCategory from "./UI/BlockProductCategory/BlockProductCategory"
import BlockProductsCard from './BlockProductCart/BlockProductCart' 

 function BlockProducts({title,category,items}) {

    const [nowCategory,setNowCategory]=React.useState(category[0])

   
    const pages=Math.ceil((items.length-1)/4)
    const [now_page,setNowPage]=React.useState(0)
    const [margin,setMargin]=React.useState('')
    const changeMargin=(button)=>{
     
       const margin=-1200;
      
      if(button==="left"){
        
        if(now_page>0){
          setNowPage(now_page-1)
          setMargin(`${margin*(now_page-1)}px`)
          
        }
      }else{
        
        if(now_page<pages){
          
          setMargin(`${margin*(now_page+1)}px`)
          setNowPage(now_page+1)
          
        }
      }
    
  }
  return (
    <div className={style.blockproducts}>
        <div className={style.blockproducts__container}>
        <div className={style.blockproducts__title}>{title}</div>
        <div className={style.blockproducts__category}>
        {category.map((el,id)=><BlockProductsCategory setNowCategory={setNowCategory} bool={nowCategory===el?false:true} key={id}>{el}</BlockProductsCategory>)}
        </div>
        <div className={style.blockproducts__cards}>
          {now_page===0?<></>:<div onClick={e=>changeMargin('left')} className={style.blockproducts__cards_left}></div>}
            
            <div className={style.blockproducts__cards__items} >
            {items.map((el,id)=><BlockProductsCard margin={margin} key={id} id={id}/>)}
            </div>
            {now_page===pages?<></>:<div onClick={e=>changeMargin('right')} className={style.blockproducts__cards_right}></div>}
            
        </div>
        </div>
       
    </div>
  )
}

export default BlockProducts