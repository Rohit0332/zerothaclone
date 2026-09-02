
import React from 'react';
function Hero() {
    return (  
       <div className='container p-5'>
         <div className='row text-center'>
            <img src='Images/images/homeHero.png' alt='Hero Image 'className='mb-5'/>
            <h1 className='mt-5'>Invest in Everything</h1>
            <p> Online Platform to invest in stocks, derivates and </p>
            <button  className='p-3 btn btn-danger fs-5 mb-5' style={{width:"25%",margin:"0 auto"}}>Signup</button>

         </div>

       </div>
    );
}

export default Hero;