import React, { useState, useEffect } from "react";
import "./App.css";
// import ModalSanjiv from "./Components/ModalSanjiv";
import Post from "./Components/Post";
import { db } from "./firebase";

function App() {
  const [SignUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect -> Runs a piece of code based on a specific condition

  useEffect(() => {
    // This is where the code runs
    db.collection("posts").onSnapshot((snapshot) => {
      // every time a new post is added, this code fire...
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });

  }, []);

  const signUp = (event) => {
    event.preventDefault();
  }

  return (
    <div className="app">
      {/* Modal */}
      <div>
        {/* <h3>There I am creating SignUp Modal button</h3> */}
        <button
          className="openSignUpBtn"
          onClick={() => {
            setSignUp(true);
          }}
        >
          SignUp
        </button>
        {/* {SignUp && (
          <ModalSanjiv
            signUpModal={setSignUp}
            closeModal={setSignUp}
            email={email}
            fullname={fullname}
            username={username}
            password={password}
          /> */}

          <div className="modalBackground"
           open={open}
           onClose={()=> setOpen(false)}>
           
            <div className="modalContainer">
              {/* <button className="titleCloseBtn" onClick={() => closeModal(false)}>
              X
            </button> */}
              <div className="modal__title">
                <img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="logo"
                />
              </div>

              <div className="modal__body">
                <h2 className="singup__title">
                  Sign up to see photos and videos from your friends.
                </h2>
                <button className="Modal__FbLogin">Login with Facebook</button>
                <input
                  className="Modal__Inputs"
                  type="text"
                  placeholder="Mobile Number or Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <nput
                  className="Modal__Inputs"
                  type="text"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                <input
                  className="Modal__Inputs"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="Modal__Inputs"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="modal__footer">
                <p>
                  People who use our service may have uploaded your contact
                  information to Instagram. <strong>Learn More</strong>{" "}
                </p>
                <p>
                  By signing up, you agree to our{" "}
                  <strong>Terms , Data Policy </strong> and{" "}
                  <strong> Cookies Policy</strong> .
                </p>
                <div className="Modal__BtnCon">
                  <button type="submit" className="Modal__signupBtn" onClick={signUp}>Sign up</button>
                </div>
              </div>
            </div>
            <div className="lower__part">
              <p>Have an account? Log in </p>
            </div>
          </div>
         {/* )} */}
      </div>

      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>
        Hello cleaver programmer's lets build an instagram clone app with
        React🚀
      </h1>

      {/* posts */}

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/* posts 1hr25min10sec*/}
    </div>
  );
}

export default App;
