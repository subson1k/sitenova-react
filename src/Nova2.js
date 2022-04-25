import React from 'react';
import './Nova2.css';
import Package1 from './pricePackage1 - Copy (3).png';
import Package2 from './pricePackage2 - Copy.png';
import Package3 from './pricePackage3 - Copy (3).png';
import PageBackground from './nova-backgroundpage3.png';


function Nova2() {
  return (

    <div id='mainContainer'>
    <div id="page2">

    <h1 id="page2H2"> Our Prices</h1>
   
    <p id="page2p">Below are some of our popular price packages<br />
        for more details please go to our contact page </p>
    
    <img src={PageBackground} alt="" id="backdropPage2"/>


    <img src={Package1} alt="" id="package1"/>
    <img src={Package2} alt="" id="package2"/>
    <img src={Package3} alt="" id="package3"/>


    Photo by <a href="https://unsplash.com/@cazault?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Menidrey</a> on <a href="https://unsplash.com/s/photos/planets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>



</div>

</div>

  )
}

export default Nova2