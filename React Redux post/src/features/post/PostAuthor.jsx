/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { SelectAllUsers } from "../users/UserSlice";
const PostAuthor=({userId})=>
{
    const users=useSelector(SelectAllUsers)
    const author=users.find(user=>user.id === userId);
    return <span>by {author ?author.name :"Unknown author"}</span>

}
export default PostAuthor
