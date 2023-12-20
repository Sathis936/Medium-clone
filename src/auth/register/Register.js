import React, { useState } from "react";
import { verifyEmailAddress } from "../../utility/Verification";
import ButtonAppBar from "../../components/home/Navbar";
import bcrypt from 'bcryptjs'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    
  function handleForsubmission(e){
    e.preventDefault();
    const hashedPassword =bcrypt.hashSync(password,10);
    const user={name,email,age, username,password};
    const users= JSON.parse(localStorage.getItem("users"));
    user.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Successfully Registered");
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setUserName("");
    setAge("0");
    setConfirmPassword("");
  }

  return (
    <>
    <ButtonAppBar/>
      <h1>Register Page</h1>
      <form onSubmit={handleForsubmission}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
        />
        <br />
        
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          style={{ padding: "10px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        
        {verifyEmailAddress(email) ? (
          <small style={{ color: "green" }}>Email Verified</small>
        ) : (
        (email.length > 5 ?<small style={{ color: "red" }}>Email Not Valid</small> :"")
        
        )}
        <input
            className='register-form-age'
            type="number"
            placeholder="Age"
            min={age}
            max={120}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ padding: "10px" }}required
        />
        <br/>
        <input 
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter username"
            style={{padding: "10px" }}
            required
        />
        <input 
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
            style={{padding: "10px" }}
            required
        />
        <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            style={{padding: "10px" }}
            required
        />
        <input
         type="submit"
         />

      </form>
    </>
  );
}

export default Register;
