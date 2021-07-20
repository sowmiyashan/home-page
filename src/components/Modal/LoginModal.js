import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import './Modal.css';
import './Page2.css';
import './Page3.css';
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 1300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent1 = styled.div`
  padding: 40px 40px 40px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

//Validation
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validPasswordRegex = RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&%+=!*)(}{><;:,?.-/|\\_[\]`~-])/
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const Page1 = ({
  handleChange,
  errors,
  passwordVisible,
  passwordRef,
  passwordToggle,
  allOk,
  Next,
  Back,
}) => {
  return <></>;
};

export const LoginModal = ({ showModal, setShowModal, setUserData }) => {
  const modalRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      resetModal();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        resetModal();
        // console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  //Validation

  const [currPage, setCurrPage] = useState(1);

  const [allOk, setAllOk] = useState(false);
  const [allOk2, setAllOk2] = useState(true);
  const [usernameStatus, setUserNameStatus] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
 
  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  });

  const save = () => {
    let user = {
      userName: userName,
      password: password,
    };
    setUserData(user);
  };

  const resetModal = () => {
    setErrors({
      userName: '',
      password: '',
    });
    setUserName('');
    setPassword('');

    setPasswordVisible(false);
  };
//   const Next = (name, email, password) => {
//     const formv = formRef.current;
//     // console.log(fullName);
//     // console.log('nexting....');
//     setCurrPage(currPage + 1);
//   };
  const Back = () => {
    setCurrPage(currPage - 1);
  };
  const closeModalX = () => {
    resetModal();
    setShowModal((prev) => !prev);
  };

  const enableNext = () => {
    if (usernameStatus  && passwordStatus) {
      setAllOk(true);
    } else setAllOk(false);
    // console.log('allOk2', allOk2);
  };
//   const enableSignUp = () => {
//     if (collegeStatus && gradYearStatus && degreeStatus && majorStatus) {
//       setAllOk2(true);
//     } else setAllOk2(false);
//   };
  const checkSpace = (value) => {
    if (value) {
      if (value.split(' ').length > 1) {
        return value.split(' ')[0].length > 0 && value.split(' ')[1].length > 0;
      } else return false;
    }
  };
  const handleChange = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(event.target.value)
    let newError = { ...errors };

    switch (name) {
      case 'userName':
        if (value.length == 0) {
          setUserNameStatus(false);
          setUserName(value);
          newError.userName = 'Username is required';
        } 
        else if (checkSpace(value)) {
          newError.userName = '';
          setUserName(value);
          setUserNameStatus(true);
        } 
        else {
          newError.userName = 'Invalid username';
          setUserNameStatus(false);
          setUserName(value);
        }
        break;
      case 'password':
        if (value.length == 0) {
          setPasswordStatus(false);
          setPassword(value);
          newError.password = 'Please enter your password';
        } 
        else if (validPasswordRegex.test(value)) {
          newError.password = '';
          setPasswordStatus(true);
          setPassword(value);
        } 
        else {
          newError.password =
            'Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)';
          setPasswordStatus(false);
          setPassword(value);
        }
        break;
      default:
        break;
    }
    // enableNext();
    await setErrors(newError);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      // console.info('Valid Form');
    } else {
      // console.error('Invalid Form');
    }
  };
  useEffect(() => {
    enableNext();
  }, [usernameStatus, passwordStatus]);

