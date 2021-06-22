import React, { FormEvent, useState } from "react";
import {Link} from 'react-router-dom'
import { useReusableFunction } from './useReUsable';
import './styles.scss';
import { IValidate } from "./types";

const Signup = ({firebase}:IValidate): JSX.Element => {
  const username = useReusableFunction("");
  const email = useReusableFunction("");
  const password = useReusableFunction("");
  const repassword = useReusableFunction("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password.value, repassword.value)
    if(password.value !== repassword.value){
        // const errorMessage =  <p style={{backgroundColor: 'red'}}>passwords do not match</p>
         alert('error')
    }else if(firebase){
        firebase.doCreateUserWithEmailAndPassword(email.value, password.value)
        .then(authUser=>{
          if(authUser.additionalUserInfo?.isNewUser){
            alert('Account successfully created')
          }
        })
        // .catch(error => {
        //     return <p style={{backgroundColor: 'red'}}>{error.message}</p>
        //   });
    }
   
 
  };
  return (
    <section>

<h2 className='validation-title'>Welcome!</h2>
    <section className='validation-container validation-container--signup'>
    <form onSubmit={handleSubmit} className='user-form user-form--signup'>
      <input
        type="text"
        placeholder="Username"
        className="input"
        {...username}
      />
      <input type="email" placeholder="Email Address" className='input' {...email} />
      <input type="password" placeholder="Password" className='input' {...password} />
      <input type="password" placeholder="Confirm Password" className='input' {...repassword} />
      <button type="submit" className='btn--validate' >Enter</button>
    <p className='validated-question'>already have an account? <Link to='/signin' className='validation-cta'>sign in</Link></p>
    </form>
    </section>
    </section>
  );
};

export default Signup;
