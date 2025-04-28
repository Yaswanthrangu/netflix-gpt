import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (email, password) => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if(msg) return;

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value , photoURL: "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit = {(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black/80 my-20 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {(!isSignInForm) && <input ref = {name} type="text" placeholder="Name" className="bg-gray-700 w-full p-4 my-3" />}
        <input ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold py-4">{errorMessage}</p>
        <button className="p-4 my-5 bg-red-700 w-full rounded-lg" onClick = {() => handleButtonClick(email, password)}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-1 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
