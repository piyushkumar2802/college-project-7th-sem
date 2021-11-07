import React , { UseState } from 'react';
import Speech from 'react-speech';
import { useState } from 'react';

function Speak() {
  const [autoplay , setautoplay] = useState()
  const style = {
    display: "none"
  }

  return (
    <div style={style}>
      < Speech
        text="Welcome TO Murli construction"
        rate="0.7"
        // volume="0"
        // voice="Google IN English Female"
      />
    </div>
  )
}

export default Speak;
