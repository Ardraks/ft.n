
import axios from "axios";
import "./Post.css";
import { Link } from "react-router-dom";
import baseurl from "../Api";
import { useEffect, useState } from "react";


const Post = () => {


  var [users,setUsers] = useState([]);


  useEffect(()=>{
      axios.get(baseurl+'/write/writesview')
      .then(response =>{
  console.log(response.data)
          setUsers(response.data) })
      .catch(err=>console.log(err))
  },[])

  return (

  <div className="post">
    {users.map((value,index)=>(
      <div  key={index}>
      <img 
        className="postImg"
      src={value.image}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">{value.title}
          {/* <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link> */}
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">{value.desc}
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam? */}
      </p>
      </div>
        ))}
    </div>
  );
}
export default Post