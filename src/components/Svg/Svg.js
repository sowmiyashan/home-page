import babylon from '../../svg/babylon.svg'
import bank from '../../svg/bank.svg'
import bykea from '../../svg/bykea.svg'
import cabify from '../../svg/cabify.svg'
import coupang from '../../svg/coupang.svg'
import delivery_hero from '../../svg/delivery hero.svg'
import gogoro from '../../svg/gogoro.svg'
import ifood from '../../svg/ifood.svg'
import jumia from '../../svg/jumia.svg'
import klarna from '../../svg/klarna.svg'
import lalamove from '../../svg/lalamove.svg'
import netflix from '../../svg/netflix.svg'
import paytm from '../../svg/paytm.svg'
import rappi from '../../svg/rappi.svg'
import shopback from '../../svg/shopback.svg'
import shopee from '../../svg/shopee.svg'
import spotify from '../../svg/spotify.svg'
import swvl from '../../svg/swvl.svg'


import React, { useEffect } from 'react';
import $ from 'jquery';
import './Svg.css';



function Svg() {
  

  let x = [
    babylon,
    bank,
    bykea,
    cabify,
    coupang,
    delivery_hero,
    gogoro,
    ifood,
    jumia,
    klarna,
    lalamove,
    netflix,
    paytm,
    rappi,
    shopback,
    shopee,
    spotify,
    swvl
  ];
  let y = [
    babylon,
    bank,
    bykea,
    cabify,
    coupang,
    delivery_hero,
    gogoro,
    ifood,
    jumia,
    klarna,
  ];

  
  var count = -1;
  var newImg = y.length; //6
  var stop = 0
  var runCount = 0
  
  var interval

  setInterval(() => {
    if(runCount>89){
      runCount=0;
      clearInterval(interval)
      setTimeout(() => {
        fadeOutt()
      }, 2000);
    }
  }, 5000);

  const fadeOutt = () => {
    if(document.hasFocus){
      interval = setInterval(function () {
        count >=9 ? (count = 0) : count++;
        $(`#${count}`).fadeOut(300);
        clearInterval(interval);
        runCount++
        stop=-1
        fadeIn();
      }, 1000);  
    }
  };

  const fadeIn = () => {
    interval = setInterval(function () {
      $(`#${count}`).attr('src', `${x[newImg]}`);
      newImg >= 17 ? (newImg = 0) : newImg++;
      stop=1
      $(`#${count}`).fadeIn(500);
      clearInterval(interval);
      stop=0
      fadeOutt();
    }, 250);
  };

  const renderImage = () => {
    return y.map((img, index) => {
      return (
        <div className='svg__imgsContainer'  key={index}>
          <img className='svg__imgs' src={img} id={index} alt='logos' />
        </div>
      );
    });
  };

  
  window.onload=function(){
    count = -1;
    newImg = y.length; //6
    window.onfocus()
  }
  
  window.onfocus=function(){
    fadeOutt(); 
  }

  window.onblur=function(){
    clearInterval(interval)
    if(stop==-1){
      $(`#${count}`).attr('src', `${x[newImg]}`);
      newImg >= 17 ? (newImg = 0) : newImg++;
      $(`#${count}`).fadeIn(500);
      stop=0
    }
    else if(stop==1){
      $(`#${count}`).fadeIn(500);
      stop=0
    }
  }
 
  return renderImage();
  
}

export default Svg;
