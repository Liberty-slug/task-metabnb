import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import homevector from '../assets/Vector.png'
import hometext from '../assets/Vectortext.png'
import Modall from '../modal/modal'

function Nft () {
  const [openModal, setOpenModal] = useState(false)
    return (
      <>
      <Modall open={openModal} onClose={() => setOpenModal(false)}/>
        <nav>
            <div className="navbar">
                <div className="nav-brand">
                    <Link to="./">
                        <img src={homevector} alt="" className='homevector'/>
                        <img src={hometext} alt="" className='hometext'/>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="/">Home</Link>
                    <Link to="/place-to-stay">Place to Stay</Link>
                    <Link to="/nft">NFTs</Link>
                    <Link to="/community">Community</Link>
                </div>
                <div className="nav-btn">
                <Link onClick={() => setOpenModal(true)}>Connect Wallet</Link>
                </div>
            </div>
        </nav>
      </>
    )
  }


export default Nft