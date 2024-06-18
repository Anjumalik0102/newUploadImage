import { useState } from 'react';
import './App.css';

function Form() {
 const[name,setName]=useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

const handleChange=()=>{
  console.log('name :',name)
  console.log('password',password)
  console.log('email',email)
}
const userValue = {
  name,
  password:password,
  email:email,
}
const jsonData = JSON.stringify(userValue)

localStorage.setItem('userValue',jsonData)


  return (
    <div className="App">
      <div className='form'>
        <div className='innerForm'>
          <div className='leftForm '>
            <h2 className='heading'>Login</h2>
            <p className='para'>It's free and only takes few seconds !!</p>
            <div className='fields'>
            <label className='label' > Name </label>
            <div>
              <input 
               className='field'
              type = "text"
              placeholder='Enter your name'
              name='name'
              value={name}
              onChange={(e)=>setName(e.target.value)}
          
              
           />
          </div>
          <label className='label' >Email </label>
          <div >
              <input 
              className='field'
              type ="email"
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
           />
          </div>
          <label className='label' >Password </label>
          <div >
              <input 
              className='field'
              type ="password"
              placeholder='Enter your password'
              name='password'
             onChange={(e)=>setPassword(e.target.value)}
           />
           </div>

          </div>
          <div className='buttonDiv'>
         <button className='button' onclick={handleChange} > Submit</button>
          </div>
          </div>
         
          <div className='rightForm'>
            <img 
            className="image"
            src ="image.jpg" >
              
            </img>
         
          </div>
       
      </div>
    </div>
    </div>
  );
}

export default Form;
