import React from 'react'
import teaspoon from "../assets/teaspoon.webp"
import pink from "../assets/pink.webp"
import whites from "../assets/whites.webp"
import orange from "../assets/orange.webp"
import crop from "../assets/crop.webp"
import cont from "../assets/cont.webp"

const Home = () => {
  return (
    <section className="grid">
       <div className="left-row">
<h1>COVID-19 Risk Assessment Tool</h1>
<span>
  Sint amet velit consectetur magna reprehenderit 
  laborum in incididunt. In laboris nostrud ut cupidatat
   ullamco labore eu. Veniam ea mollit dolor Lorem
    do deserunt anim.
    </span> 
<button className="btn btn-primary">login in here</button>
</div>
<div className ="box">
<div className="box-grid">
  
<img src={pink} class="pic" alt="" />
<img src={whites}class="pic"  alt=""  />  
<img src={orange} class="pic" alt=""  />
<img src={crop}class="pic"  alt=""  />
<img src={cont}class="pic"  alt=""  />
<img src={teaspoon}class="pic"  alt="" />
<img src={crop}class="pic"  alt=""  />
<img src={cont}class="pic"  alt=""  />
<img src={teaspoon}class="pic"  alt="" />  
</div>
</div>

 </section>

    
  )
}

export default Home
