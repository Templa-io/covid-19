import React from 'react'
import five from "../assets/five.webp"
import six from "../assets/six.webp"
import seven from "../assets/seven.webp"

const Services = () => {
  return (
    <div className="container2">
    <div className="service">
      <h4> How to use it</h4>
      <p>
        Officia 
      irure dolor officia 
      nisi eu fugiat et 
      reprehenderit.
     </p>
      <span>
        Do id aliqua sint
         nostrud labore culpa 
         magna culpa esse
          nostrud est.</span>
          <button>Get in touch</button>
      </div>
   
      <div className ="box2">
<div className="right-row">
  <div>
<img src={five} class="item" alt="" />
<h3>Corona Virus</h3>
</div>
<div>
<img src={six}class="item"  alt=""  />
<h3>Dosage</h3> 
</div>
<div>
<img src={seven} class="item" alt=""  />
<h3>Test</h3>
</div>
</div>
</div>
    </div> 
   
  )
}

export default Services
