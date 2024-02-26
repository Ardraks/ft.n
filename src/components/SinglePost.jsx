
import "./SinglePost.css";
import baseurl from "../Api";
import axios from "axios";
import { useEffect, useState } from "react";

const SinglePost = () => {
  var [users,setUsers] = useState([]);
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();


useEffect(()=>{
    axios.get(baseurl+'/write/writesview')
    .then(response =>{
console.log(response.data)
        setUsers(response.data) })
    .catch(err=>console.log(err))
},[])

    return (
    <div className="singlePost">
         {users.map((value,index)=>(

      <div className="singlePostWrapper"  key={index}>
        <img
          className="singlePostImg"
          src={value.image}
          alt=""
        />
        <h1 className="singlePostTitle" value={value._id}>{value.title}
          
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
             
            </b>
          </span>
          <span>{formattedDate}</span>
        </div>
        <p className="singlePostDesc">{value.desc}</p>
      </div>
         ))}
    </div>
  );
}


export default SinglePost