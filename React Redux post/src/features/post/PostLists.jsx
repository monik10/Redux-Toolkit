import { useSelector } from "react-redux"
import { SelectAllPosts } from "./PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionButtons";

const PostLists = () => {
// const posts=useSelector((state)=>state.posts);
const posts=useSelector(SelectAllPosts);
const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
console.log(posts);

  return (
    <section>
        <h2>Posts</h2>
        {
           orderedPosts.map(post=>{
            return <>
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>
                    <PostAuthor userId={post.userId}/>
                    <TimeAgo timestamp={post.date}/>
                    <ReactionsButton post={post}/>
                </p>
                
            </article>
            </>
           })

        }
    </section>
  )
}

export default PostLists