import React from "react";
import useFirebase from "../Hooks/useFirebase";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

const Login = () => {
  const { user, singInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";

  //handel google login
  const handelGooglelogin = () => {
    singInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div>
      <form action="" className="w-50 mx-auto login-form mb-3 mt-5">
        <p>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="enter your email"
          />
        </p>
        <p>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="password"
          />
        </p>
      </form>
      <button onClick={handelGooglelogin} className="btn btn-dark mb-4">
        Log in with google
      </button>
    </div>
  );
};

export default Login;
