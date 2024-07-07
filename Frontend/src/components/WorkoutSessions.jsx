import React from 'react'

function WorkoutSessions() {
  return (
    <div>
      <section className='workout_session'>
        <div className="wrapper">
          <h1>TOP WORKOUT SESSION</h1>
          <p>
          Experience the intensity of High-Intensity Interval Training with our Power Hour session. This workout combines short bursts of intense exercise with recovery periods to burn calories, boost metabolism, and improve cardiovascular health. 
          </p>
          <img src="/therock5.jpg" alt="" />
        </div>
        <div className="wrapper">
          <h1>FEATURES BOOTCAMP</h1>
          <p>Our bootcamp sessions are led by certified and experienced trainers who are passionate about helping you reach your fitness goals. They provide personalized guidance, ensuring that every workout is effective and safe.</p>
          <div className="bootcamps">
          <div>
            <h4>Comprehensive Workouts</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vero cum omnis quae perferendis eum officia quasi consectetur assumenda eos.</p>
          </div>
          <div>
            <h4>Motivational Environment</h4>
            <p>Train in a positive and supportive environment where everyone encourages each other to push their limits. Our bootcamps foster a sense of community, making your fitness journey more enjoyable and motivating.</p>
          </div>
          <div>
            <h4>Progress Tracking</h4>
            <p>Stay on top of your fitness journey with our progress tracking features. We offer regular assessments and feedback to help you monitor your improvements and set new goals. Celebrate your achievements and stay motivated with our comprehensive tracking system.</p>
          </div>
          <div>
            <h4>Flexible Schedule</h4>
            <p>Our bootcamp sessions are available at various times throughout the week, making it easy to fit a workout into your busy schedule. Whether you prefer morning, afternoon, or evening classes, we have options to suit your lifestyle.</p>
          </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default WorkoutSessions