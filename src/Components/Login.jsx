import React from 'react'
import "./scss/login.scss"
export default function Login() {
  return (
    <>
    <div className='main-page'>
      <div className='left_side'>
        <span id="section1">
          <h1 className="left-heading-1">
            ARTICALIA
          </h1>
        </span>
        <div id="section-2">
          <h1 className="section-2_heading">Start your journey with us.</h1>
          <p className="section-2-pera">
            Discover the world's best Articles of freelancers and business owners.
          </p>
        </div>
        <div className='section-3'>
          <div className='section-31'>
            <span className='comments'><p>Simply unbelievable! I am really surprised that articles in here are so understandable and well written...</p></span>
            <div className="user">
              <img src="./Elon_Musk_Royal_Society_(crop2).webp" alt="none"/>
              <span className="user_details">
                <h3>Elon Musk</h3>
                <p>businessman</p>
              </span>
            </div>
          </div>
          <div className='comment-nav'>
            <span className='dot1'></span>
            <span className='dot2'></span>
            <span className='dot3'></span>
          </div>
        </div>
      </div>
      <div className='right_side'>
        <div className='section_1'>
          <span>
            <h2>Sign up</h2>
            <div>
              <p>Have an account?</p>
              <button>Login</button>            
            </div>
          </span>
        </div>
        <form action="" className='section_2' onSubmit={(e)=>e.preventDefault()}>
          <div className='section_2_1'>
            <h3>Looking for?</h3>
            <div className='articletype'>
              <button>
                <input type="radio" id="html" name="fav_language" value="Projects"/>
                <label for="html">Projects</label>
              </button>
              <button className={false && 'active-radio'}>
                <input type="radio" id="css" name="fav_language" value="Public"/>
                <label for="css">Public</label>
              </button> 
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}
