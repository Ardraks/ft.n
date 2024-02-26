import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Settings.css";
import baseurl from "../Api";
import axios from "axios";



const Settings = () => {

  
  const [file, setFile] = useState(null);
  var [selectedimage,setSelectedimage] = useState();
  const [inputs,setInputs] = useState({"username":'',"email":'',"password":''});



  var[users,setUsers] = useState([]);
  

  useEffect(()=>{
      axios.get(baseurl + "/register/sview")
      .then(response =>{
        console.log("sjbdja")
          console.log(response.data)
          setUsers(response.data)
      })
      .catch(err=>console.log(err))
  },[])


  const inputhandler =(event)=> {
    const {name,value}=event.target
   setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }


 
  const handleimage =(event)=>{
      const file = event.target.files[0];
      setSelectedimage(file)
      setFile(file)
      inputs.profilephoto=file;
  }

  const savedata =(event)=>{
    event.preventDefault();
  console.log("dgjks")

  const formdata = new FormData();
  formdata.append('username',inputs.username);
  formdata.append('email',inputs.email);
  formdata.append('password',inputs.password);
  formdata.append('profilephoto',selectedimage)

  
  fetch(baseurl + '/update/pnew',
  {method:'post',body:formdata,})
  .then((response)=>response.json())
  .then((data)=>{
      alert("record saved")
  })
  .catch((err)=>{
     console.log("error")
  })

  
  }


 
  return (
    <>
    <div className="settings">
          {users.map((value, index) => (
              <div key={index}>
          <div className="settingsWrapper">
           <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">  
          <label>Profile Picture</label>
          <div className="settingsPP">
          {file && (
        <img className="writeImg" src={URL.createObjectURL(file)}   alt="" />
      )} 
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={handleimage}

            //   onChange={(e) => setFile(e.target.files[0])}
            />
           
          </div>
          <label>Username</label>
          <input type="text" name="username"  value={value.username}
          onChange={inputhandler}
          />
          <label>Email</label>
          <input type="email" name="email" value={value.email}
          onChange={inputhandler}
           />
          <label>Password</label>
          <input type="password" name="password" value={value.password}
          onChange={inputhandler}
           />
          <button className="settingsSubmitButton" type="submit" onClick={savedata}>
           Update
          </button>  
        </form> 
        
      </div>
     
    </div>
  ))}
  
  <Sidebar/> 
  
  </div>
  </>
  );
}

  


export default Settings
