import React from 'react'
import one from '../assets/one.webp'
import two from '../assets/two.jpg'
import six from '../assets/six.webp'
import three from '../assets/five.webp'
import four from '../assets/four.webp'
import five from '../assets/one.webp'

const Products = () => {
  return (
    <div className="products">
  
   
   <div class="pic2">
        <img src={one} class="round"alt=''/>
        <div class="grid-items">
      <h>Triage</h>
   <p> 
     Aliqua anim deserunt officia culpa 
     adipisicing tempor cupidatat exercitation 
     velit irure fugiat.
     </p>
     </div>
     </div>
 
 <div class="pic2">
      <img src={two} class="round"  alt=''/>
      <div class="grid-items">
      <h>Description</h>
   <p> 
     Aliqua anim deserunt officia culpa adipisicing tempor 
     cupidatat exercitation velit irure fugiat.
     </p>
   </div>
   </div>

  <div class="pic2">
   <img src={three} class="round" alt=''/>
   <div class="grid-items">
      <h>Dosage</h>
   <p> 
     Aliqua anim deserunt officia 
     culpa adipisicing tempor cupidatat exercitation
      velit irure fugiat.
      </p>
    
      </div>
      </div>
        <div className="description">
      <h2>How it helps people</h2>
   <span> Aliqua anim deserunt officia culpa
      adipisicing tempor cupidatat exercitation velit irure fugiat.
      </span>
 <button className="btn btn-secondary">Get In touch</button> 
   
      </div>
</div>
    
  )
}

export default Products
