import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { IValidate } from "./types";
import { useReUsableFunction } from "./useReUsable";

const Signin = ({ firebase }: IValidate): JSX.Element => {
  const email = useReUsableFunction("");
  const password = useReUsableFunction("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email.state, password.state);
    if (firebase) {
      firebase
        .doCreateUserWithEmailAndPassword(email.state, password.state)
        .then((authUser) => {
          console.log(authUser);
        });
      // .catch((error) => {
      //   return <p style={{ backgroundColor: "red" }}>{error.message}</p>;
      // });
    }
  };
  return (
    <section>
      <h2 className='validation-title'>Welcome back!</h2>

      <section className="validation-container">
        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            placeholder="Email Address"
            className="input"
            {...email}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...password}
          />
          <button type="submit" className="btn--validate">
            Enter
          </button>
          <p className="validated-question">
            don't have an account?{" "}
            <Link to="/signup" className="validation-cta">
              sign in
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
};

export default Signin;
