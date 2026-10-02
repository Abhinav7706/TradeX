import React from 'react';

function Hero() {
  return ( 
    <div className="container">     
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className='text-muted mt-3 fs-4'>Free equuity investments and flat 20 rupee trady and E&Q trades</h3>
        </div>
        <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src='media/images/pricingEquity.svg'/>
          <h1 className='fs-4'>Free equity delivery</h1>
          <p className='text-muted'>All equity delivery investments (NSE,BSE), are absolutely free -rupee 0 brokerage.</p>
        </div>
       <div className="col-4 p-4">
          <img src='media/images/intradayTrades.svg'/>
          <h1 className='fs-4'>Intraday and F&Q trades</h1>
          <p className='text-muted'>Flat Rs.20 or 0.03(whichever is lower) per excuted order on intraday trades across equity, currency, and commodity trades.</p>
        </div>
       <div className="col-4 p-4">
          <img src='media/images/pricingEquity.svg'/>
          <h1 className='fs-4'>Free direct MF</h1>
          <p className='text-muted'>All direct mutual fund investments are absolutely free - rupee 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
   );
}

export default Hero;