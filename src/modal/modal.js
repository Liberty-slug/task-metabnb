import React from 'react'
import modal1 from '../assets/modal1.png'
import modal2 from '../assets/modal2.png'
import modal3 from '../assets/modal3.png'
import '../App.css';

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='overlay'>
        <div className="modalContainer">
            <div className="modal-header">
                <h4>Connect Wallet</h4>
                <p onClick={onClose} className="closeBtn">X</p>
            </div>
            <div className="content">
                <p>Choose your preferred wallet:</p>
                <div className="metamask-modal">
                    <span><img src={modal1} alt="" /> Metamask</span>
                    <img src={modal3} alt="" />
                </div>
                <div className="metamask-modal">
                    <span><img src={modal2} alt="" /> Metamask</span>
                    <img src={modal3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal