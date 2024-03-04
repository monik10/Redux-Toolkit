/* eslint-disable react-refresh/only-export-components */
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState=[
    {id:"1",title:"Redux Toolkit",content:"It lets you decide how you want to handle everything",date: sub(new Date(), { minutes: 5 }).toISOString(),reactions:{thumpsUp:0,wow:0,heart:0,coffee:0}},
    {id:"2",title:"Slices....",content:"good slices good code",date:sub(new Date(),{minutes:10}).toISOString(),reactions:{thumpsUp:0,wow:0,heart:0,coffee:0}}
]

export const PostSlice=createSlice(
    {
        name:"posts",
        initialState,
        reducers:{
            postAdded(state,action)
            {
                state.push(action.payload)
            }
        },
        prepare(title,content,userId)
        {
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId,
                    reactions:{thumpsUp:0,wow:0,heart:0,coffee:0}
                }

            }
        },
        
        reactionAdded(state,action){
            const {postId,reaction}=action.payload
            const existingPost=state.find(post=>post.id===postId)
            if(existingPost)
            {
                existingPost.reactions[reaction]++
            }

        }

    }
)
export const SelectAllPosts=(state)=>state.posts;
export const {postAdded,reactionAdded}=PostSlice.actions;
export default PostSlice.reducer;