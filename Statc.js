import React from 'react';
function Statc() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5 '>Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customer trust Zerodha with $ 3.5+ lakhs crore worth of equity investment.</p>
                    <h2 className='fs-4'  >No spam or gimicks</h2>
                    <p className='text-muted'>No gimicks, spam , " ganification " or annoying push notifications,High 
                        quality apps that you useat your pace, the wayyou like. </p>
                    <h2 className='fs-4'>The Zerodha Universe</h2>
                    <p className='text-muted'>Not an app ,but a whole ecosystem.Our investmentin 30+ fintech startup 
                        offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do Better with money</h2>
                    <p className='text-muted'>With initiative like and Kill switch we don't faciliate ,but help 
                        better with your money.</p>

                </div>
                 <div className='col-6 p-5'>
                    <img src='Images\images\ecosystem.png'style={{width:"60%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}> Explore our products <i class=" fa fa  long-arrow-right" aria-hidden="true">  </i></a>
                        <a href='' style={{textDecoration:"none"}}> Try Kite demo <i clasa="fa fa  long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                 </div>
          
            </div>
        </div>
    );
}

export default Statc;