import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [commmentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`,{
            method : 'post',
            body: JSON.stringify({username, text: commmentText}),
            headers: {
                'Content-Type': 'application/json',
                }
            });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
        }

    return (
    <div id="add-commment-form">
        <h3>Add a Comment</h3>
        <label>
            Name:
            <input type = "text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
        </label>
        <label>
            <textarea rows="4" cols="50" value={commmentText} onChange={(event)=>setCommentText(event.target.value)}/>
        </label>
        <button onClick={() => addComment()}>Add Comment</button>
    </div>
    )
}

export default AddCommentForm;