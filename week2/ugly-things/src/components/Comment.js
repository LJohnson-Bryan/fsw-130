import React from 'react';

const Comment = (props) => {
    return ( 
        <p>
            {props.content} <button style={
                {
                    fontSize: "10px",
                    padding: "5px 10px",
                    marginTop: "10px"
                }
            }
            onClick={() => {
                props.deleteComment(props.content)
            }}>Delete This Comment</button>
        </p> 
    );
}

export default Comment;
