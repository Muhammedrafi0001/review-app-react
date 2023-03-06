
import React from 'react'

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className="give_review">
        <div className="title_background">
        <h3 className="give_review_title"> Give Review</h3>
        </div>
        <form  className="give_review_form">
            <label className='give_review_form_lable'>Titl</label>
            <br/>
            <input type="text" placeholder='enter the title' className="give_review_form_input" required />
            <br/><br/>
            <label className='give_review_form_lable'>Rating</label><br/>
            <input type="text" placeholder='enter the rating' className="give_review_form_input" required />
            <br/><br/>
            <label className='give_review_form_lable'>reviews</label><br/>
            <input type="text" placeholder='enter the reviews' className="give_review_form_input"/>
            <br/> <br/>
            <button className='give_review_form_button'>Post Review</button>
        </form>
      </div>
      <div className="reviews">
        <div className="title_background">
          <h3 className="reviews_title">Reviews</h3>
        </div>
        <div className="reviews_container">
        <h4 className="reviews_title_content">
        
            Title: hgasdjgjhgasddjfsjf
        </h4>
        <h5 className='reviews_rating'>Rating: 5.0 /10</h5>
        <span className='reviews_content'>Review: qwertyuiopplmnbvcxwer sdyuuhg sdfghuygf sdftyuytre xcfghytre </span>
        </div>
        

      </div>

      
    </div>
  )
}

export default App
