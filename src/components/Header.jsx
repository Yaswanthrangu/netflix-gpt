import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import {LOGO} from "../utils/constants";
import { useState } from "react";


const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      navigate("/error");
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="relative">
          <img
            alt="usericon"
            src={user?.photoURL}
            className="w-12 h-12 cursor-pointer rounded-full"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-20">
              <button
                onClick={handleSignOut}
                className="block px-4 py-2 text-black cursor-pointer hover:bg-gray-200 w-full text-left"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;