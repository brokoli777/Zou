import React, { useEffect, useState} from 'react'
import './Video.css'
// import { AiFillLike } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt, AiFillLike, AiFillDislike} from "react-icons/ai";
import ChannelPic from '../Assets/channels_profile.jpg'
import Comment from '../components/Comment.js';
import SideCard from '../components/SideCard.js'
import { useDispatch, useSelector } from "react-redux";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { useLocation } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios"

function Video() {
 
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const [video, SetVideo] = useState({});
  const [channel, setChannel] = useState({});
  const [comments, setComments] = useState([]);


  
  const path = useLocation().pathname.split("/")[2];

  async function fetchData () {
    try {
      // const response = await fetch(`/videos/find/${path}`);
      // const videoData = await response.json();
      // console.log(videoData);
      // SetVideo(videoData);
  
      // const userInfoResponse = await fetch(`/users/find/${videoData.userID}`);
      // const userInfo = await userInfoResponse.json();
      // console.log(userInfo);
      // setChannel(userInfo);

      const videoRes = await axios.get(`/videos/find/${path}`);

      console.log("yooo"+videoRes.data.userID)

        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userID}`
        );
        SetVideo(videoRes.data)
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
  
      const commentsResponse = await fetch(`/comments/${videoRes.data._id}`);
      const commentsInfo = await commentsResponse.json();
      //console.log(commentsInfo, "yoo");
      setComments(commentsInfo);

      //dispatch(fetchSuccess(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as needed
    }
  }

  // const likeChange = async () =>{
  //   try {
  //     await fetch(`/users/like/${currentVideo._id}`);
  //     dispatch(like(currentUser._id));
  //   } catch (error) {
  //     console.error('Error fetching likes:', error);
  //   }
  // }

  // dislikeChange = async () =>{
  //   try {
  //     await axios.put(`/users/dislike/${currentVideo._id}`);
  //     dispatch(like(currentUser._id));
  //   } catch (error) {
  //     console.error('Error fetching likes:', error);
  //   }
  // }

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

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
            
            <button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser?._id)? <AiFillLike size={25} className="icon"/>: <AiOutlineLike size={25} className="icon"/>}
            </button>
            
            <div className="likeCount">{currentVideo?.likes?.length}</div>

            <button onClick={handleDislike}>
              {currentVideo?.dislikes?.includes(currentUser?._id)? <AiFillDislike size={25} className="icon"/> : <AiOutlineDislike size={25} className="icon"/>}
            </button>
            
            <div className="dislikeCount">{currentVideo?.dislikes?.length}</div>

            <button className='shareButton'>
              <AiOutlineShareAlt size={25} className="icon"/>
              <div className="shareText">Share</div>
            </button>
            
          </div>
        </div>
        <div className="channelInfo">
          <img src={ChannelPic} className='channelPic' alt=""  />
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