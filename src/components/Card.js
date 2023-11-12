import React, { useEffect, useState} from 'react'
import styles from './Card.css'
import Thumbnail from '../Assets/sampleThumbnailImg.jpg'
import ProfilePicture from  '../Assets/channels_profile.jpg'
import { Link } from 'react-router-dom'
import {format} from "timeago.js";
import axios from "axios"

const Card = (props) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${props.video.userID}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [props.video.userId]);

  return (
    <Link to={`/video/${props.video._id}`} style={{textDecoration: "none"}}>
    <div className='card-main-container'>
         <img className='card-image' src={props.video.imgURL} alt="" />
         <div className='videoInfo'>
          <div className="row">
            <img className='profilePicture' src={channel.imgURL} alt="" srcset="" /> 
            
          </div>
          <div className="row">
            <div className="cardTitle">{props.video.title}</div>
            <div className="channelName">{channel.name}</div>
            <div className="viewCount">{props.video.views} views &#183; {format(props.video.createdAt)}</div>
          </div>
          
         </div>

    </div>
    </Link>
  )
}

export default Card