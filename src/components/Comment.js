import React from 'react'
import ChannelPic from '../Assets/channels_profile.jpg'
import './Comment.css'

function Comment() {
  return (
    <>
        <div className="otherComments">
            <img className="channelPic" src={ChannelPic}/>
            <div className="commenterInfo">
              <div className="commenterHeader">
                <div className="commenterName">Thomas Wayne</div>
                <div className="commentedDate">3 days ago</div>
              </div>
              <div className="commentText">Awesome Video, Zoe is so cool! Better than youtube! I am not being held hostage at all</div>
              
            </div>
            <div className="commentInfo"></div>
        </div>
    </>
  )
}

export default Comment