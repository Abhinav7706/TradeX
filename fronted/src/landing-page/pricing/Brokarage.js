import React from 'react';

function Brokarage() {
  return ( 
    <div className="container">     
        <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
         <a href='' style={{textDecoration: "none"}}> <h3 className='fs-5'>Brokerage Calculator</h3></a>
         <ul style={{textAlign:"left",lineHeight:"2.5", fontSize:"12px"}} className='text-muted'>
          <li>Call & Trade and RMS auto- squareoff:Additional charges of rupee 50 + GST per order.</li>
          <li>Digital Contract notes will be sent via e-mail.</li>
          <li>Physical copies oc contrct notes, if required, shall be charged rupee 20 per contract note. courior charges apply.</li>
          <li>For NRI account (non-PIS), 0.5% or rupee 100 per excuted order for equity  (whichever is lower).</li>
          <li>If the account is in debit balance, any order placed will be charged rupee 40 per excuted onstead of rupee 20 per excuted order.</li>
         </ul>
        </div>
       <div className="col-4 p-4">
         <a href='' style={{textDecoration: "none"}}><h3 className='fs-5'>List of Charges</h3></a>
        </div>
      </div>
    </div>
   );
}

export default Brokarage;