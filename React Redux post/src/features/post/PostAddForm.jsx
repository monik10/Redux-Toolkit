import { useState } from "react"
import { useDispatch,useSelector} from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./PostSlice";
import { SelectAllUsers } from "../users/UserSlice";

const PostAddForm = () => {
    const users=useSelector(SelectAllUsers);
    const dispatch=useDispatch();
    let[title,setTitle]=useState("");
    let [content,setContent]=useState("");
    let [userId,setUserId]=useState("");
    

    let onSavePostClick=()=>
    {
        if(title && content)
        {
            dispatch(postAdded({id:nanoid(),title,content,userId}))
        }
        setTitle("")
        setContent("")
    }
    const canSave=Boolean(title)&& Boolean(content) && Boolean(userId);
    
  return (
    <section>
        <h2>Add a New Post</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="author">Author</label>
            <select id="author" value={userId} onChange={(e)=>setUserId(e.target.value)}>
            <option value=""></option>
            {users.map(user=>{
            return <option key={user.id} value={user.id}>
            {user.name}
            </option>
             })
            }
         </select>
            </div>
            <div>
            <label htmlFor="comment">Comment</label>
            <input type="textarea" value={content} onChange={(e)=>setContent(e.target.value)}/>
            </div>
            <div>
                <button onClick={onSavePostClick} disabled={(!canSave)}>Save post</button>
            </div>
        </form>
    </section>
  )
}

export default PostAddForm
