
import './Nova1.css';
import './Animation.css';
import Logo from './sitenova-logo.png';
import Background from './planetBackground.png';
import ContactCircle from './contactCircle.png';
import DomainCircle from './domain-circle.png';
import WebCircle from './wedesign-circle.png';
import Saucer from './saucer.png';
import Star from './star.png';
import facebook from './img/facebook-512-150x150.png';
import { Link } from 'react-router-dom';





function Nova1() {



  return (


    <div id='mainContainer'>
    <div id="page1">

  

            <img src={Star} alt="" id="star1"/>
            <img src={Star} alt="" id="star2"/>
            <img src={Star} alt="" id="star3"/>

            <img src={Saucer} alt="" id="saucer"/>
        <div id="planetImgDiv">
            <img src={Background} alt="" id="novaBackground"/>
        </div>
          

            <a href="https://www.facebook.com/100076230025688/"><img id='fBook' src={facebook}/></a>

           
          
            


         
    

        

            <img src={Logo} id="novaLogo"/>


        

            <img src={WebCircle} alt="" id="webDesignCircle"/>
           <a href='https://sitenova.co.uk/page4.php'><img src={ContactCircle} alt="" id="circle"/> </a>
            <img src={DomainCircle} alt="" id="domainNameCircle"/>
         
           <p id="unsplashCredit">Photo by <a href="https://unsplash.com/@sarahleejs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jongsun Lee</a> on <a href="https://unsplash.com/s/photos/eclipse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  

          
        </div>

        </div>
  )
}




export default Nova1