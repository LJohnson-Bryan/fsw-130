import {React, useState} from 'react';
import {ThingContextConsumer} from './ThingsContext';
import Comment from './Comment';

const Card = (props) => {
    const [showEditForm, setEditForm] = useState(false);
    const [editFormValue, setEditFormValue] = useState(props.title)
    const [editFormDescription, setEditFormDescription] = useState(props.description)
    const [comments, setComments] = useState([]);
    const [editComment, setEditComment] = useState('');

    const deleteComment = (comment) => {
        const indexOfComment = comments.indexOf(comment);
        const newData = comments;
        console.log(`Attempting to delete ${comment} at index ${newData.indexOf(comment)}`)
        newData.splice(indexOfComment, 1);
        setComments(newData)
        setEditFormValue('');
    }

    return (
        <ThingContextConsumer>
            {context => (
                <div className="card">
                    <div className="img" style={{backgroundImage: "url(" + props.link + ")"}}></div>
                    <span>{props.title} - {props.description}</span>    
                    {showEditForm && <input value={editFormValue} onChange={e => setEditFormValue(e.target.value)} placeholder="Enter the ugly thing here." style={{marginTop: "15px"}} />}
                    {showEditForm && <input value={editFormDescription} onChange={e => setEditFormDescription(e.target.value)} placeholder="Enter the ugly thing here." style={{marginTop: "5px"}} />}
                    <button className="mt-2" onClick={() => {
                        if(showEditForm) {
                            context.updateThing(props.title, {title: editFormValue, description: editFormDescription, link: props.link});
                        }
                        showEditForm ? setEditForm(false) : setEditForm(true);
                    }}>Edit</button>
                    <button className="mt-2" onClick={() => context.removeThing(props.title)} >Delete</button>
                <div className="mt-2">

                        <input value={editComment} onChange={e => setEditComment(e.target.value)}  style={{ marginBottom: "0px" }} />
                        <button style={{ fontSize: "15px", padding: "5px 10px", marginTop: "10px"}}
                        onClick={() => {
                            setComments(prevState => [...prevState, editComment]);
                            setEditComment('');
                        }}>Submit Comment</button>
                    <p>Comments:</p>
                    {comments.map(item => (
                        <Comment content={item} deleteComment={deleteComment}/>
                    ))}
                </div>
                </div>
            )}
        </ThingContextConsumer>
    );
}

export default Card;
