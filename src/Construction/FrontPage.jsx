import React, { Fragment } from 'react';
import Speek from './Speak'
import Logo from './components/Image/Logo.png';

function FrontPage() {
    const Main_div = {
        width: '100%',
        height:'100vh',
        background:'#474f66',
        display:'grid',
        placeItems:'center'
      }
      const center_div = {
          width:'15rem',
          height:'15rem',
          position:' relative'
      }
      const img = {
          width:'12rem',
          height:'10rem',
          position:' absolute',
          top:'48%',
          left:'50%',
          transform:'translate(-50% , -50%)'
      }
      const h1 = {
          color:'#0a58ca;',
          position: 'absolute',
          top:'70%',
          left:'auto'
      }
      const rotate = {
          width: '15rem',
          height:'15rem', 
          borderRight:'0.3rem solid Green',
          borderRadius:'50%',
          position:'absolute'
      }
    return (
        <Fragment>
            < Speek />
            <div style={Main_div}>
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
