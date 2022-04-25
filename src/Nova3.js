import React from 'react';
import './Nova3.css';
import Background3 from './img/spaceBackground-page2.png';
import Apex from './img/apex-pic02.png';
import Icecream from './img/icecream-pic02.png';
import Nicky from './img/nickyh-screenshot02.png';
import Assault from './img/assault-pic02.png';

function Nova3() {
  return (

    <div id='mainContainer'>
    <div id="page3">


            <img src={Background3} alt="" id="page3background"/>

            <h1 id="page3H1">Our portfolio</h1>
          
          <p id="page3p">Below are some of our recent projects<br />
            please contact us for more information</p>
        


             <h1 id="apexH1">Apex Electest ltd</h1>
            <a href="https://sitenova.co.uk/apex/"> <img src={Apex} alt="" id="apexPic"/> </a>
             <h1 id="icecreamH1">Island Icecreams</h1>
            <a href="https://sitenova.co.uk/icecream/"> <img src={Icecream} alt="" id="icecreamPic"/> </a>
             <h1 id="nickyH1">Dj Nicky H</h1>
             <a href="https://sitenova.co.uk/nickyh/"> <img src={Nicky} alt="" id="nickyhPic"/> </a>
             <h1 id="assaultH1">Planet Assault</h1>
           <a href="https://sitenova.co.uk/assault/"> <img src={Assault} alt="" id="assaultPic"/> </a>
         
         
            
             Photo by <a href="https://unsplash.com/@jeremyperkins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Perkins</a> on <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  


        </div>

        </div>
  )
}

export default Nova3