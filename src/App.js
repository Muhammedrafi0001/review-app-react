
import React, { useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';

import './App.css';



const App = () => {

    // input field states
    
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [reviews, setReviews] = useState("")
    const [items, setItems] = useState([])
   console.log(items);
    const [error, setErorr] = useState({})

    // form submit event
    const handleSubmitItem = (e) => {
        e.preventDefault();

        let item={
            title,rating,reviews
        }
       
        setItems([...items,item])
        
        handleRefresh() 
        
    }

    //form refresh
    const handleRefresh=()=>{
        setTitle("")
        setRating("")
        setReviews("") 
    }

    //delete items
    const handleDelete=(title)=>{
   const filterItems= items.filter((item)=>{
       return title !== item.title     
    })
    setItems(filterItems)
    }

    return (
        <div className='container'>
            <div className="give_review">
                <div className="title_background">
                    <h3 className="give_review_title"> Give Review</h3>
                </div>
                <form className="give_review_form" onSubmit={handleSubmitItem}>
                    <label className='give_review_form_lable'>Title</label>
                    <br />
                    <input type="text" placeholder='enter the title' className="give_review_form_input" required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br /><br />
                    <label className='give_review_form_lable'>Rating</label><br />
                    <input type="number" placeholder='enter the rating' className="give_review_form_input" required
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                    />
                    <br /><br />
                    <label className='give_review_form_lable'>Reviews</label><br />
                    <input type="text" placeholder='enter the reviews' className="give_review_form_input"
                        onChange={(e) => setReviews(e.target.value)}
                        value={reviews}
                    />
                    <br /> <br />
                    <button className='give_review_form_button' type="submit">Post Review</button><br /><br />

                  

                </form>
                <button className='give_review_form_button' onClick={handleRefresh}><RefreshIcon /></button> 
            </div>
            
                    <div className="reviews" >

                        <div className="title_background">
                            <h3 className="reviews_title">Reviews</h3>
                        </div>
                        {items.length<1?(<h2>No Reviews</h2>):""}
                        {
                items.map((item,i) => (
                        <div className="reviews_container" key={i}>
                            <CloseIcon onClick={()=>handleDelete(item.title)}></CloseIcon>
                            <h4 className="reviews_title_content">
                                  
                                Title: {item.title}
                            </h4>
                            <h5 className='reviews_rating'>Rating: {item.rating}%</h5>
                            <span className='reviews_content'>Review:{item.reviews}</span>
                            <br />

                        </div>
                          ))
                        }


                    </div>

              
        </div>
    )
}

export default App
