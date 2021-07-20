import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
// import './Modal.css';
import app1x from './images/app@1x.png';
import arrow from './images/arrow.svg';
import chart1x from './images/chart@1x.png';
import dashboard1 from './images/Dashboard 1.svg'
import changed1 from './images/changed 1.svg'
import building from './images/buildings.png'

import Header from './components/Header/header';
import Main from './components/Main/Main';

import { MdBackup, MdClose } from 'react-icons/md';

const Modal = ({ showModal, setShowModal, setUserData }) => {
  const modalRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      // resetModal();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        // resetModal();
        // console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const closeModalX = () => {
    // resetModal();
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {showModal ? (
        <div className='background' onClick={closeModal} ref={modalRef}>
          <div
            className='ModalWrapper Modal__Fullscreen '
            showModal={showModal}
          >
            <MdClose
              className='close-btn'
              aria-label='Close modal'
              onClick={() => closeModalX()}
            />
            <div className='content modal'>
              <p className='text-xl font-body font-semibold logo'>earmark.</p>
              <div className='coll'>
                <div>
                  <p className='title'>Employees</p>
                  <hr></hr>
                </div>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Software Internships</p>
                  </div>
                  <p className='info'>
                    Online, Offline, Remote Internships & more...
                  </p>
                </div>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Design Internships</p>
                  </div>
                  <p className='info'>
                    Online, Offline, Remote Internships & more...
                  </p>
                </div>
              </div>
              <div className='coll'>
                <p className='title'>Employees</p>
                <hr></hr>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Software Internships</p>
                  </div>
                  <p>Online, Offline, Remote Internships & more...</p>
                </div>
              </div>
              <div className='coll'>
                <p className='title'>Employees</p>
                <hr></hr>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Software Internships</p>
                  </div>
                  <p>Online, Offline, Remote Internships & more...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
function App() {
  const [showModal, setShowModal] = useState(false);
  const openNav = () => {
    console.log('window', window.width);
    if (window.innerWidth <= 770) {
      setShowModal(true);
    }
  };

  
  return (
    <>
      <Modal setShowModal={setShowModal} showModal={showModal} />

      <div className='font-body text-black overflow-x-hidden'>
        <Header/>
        <Main/>
      </div>
    </>
  );
}

export default App;
