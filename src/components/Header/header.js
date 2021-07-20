import React, { useState } from 'react';
import menu from '../../images/menu.png'
import styled from 'styled-components';
import { Modal } from '../Modal/Modal';
import { LoginModal } from '../Modal/LoginModal';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;


function Header(props) {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

    function openNav() {
      document.getElementById("myNav").style.height = "50%";
    }
    
    function closeNav() {
      document.getElementById("myNav").style.height = "0%";
    }

    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const openSignUpModal = () => {
      setShowSignUpModal((prev) => !prev);
    };

    const [showLoginModal, setShowLoginModal] = useState(false);

    const openLoginModal = () => {
      setShowLoginModal((prev) => !prev);
    };
    
    return (
        <>
        <header className='nav'>

        {/* <div className="topnav" id="myTopnav">
          <a href="#home" class="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="javascript:void(0);" class="icon" onClick={() => myFunction()}>
            drop
          </a>
        </div> */}
          <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Logo</a>
            <div class="header-right">
              <a href="#students">Students</a>
              <a href="#company">Companies</a>
              <a href="#login" onClick={openLoginModal}>Login</a>
              <a href="#students"className="btn" >
                <button onClick={openSignUpModal} className='submit flex items-center flex-none bg-yellow-200 rounded-full padding sm:px-7 ml-4'>
                    Sign up
                </button>
              </a>
            </div>
            <a href="javascript:void(0);" class="icon" onClick={() => openNav()}>
              <img src={menu} width='50' height='50'/>
            </a>
          </div>

          <div id="myNav" class="overlay">
            <a href="#home" class="logo">Logo</a>
            <a href="javascript:void(0)" class="closebtn" onClick={()=>closeNav()}>&times;</a>
            <div class="overlay-content">
              <a href="#students">Students</a>
              <a href="#company">Companies</a>
              <a href="#login" onClick={openLoginModal}>Login</a>
              <a href="#students"className="btn" >
                <button onClick={openSignUpModal} className='submit flex items-center flex-none bg-yellow-200 rounded-full padding sm:px-7 ml-4'>
                    Sign up
                </button>
              </a>
            </div>
          </div>
        </header>

        <Modal
          showModal={showSignUpModal}
          setShowModal={setShowSignUpModal}
          // setUserData={setUserData}
        ></Modal>

        <LoginModal
          showModal={showLoginModal}
          setShowModal={setShowLoginModal}
          // setUserData={setUserData}
        ></LoginModal>
        </>
    );
}

export default Header;