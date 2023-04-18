import { useEffect, useState } from 'react';
import React from 'react';

function Comments() {

    // fetch data from '/comments' endpoint
    const [commentsData, setCommentsData] = useState([]);
    useEffect(() => {
        fetch('/comments')
        .then(response => response.json())
        .then(data => setCommentsData(data));
    }
    , []);
    
    console.log(commentsData);

    return(
        <div className="comments-div">
            
            {commentsData.map((comment) => (
                <div class="comments">
                    <div class="comment">
                    <div class="comment-details">
                        <h4 class="comment-author">{comment.username}</h4>
                    </div>
                    <p class="comment-body">{comment.comment}</p>
                    </div>                    
                </div>
            ))}


            

            <form id="comment-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required></input>
                </div>
                <div class="form-group">
                    <label for="comment">Comment</label>
                    <textarea id="comment" name="comment" required></textarea>
                </div>
                <button type="submit">Post Comment</button>
            </form>
            
        </div>
    )
};

export default Comments



