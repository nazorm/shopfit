import React, { FormEvent } from "react";
import {Link} from 'react-router-dom'
import { useReUsableFunction } from "./useReUsable";
import './styles.scss';
const Signup = (): JSX.Element => {
  const username = useReUsableFunction("");
  const email = useReUsableFunction("");
  const password = useReUsableFunction("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username.state, email.state, password.state);
  };
  return (
    <form onSubmit={handleSubmit} className='user-form'>
      <input
        type="text"
        placeholder="Username"
        className="input"
        {...username}
      />
      <input type="text" placeholder="Email Address" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <button type="submit">Enter</button>
    <p className='validated-question'>already have an account? <Link to='/signin' className='validation-cta'>sign in</Link></p>
    </form>
  );
};

export default Signup;
