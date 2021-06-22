import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { IValidate } from "./types";
import { useReusableFunction} from "./useReUsable";

const Signin = ({ firebase }: IValidate): JSX.Element => {
  const email = useReusableFunction("");
  const password = useReusableFunction("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email.value, password.value);
    if (firebase) {
      firebase
        .doSignInWithEmailAndPassword(email.value, password.value)
        .then((authUser) => {
          console.log(authUser);
        })
      // .catch((error) => {
      //   console.log(error)
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
            type="email"
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
