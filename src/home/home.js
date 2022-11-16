import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import homevector from '../assets/Vector.png'
import hometext from '../assets/Vectortext.png'
import image4 from '../assets/image4.png'
import image6 from '../assets/image6.png'
import image3 from '../assets/image3.png'
import image5 from '../assets/image5.png'
import mbtoken from '../assets/mbtoken.PNG'
import metamask from '../assets/metamask.PNG'
import opensea from '../assets/opensea.PNG'
import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'
import frame4 from '../assets/Frame4.png'
import frame5 from '../assets/Frame5.png'
import frame6 from '../assets/Frame6.png'
import frame7 from '../assets/Frame7.png'
import frame8 from '../assets/Frame8.png'
import star from '../assets/Star.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import footer1 from '../assets/footer1.png'
import footer2 from '../assets/footer2.png'
import footer6 from '../assets/footer6.png'
import Modall from '../modal/modal'
import {FaBars} from 'react-icons/fa'

const Home = ({toggle}) => {
    const [openModal, setOpenModal] = useState(false)
    return(
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
            <div className="toggle" onClick={toggle}>
                <FaBars/>
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

    <div className="hero-section">
        <div className="row">
            <div className="col1">
                <h3>Rent a <span className='purple'>Place</span> Away from <span className='purple'>Home</span> in the <span className='purple'>Metaverse</span></h3>
                <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="search">
                    <input type="text" placeholder='Search Location'/>
                    <Link>Search</Link>
                </div>
            </div>
            <div className="col2">
                <div className="first-slide">
                    <img src={image4} alt="" className='image4'/><br/>
                    <img src={image6} alt="" className='image6'/>
                </div>
                <div className="second-slide">
                    <img src={image3} alt="" className='image3'/><br/>
                    <img src={image5} alt="" className='image5'/>
                </div>
            </div>
        </div>
    </div>
    <div className="mid-frame">
        <div className="mtoken"> <img src={mbtoken} alt="" className='mtokenimg'/></div>
        <div className="metamask"><img src={metamask} alt="" className='metamaskimg'/></div>
        <div className="opensea"><img src={opensea} alt="" className='openseaimg'/></div>
    </div>
    <div className="section">
        <p>Inspiration for your next adventure</p>
    </div>
    <div className="listing">
        <div className="row">
            <div className="col">
                <img src={frame1} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={frame2} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={frame3} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={frame4} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={frame5} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={frame6} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={frame7} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={frame8} alt="" className='frame1'/>
                <div className="list-details">
                    <div className="list-top">
                        <span>Desert King</span>
                        <span>1MBT per night</span>
                    </div>
                    <div className="list-desc">
                        <span>2345km away</span>
                        <span>available for 3weeks stay</span>
                    </div>
                    <div className="star">
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                        <img src={star} alt="" className='star'/>
                    </div>
                </div>
            </div>
        </div>
    </div>{/* Listings */}

    <div className="frame139">
        <div className="row">
            <div className="col">
                <h4>Metabnb NFTs</h4>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards
                    which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.
                </p>
                <Link>Learn more</Link>
            </div>
            <div className="col">
                <img src={image9} alt="" className='image9'/>
                <div>
                    <img src={image7} alt="" className='image7'/>
                    <img src={image8} alt="" className='image8'/>
                </div>
            </div>
        </div>
    </div>
    <div className="footer">
        <div className="row">
            <div className="col">
                <img src={footer1} alt="" className='footer1'/>
                <img src={footer2} alt="" className='footer2'/>
                <div className="social">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path></svg>
                </div>
                <p>
                    <img src={footer6} alt="" className='footer6'/>
                    2022 metabnb
                </p>
            </div>
            <div className="col">
                <span>Community</span>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </div>
            <div className="col">
                <span>Places</span>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn more</p>
            </div>
            <div className="col">
                <span>About Us</span>
                <p>Road Map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
   </>
    )
}
export default Home;