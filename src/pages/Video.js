import React, { useEffect, useState} from 'react'
import './Video.css'
// import { AiFillLike } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt} from "react-icons/ai";
import ChannelPic from '../Assets/channels_profile.jpg'
import Comment from '../components/Comment.js';
import SideCard from '../components/SideCard.js'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { format } from "timeago.js";

function Video() {
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];

  const [video, SetVideo] = useState({});
  const [channel, setChannel] = useState({});
  const [comments, setComments] = useState([]);

  async function fetchData () {
    try {
      const response = await fetch(`/videos/find/${path}`);
      const videoData = await response.json();
      console.log(videoData);
      SetVideo(videoData);
  
      const userInfoResponse = await fetch(`/users/find/${videoData.userID}`);
      const userInfo = await userInfoResponse.json();
      console.log(userInfo);
      setChannel(userInfo);
  
      const commentsResponse = await fetch(`/comments/${videoData._id}`);
      const commentsInfo = await commentsResponse.json();
      console.log(commentsInfo, "yoo");
      setComments(commentsInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as needed
    }
  }

  useEffect(()=>{
    
    // fetch(`/videos/find/${path}`).then(res => res.json()).then((response)=>{
    //   console.log(response);
    //   SetVideo(response);
    //   fetch(`/users/find/${response.userID}`).then(res => res.json()).then( userInfo =>{
    //     console.log(userInfo);
    //     setChannel(userInfo);
    //   })

    //   fetch(`/comments/${video._id}`).then(res => res.json()).then(commentsInfo =>{
    //     console.log(commentsInfo,"yoo");
    //     setComments(commentsInfo);
    //   })
    // })

    
    fetchData()
      

  },[path, dispatch])

  return (
    <div className='container'>
      <div className="content">
        <div className="videoContent">
        {/* width="854" height="480" */}
          <iframe className='video' src="https://www.youtube.com/embed/Fa1u4QEGZp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="title">{video.title}</div>
        <div className="details">
          <div className="viewCount">{video.views} views • {format(video.createdAt)}</div>
          

          <div className="interactButtons">
            
            <AiOutlineLike size={25} className="icon"/>
            <div className="likeCount">{video.likes?.length}</div>

            <AiOutlineDislike size={25} className="icon"/>
            <div className="dilikeCount">{video.dislikes?.length}</div>

            <button className='shareButton'>
              <AiOutlineShareAlt size={25} className="icon"/>
              <div className="shareText">Share</div>
            </button>
            
          </div>
        </div>
        <div className="channelInfo">
          <img src={ChannelPic} className='channelPic' alt="" srcset="" />
          <div className="channelProfile">
            <div className="ChannelName">{channel.name}</div>
            <div className="subscriberCount">{channel.subscribers} subscribers</div>
          </div>
          
          <button className='subscribeButton'>Subscribe</button>
        </div>

        <div className="videoDescription">
            {video.description}
          </div>

        <div className="commentSection">
          
          <div className="userCommentSection">
            <img className="channelPic" src={ChannelPic}/>
            <div className="commentInput">Add a comment</div>
          </div>

          <div className="allComments">
          
          
          {comments.map((comment) => (
            
            <Comment key={comment.id} commentInfo={comment} />
          ))}

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