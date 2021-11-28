import React from 'react';
// import Speek from './Speak';
import Logo from './Image/logo-1.png';
import Image1 from './Image/background.png';
// import Gstyle from './GlobleStyle';

function Title() {
    const Main_div = {
        width: '100%',
        height:'100vh',
        background:{Image1},
        display:'grid',
        placeItems:'center'
      }
      const center_div = {
          width:'15rem',
          height:'15rem',
          position:'absolute'
      }
      const img = {
          width:'12rem',
          height:'12rem',
          position:' absolute',
          top:'27%',
          left:'50%',
          transform:'translate(-50% , -50%)'
      }
      const h1 = {
          position: 'absolute',
          top:'60%',
          left:'auto'
      }
      const bgimg = {
        width:' 100%',
        height: '100vh',
      }
    return (
        <div>
            {/* < Gstyle /> */}
            {/* < Speek /> */}
            <div style={Main_div} >
                <img src={Image1} alt="" style={bgimg} />
                <div style={center_div}>
                    <img src={Logo} alt="" style={img} />
                </div>
                    <h1 style={h1}>Bhopal Health Services</h1>
            </div>
        </div>
    )
}

export default Title;