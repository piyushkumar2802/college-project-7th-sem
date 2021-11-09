import React, { Fragment } from 'react';
import Speek from './Speak'
import Logo from './components/Image/Logo.png';
import Image1 from './components/Image/Front/Img-1.png';
import Gstyle from './GlobleStyle';

function FrontPage() {
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
          height:'10rem',
          position:' absolute',
          top:'27%',
          left:'50%',
          transform:'translate(-50% , -50%)'
      }
      const h1 = {
          color:'#0a58ca;',
          position: 'absolute',
          top:'68%',
          left:'auto'
      }
      const rotate = {
          width: '15rem',
          height:'15rem', 
          borderRight:'0.5rem solid blue',
          borderLeft:'0.5rem solid red',
          borderTop:'0.5rem solid black',
          borderBottom:'0.5rem solid green',
          borderRadius:'50%',
          top:'-20%',
          position:'absolute',
          background:" none"
      }
      const bgimg = {
        width:' 100%',
        height: '100vh',
      }
    return (
        <Fragment>
            < Gstyle />
            < Speek />
            <div style={Main_div} >
                <img src={Image1} alt="" style={bgimg} />
                <div style={center_div}>
                    <div style={rotate} className="rotate"></div>
                    <img src={Logo} alt="" style={img} />
                </div>
                    <h1 style={h1}>Murli Construction</h1>
            </div>
        </Fragment>
    )
}

export default FrontPage;
