import React, { useEffect, useState} from 'react'
import './Home.css'
import Card from '../components/Card.js'
import axios from "axios"

function Home(props) {

  const [videos, SetVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${props.type}`)
      SetVideos(res.data)
      console.log("hello"+ res.data)
    }
    fetchVideos();

  },[props.type])

  return (
    <>
    <div className='home-main-container'> 
    {videos.map((video) => (
        <Card key={video._id} video={video}/> 
      ))}
        
    </div>
    </>
    
  )
}

export default Home