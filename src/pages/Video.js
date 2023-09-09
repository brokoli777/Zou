import React from 'react'
import './Video.css'
// import { AiFillLike } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt} from "react-icons/ai";
import ChannelPic from '../Assets/channels_profile.jpg'
import Comment from '../components/Comment';
import SideCard from '../components/SideCard'

function Video() {
  return (
    <div className='container'>
      <div className="content">
        <div className="videoContent">
        {/* width="854" height="480" */}
          <iframe className='video' src="https://www.youtube.com/embed/Fa1u4QEGZp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="title">Figma Zero to Hero Guide | Sample Name</div>
        <div className="details">
          <div className="viewCount">343,000 views June,2023</div>
          

          <div className="interactButtons">
            
            <AiOutlineLike size={25} className="icon"/>
            <div className="likeCount">123</div>

            <AiOutlineDislike size={25} className="icon"/>
            <div className="dilikeCount">34</div>

            <button className='shareButton'>
              <AiOutlineShareAlt size={25} className="icon"/>
              <div className="shareText">Share</div>
            </button>
            
          </div>
        </div>
        <div className="channelInfo">
          <img src={ChannelPic} className='channelPic' alt="" srcset="" />
          <div className="channelProfile">
            <div className="ChannelName">Figma Boi</div>
            <div className="subscriberCount">23 subscribers</div>
          </div>
          
          <button className='subscribeButton'>Subscribe</button>
        </div>

        <div className="videoDescription">
            a;lskdfj;alkj ;l ;jsa ;lksfj ;lekj;lk j;lk j <br />sal jfa;lkjewlkjfhalksjhda sejf;lkhjlkfjhlaskjheflkjaslkejhflakjh <br />alkjflksejhlkfjh
          </div>

        <div className="commentSection">
          
          <div className="userCommentSection">
            <img className="channelPic" src={ChannelPic}/>
            <div className="commentInput">Add a comment</div>
          </div>

          <div className="allComments">
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
          
        </div>
      </div>
      <div className='recommendation'>
        <SideCard/>
        <SideCard/>
        <SideCard/>
        <SideCard/>
        <SideCard/>
        <SideCard/>
        <SideCard/>
        <SideCard/>
      </div>
    </div>
  )
}

export default Video