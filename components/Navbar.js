import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { auth, provider } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import { useRouter } from "next/router";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../reduxFeatures/user/userSlice";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        router.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          router.push("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <nav className={styles.nav}>
      <FaBars className={styles.bars} />
      <Link href="/home">
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src="/assets/images/logo.svg"
            alt="Disney+"
          />
        </div>
      </Link>
      {!userName ? (
        <div className={styles.login} onClick={handleAuth}>
          Login
        </div>
      ) : (
        <>
          <div className={styles.navMenu}>
            <Link href="/home">
              <div className={styles.menu_links}>
                <div>
                  <img src="/assets/images/home-icon.svg" alt="HOME" />
                  <span className={styles.span}>HOME</span>
                </div>
              </div>
            </Link>
            <div className={styles.menu_links}>
              <div>
                <img src="/assets/images/search-icon.svg" alt="SEARCH" />
                <span className={styles.span}>SEARCH</span>
              </div>
            </div>
            <div className={styles.menu_links}>
              <div>
                <img src="/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span className={styles.span}>WATCHLIST</span>
              </div>
            </div>
            <div className={styles.menu_links}>
              <div>
                <img src="/assets/images/original-icon.svg" alt="ORIGINALS" />
                <span className={styles.span}>ORIGINALS</span>
              </div>
            </div>
            <div className={styles.menu_links}>
              <div>
                <img src="/assets/images/movie-icon.svg" alt="MOVIE" />
                <span className={styles.span}>MOVIE</span>
              </div>
            </div>
            <div className={styles.menu_links}>
              <div>
                <img src="/assets/images/series-icon.svg" alt="SERIES" />
                <span className={styles.span}>SERIES</span>
              </div>
            </div>
          </div>
          <div className={styles.signOut}>
            <img className={styles.userImage} src={userPhoto} alt={userName} />
            <div className={styles.dropDown}>
              <span onClick={handleAuth}>Sign Out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
