import React from 'react'
import styles from './Card.css'
import Thumbnail from '../Assets/sampleThumbnailImg.jpg'
import ProfilePicture from  '../Assets/channels_profile.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <Link to="video/test" style={{textDecoration: "none"}}>
    <div className='card-main-container'>
         <img className='card-image' src={Thumbnail} alt="" />
         <div className='videoInfo'>
          <div className="row">
            <img className='profilePicture' src={ProfilePicture} alt="" srcset="" />
            
          </div>
          <div className="row">
            <div className="cardTitle">How to get a million subscribers (real)</div>
            <div className="channelName">Pewdiepie</div>
            <div className="viewCount">261K views &#183; 3 weeks ago</div>
          </div>
          
         </div>

    </div>
    </Link>
  )
}

export default Card