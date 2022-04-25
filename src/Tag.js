import React from 'react';
import './Tag.css';
import SmallTag from './smalTtagWhite.png';
import Tagg from './tagWhite.png';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Tag() {

    const [style, setStyle] = useState();
    const [tagg, setTagg] = useState();
    const [taggg, setTaggg] = useState();
    const [mainTag, setMainTag] = useState('tag');

    const changeStyle = () =>{

        setStyle('menu1');
        setTagg('tag1');
        setTaggg('tag2');
        setMainTag('theTag1');
    }
    const changeBack = () =>{

        setStyle('menu2');
        setTagg('tag3');
        setTaggg('tag4');
        setMainTag('theTag2');
    }

  return (
    <div>

    <img src={Tagg} className={mainTag} onClick={changeStyle}/>
    
                <img src={SmallTag} alt="" className={tagg} onClick={changeBack}/>
                <img src={SmallTag} alt="" className={taggg} onClick={changeBack}/>
               
    
               
                <div className={style}>
    
                                <ul id="menuUl">
                                    <Link to={'/'} className='linkIt'onClick={changeBack}><li id="menuPage1">Home</li></Link>
                                    <Link to={'/page2'} className='linkIt'onClick={changeBack}><li id="menuPage2">Prices</li></Link>
                                    <Link to={'/page3'} className='linkIt'onClick={changeBack}><li id="menuPage3" >Our work</li></Link>
                                    <a href='https://sitenova.co.uk/page4.php' className='linkIt'onClick={changeBack}><li id="menuPage4">Contact</li></a>
                                </ul>
    
                        </div>  
    
            </div>
        

    
    
  )
}

export default Tag