//   useEffect(() => {
//     enableSignUp();
//   }, [collegeStatus, gradYearStatus, degreeStatus, majorStatus]);

  const passwordToggle = () => {
    setPasswordVisible(passwordVisible ? false : true);
  };
  // console.log(currPage);
  return (
    <>
      {' '}
      {showModal ? (
        <Background className='background' onClick={closeModal} ref={modalRef}>
          <div
            className='ModalWrapper Modal__Fullscreen '
            showModal={showModal}
          >
            <CloseModalButton
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => closeModalX()}
            />
            <div className='ModalSection1'>
              <div className='modal__content1'>
                <p className='modal__welcome'>Welcome Back</p>
                <p className='modal__signin'>Login to continue.</p>
              </div>
            </div>
            <div className='ModalSection2'>
              <div className='modal__content2'>
                {currPage == 1 ? (
                  // <Page1
                  //   handleChange={handleChange}
                  //   errors={errors}
                  //   passwordVisible={passwordVisible}
                  //   passwordRef={passwordRef}
                  //   passwordToggle={passwordToggle}
                  //   allOk={allOk}
                  //   Next={Next}
                  // ></Page1>
                  <>
                    <div className='home_modal'>
                      <form className='modal__form' ref={formRef}>
                        <div className='google__login'>
                          <img
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAMAAAClD0MEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGSUExURQAAAP+/AECA7zCfUN9AQN9AMPe/APe3CO+AIECH70CA7zCnUOdIMOdAOPq6BUCF9DWqUDWlVepFNepFMOpANfu7BPebEECD8zSnVDSnUOdENOtANPy+A0CE9fy8A0OD8jOmU+lDNulDMzapUzOpU+xDNulDNvq9A0KF8jKnUupCMjOqU+pDNfi7BUKE9DSoUjKmVDSpUutENOtCNvm7BEKD8zSnVOlENOlCNkKG9DSoUutENfq8Bfq8BEGD8zOmUzOmUehDNUKF9DOoU+pDNfq6BUGE8jOnU+lDNfu8BEKG8zeffzSpUzSnU+lDNkGF8/u8BUOE9EGF9DSoU+pDNepDNPu8BUGF9DSnUupENelCNfq9BUKF9ECK3UGF9DOoU+pDNelCNfu8BUKF9DSoUzOoU+tDNOpDNfu8Be66CeK5DvmtC9a4E8m3GPaWFKSzKPSHGpeyLPOAHYuxMfF4IHOuOu9pJlmrRE2qSUGpTkCK4EKF9D+M1kGH6j2StzmbjzuWozakZ+xSLzWmXTSoU+pDNcRMx+0AAABodFJOUwAQEBAQECAgICAgICAgMDAwMDAwMEBAQEBAQEBPT1BQUFBQX19fX2BgYGBvb3BwcHB/f3+AgICAgI+Pj5CQkJCQkJ+fn6CgoKCvr6+vr6+wv7+/v7+/z8/Pz8/f39/f39/f7+/v7+/vEvGb2gAAAi1JREFUeNrN1elf0zAYB/DHTVRkU1Fx3TxRJ6ICTgW85wTcxGu6TUUGHSoziveNUYGZ/N9+2tE2ydI07ccX/t416XdPzhXgP0jXicLdRpNS2pypFrK7NdHZKuXTmAyme0XUTjWrVLvkyi66UzFCqsqlLjlLzFB1GgnpzJo0KC8Od7Is1UjpX7H+aCzRjMSgIb5TG88kAWBj5lRNwc4IajLDdCZLfizBqycZoT9ZkzIocawgeWNcxvZ8Ztl57ds2hd5HYZsQQkstZ0X0L/cQsuBXmy0k9d1DZOej5Y5BqGHaeduiCyH+gw44Di21QpSDK8jLFr5r+6hfDgKUPVYWfvI49ss9d1msXNZ2dYCnnhsK45jp7dN2mHN9EV2oesz8BsK42SjriQFuRtm/On9eNui6+wADrnr5ZYR33SkuDzx3FWCzw15/JxXlSa57bhjchXm3TAgxFCzFjDMFAOfsMX4iVsy4v7vhsWfW8zaE0KtvpJ2LvqybKXfdbimjN8vEyYgPizGzw/vtpr4PhMkRuZtm2Px6W4V1JCerxjJ8Yb3V4ByZ6BFZeo7b9a1Oe56Hz3OcTBfJ2k+Gjbo9cZMIuX10R7snnWvPYrVjdlZ6iSSmaS56Tyu/mD13c5oEZu2HMEo7Y8Hwz2+M8bS4ZhqQrOJHsY490hgquRWTbG6vGcTy8rPUU1SqxUO+h35QUTIfV11qPzlhBH3YjGIHrYzFtb6Jxsk7j51DU7k2KEN/AZeF7avEtSekAAAAAElFTkSuQmCC'
                            alt='gl'
                          ></img>
                          <p>Continue with Google</p>
                        </div>
                        <div
                          className='modal__seperator'
                          style={
                            currPage == 1
                              ? { visibility: 'visible' }
                              : { visibility: 'hidden' }
                          }
                        >
                          <hr></hr>
                          <p>or</p>
                          <hr></hr>
                        </div>
                        <label>Your User Name</label>
                        <input
                          placeholder='Enter Your User Name'
                          type='text'
                          name='userName'
                          onBlur={handleChange}
                          onChange={handleChange}
                          value={userName}
                        ></input>
                        {errors.userName.length > 0 && (
                          <p className='modal__errors'>
                            <svg
                              className='MuiSvgIcon-root'
                              focusable='false'
                              viewBox='0 0 24 24'
                              aria-hidden='true'
                            >
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>{' '}
                            {errors.userName}
                          </p>
                        )}

                        <label>Password</label>
                        <input
                          id='password'
                          placeholder='Enter Password'
                          type={passwordVisible ? 'text' : 'password'}
                          name='password'
                          ref={passwordRef}
                          onBlur={handleChange}
                          onChange={handleChange}
                          value={password}
                        ></input>
                        {passwordVisible ? (
                          <BsEyeFill
                            className='eye'
                            onClick={passwordToggle}
                            size='20px'
                          />
                        ) : (
                          <BsEyeSlashFill
                            className='eye'
                            onClick={passwordToggle}
                            size='20px'
                          />
                        )}

                        {errors.password.length > 0 && (
                          <p class='modal__errors password_error'>
                            <svg
                              class='MuiSvgIcon-root'
                              focusable='false'
                              viewBox='0 0 24 24'
                              aria-hidden='true'
                            >
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>{' '}
                            {errors.password}
                          </p>
                        )}

                        <button
                          class='home__login'
                          disabled={!allOk}
                        >
                          Login
                        </button>
                      </form>
                    </div>
                    <div class='modal__contentbottom'>
                      <hr></hr>
                      <p>
                        Don’t have an account?
                        <span>Sign Up</span>
                      </p>
                      <p>
                        Forgot your password? <span> Recover password</span>
                      </p>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </Background>
      ) : null}
    </>
  );
};
