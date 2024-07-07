import axios from 'axios';
import { toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import {ClipLoader} from "react-spinners";

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);

  const sendMail = async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
        const {data} = await axios.post(
          "http://localhost:3000/send/mail",
          {
          name,
          email,
          message
          }, 
          {
            withCredentials: true,
            headers: {'Content-Type': 'application/json'},
          }
        );
        setName("");
        setEmail("");
        setMessage("");
        toast.success(data.message);
        setLoading(false);
    } catch(error){
      setLoading(false);
      toast.error(error.response.data.message);
        
    }
  }
  
  return (
    <div>
      <section className='contact'>
        <form onSubmit={sendMail}  className='rounded-lg'>
          <h1>CONTACT US</h1>
          <div>
            <label htmlFor="n" >Name</label>
            <input id='n' type="text" 
            value={name} 
            onChange={(e)=>{
              setName(e.target.value)
            }}/>
          </div>
          <div>
            <label htmlFor="em">Email</label>
            <input id="em" type="email" 
              value={email} 
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            />
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <input id="msg"type="text" 
              value={message} 
            onChange={(e)=>{
              setMessage(e.target.value)
            }}
            />
          </div>
          <button type='submit' disabled={loading} className='bg-slate-900 text-white p-2 rounded-lg duration-100 hover:bg-slate-800'
          >
          {loading && <ClipLoader size="20px"  color="white" />}
          
          Send Message</button>
        </form>
      </section>
    </div>
    //  style={{
    //   display : "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   padding: "10px 20px",
    //   borderRadius: "5px",
    //   backgroundColor: "#4CAF50",
    //   }}
  )
}

export default Contact