import React from 'react'
import './Video.css'
// import { AiFillLike } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt} from "react-icons/ai";
import ChannelPic from '../Assets/channels_profile.jpg'

function Video() {
  return (
    <div className='container'>
      <div className="content">
        <div className="videoContent">
          <iframe width="854" height="480" src="https://www.youtube.com/embed/Fa1u4QEGZp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2 className="title">Figma Zero to Hero Guide | Sample Name</h2>
        <div className="details">
          <div className="viewCount">343,000 views June,2023</div>
          <button className='subscribeButton'>Subscribe</button>

          <div className="interactButtons">
            
            <AiOutlineLike size={30} className="icon"/>
            <div className="likeCount">123</div>

            <AiOutlineDislike size={30} className="icon"/>
            <div className="dilikeCount">34</div>

            <button className='shareButton'>
              <AiOutlineShareAlt size={30} className="icon"/>
              <div className="shareText">Share</div>
            </button>
            
          </div>
        </div>
        <div className="channelInfo">
          <img src={ChannelPic} className='channelPic' alt="" srcset="" />
          <div className="ChannelName">Figma Boi</div>
        </div>
      </div>
      <div className="recommendation">
      recommendation
      </div>
    </div>
  )
}

export default Video