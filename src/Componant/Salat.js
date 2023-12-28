import React, { useState } from 'react'
import './Header.css'
import './Salat.css'
import Salatlist from './Salatlist'
export default function Salat() {
    
    
  return (
    <section className='pray'>
    <h3>أوقات صلاة</h3>
    <div  className='cards'>
    {
Salatlist.map((k,i)=>{
    return(

     
     
          <div key={i} className='cardd'>
          <div className='circle'>
          <svg>
              <circle cx='100' cy='100' r='100'></circle>
          </svg>
          <div className='praytime'>{k.time}</div>
          </div> 
          <p>{k.nom}</p>  
          </div>

   
    )
 })

    }
         </div>
  </section>
   
  )
}
