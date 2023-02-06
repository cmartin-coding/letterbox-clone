import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (ev) => {
    ev.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex ml-8 mt-16">
      <div className="p-10 border w-1/4 rounded-lg bg-slate-500">
        <h1 className="text-xl text-white font-bold pb-5">Sign In!</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col  gap-1">
              <label className="text-white" htmlFor="e-mail">
                Email-address
              </label>
              <input
                type="email"
                value={email}
                className="p-2 rounded-lg"
                placeholder="Email Address"
                onChange={(ev) => {
                  setEmail(ev.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-white">
                Create Password
              </label>
              <input
                type="password"
                className="p-2 rounded-lg"
                value={password}
                placeholder="Password"
                onChange={(ev) => {
                  setPassword(ev.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="border p-2  rounded-lg border-2 pointer hover:bg-slate-300"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="flex justify-between text-white pt-4">
          Don't have an account? {""}
          <NavLink to="/new-acc" className="pointer underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
