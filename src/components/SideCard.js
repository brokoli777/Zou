import React from 'react'
// import './SideCards.css'
import styles from './SideCard.css'
import Thumbnail from '../Assets/sampleThumbnailImg.jpg'
import ProfilePicture from  '../Assets/channels_profile.jpg'
import { Link } from 'react-router-dom'

const SideCard = () => {
  return (
    <Link to="video/test" style={{textDecoration: "none"}}>
    <div className='side-card-main-container'>
         <img className='side-card-image' src={Thumbnail} alt="" />
         <div className='side-card-videoInfo'>
          <div className="side-card-row">
            <div className="side-card-cardTitle">How to get a million subscribers (real)"</div>
            <div className="side-card-channelName">Pewdiepie</div>
            <div className="side-card-viewCount">261K views &#183; 3 weeks ago</div>
          </div>        
        </div>

    </div>
    </Link>
  )
}

export default SideCard
