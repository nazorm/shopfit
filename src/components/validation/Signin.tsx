import React, { FormEvent } from "react";
import {Link} from 'react-router-dom'
import { useReUsableFunction } from "./useReUsable";

const Signin = (): JSX.Element => {
  const email = useReUsableFunction("");
  const password = useReUsableFunction("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email.state, password.state);
  };
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input type="text" placeholder="Email Address" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <button type="submit">Enter</button>
      <p className='validated-question'>don't have an account? <Link to='/signup' className='validation-cta'>sign in</Link></p>

    </form>
  );
};

export default Signin;
