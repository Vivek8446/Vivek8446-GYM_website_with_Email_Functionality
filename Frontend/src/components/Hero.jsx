import React from 'react'

function Hero() {
  return (
    <>
      <section className='hero'>
        <div className='content'>
          <div className='title'>
            <h1 >It's about <span className='text-blue-500'>DRIVE</span></h1>
            <h1>It's about <span className='text-blue-500'>POWER</span></h1>
            {/* <h1>MOVING</h1> */}
          </div>
          <div className="sub-title">
            <p>Your Journey to Fitness Starts Here</p>
            <p>Unleash Your Potential</p>
          </div>
          <div className="buttons">
            {/* <button>
              Strat your Journey
            </button>
            <button>Discover Your Plan</button> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero