import { useState } from 'react'
import ReactPlayer from 'react-player'

function Video() {
  const [muted, setMuted] = useState(true)
  return (
    <div className='video'>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${"KREBGtEeW9U"}`}
        width="100%"
        height="330px"
        style={{ position: 'absolute', top: '0', left: '0' }}
        playing
        controls
        loop
        muted={muted}
      />
    </div>
  )
}

export default Video
