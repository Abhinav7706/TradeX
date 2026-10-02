import React from 'react';

function Universe() {
  return ( 
    <div className="container ">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extract your trading and investment experience even further with our partner platforms</p>
        
        
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:'100px', height:'80px'}}/>
          <p className='text-small text-muted'>Algo & strtegy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
         <img src="media/images/sensibullLogo.svg" style={{width:'100px', height:'80px'}}/>
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:'100px', height:'80px'}}/>
          <p className='text-small text-muted'>Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:'100px', height:'80px'}}/>
          <p className='text-small text-muted'>Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
         <img src="media/images/dittoLogo.png" style={{width:'100px', height:'80px'}}/>
          <p className='text-small text-muted'>Insurance</p>
        </div>
        <button className="p-3 btn btn-primary mb-5 mt-5 fs-5" style={{width:"15%",margin:" 0 auto"}}>SignUp</button>
      </div>
    </div>
   );
}

export default Universe;