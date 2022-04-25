import React from 'react';
import './Nova4.css';
import Planet from './img/planet2.png';
import FormImg from './img/form-img.png';


function Nova4() {
  return (

<div id='mainContainer'>

    <div id="page4">


    <img src={Planet} alt="" id="backdropPage4"/>

    
    <h1 id="page4H1">contact us</h1>

    <img src={FormImg} alt="" id="formPlanet"/>

    <div id="formDiv">

        
    <form class="contact-form" action="send.html" method="POST" onsubmit="return validation()">
        <div class="input-field">
          <input id="name" type="text" name="name" placeholder="  Name...."/>
        </div>
        <div class="input-field">
          <input id="email" type="text" name="email" placeholder="  E-mail...."/>
        </div>
       
        <div class="input-field">
          <textarea id="info"name="message"placeholder="Message...."></textarea>
        </div>
        <div class="input-field">
          <button id="submit" type="submit" name="sub-mit" value="submit">Send</button>
        </div>
          
           
       </form>

       </div>


</div>



</div>



  )
}

export default Nova4