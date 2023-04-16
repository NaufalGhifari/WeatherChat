import React from 'react';

function Comments() {

    return(
        <div className='comments-div'>
            <h2 className='text-centered'>Now, what do you think?</h2>
            
            <div class="comment-section">
            <h2>Comments</h2>
            <div class="comments">
                
                <div class="comment">
                <div class="comment-details">
                    <h4 class="comment-author">John Doe</h4>
                    <span class="comment-date">2 hours ago</span>
                </div>
                <p class="comment-body">This is a comment.</p>
                </div>
                <div class="comment">
                <div class="comment-details">
                    <h4 class="comment-author">Jane Doe</h4>
                    <span class="comment-date">1 hour ago</span>
                </div>
                <p class="comment-body">This is another comment.</p>
                </div>
            </div>

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

            
        </div>
    )
};

export default Comments