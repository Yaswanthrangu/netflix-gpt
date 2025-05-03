import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import cineLogo from '../../public/cinegpt.png';


const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 w-screen px-4 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full flex flex-row justify-between items-center md:w-auto">
        <img className="w-32 md:w-44" src={cineLogo} alt="logo" />
        {user && (
          <div className="flex flex-row items-center gap-2 md:hidden">
            <select
              className="h-8 px-2 bg-black text-white text-xs font-medium rounded-md cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button
              className="w-8 h-8 bg-red-500 rounded-full text-sm cursor-pointer"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "🏠" : "🔎"}
            </button>
            <div className="relative">
              <img
                alt="usericon"
                src={user?.photoURL}
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg z-50">
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-200 w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {user && (
        <div className="hidden md:flex flex-row items-center gap-4">
          <select
            className="h-10 px-3 bg-black text-white text-sm font-medium rounded-md cursor-pointer"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="w-12 h-12 bg-red-500 rounded-full text-xl cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "🏠" : "🔎"}
          </button>
          <div className="relative">
            <img
              alt="usericon"
              src={user?.photoURL}
              className="w-12 h-12 rounded-full cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 text-black cursor-pointer hover:bg-gray-200 w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
