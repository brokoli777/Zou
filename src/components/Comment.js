import React, { useEffect, useState} from 'react'
import { useDispatch} from "react-redux";
import { format } from "timeago.js";
import ChannelPic from '../Assets/channels_profile.jpg'
import './Comment.css'

function Comment(props) {

  const { commentInfo } = props;

  
  const dispatch = useDispatch();
  const [commenter, setCommenter] = useState({});

  

  useEffect(()=>{
    
    fetch(`/users/find/${commentInfo.userID}`).then(res => res.json()).then((response)=>{
      setCommenter(response);
    })
      

  },[dispatch])

  return (
    <>
        <div className="otherComments">
            <img className="channelPic" src={ChannelPic}/>
            <div className="commenterInfo">
              <div className="commenterHeader">
                <div className="commenterName">{commenter.name}</div>
                <div className="commentedDate">{format(commentInfo.createdAt)}</div>
              </div>
              <div className="commentText">{commentInfo.value}</div>
              
            </div>
            <div className="commentInfo"></div>
        </div>
    </>
  )
}

export default Comment