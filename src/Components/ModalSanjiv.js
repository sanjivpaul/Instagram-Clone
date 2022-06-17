import React from "react";
import "./ModalSanjiv.css";


function ModalSanjiv({ signUpModal, closeModal, email, fullname, username, password }) {


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="titleCloseBtn" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="modal__title">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
          />
        </div>

        <form action=""></form>

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
            <button className="Modal__signupBtn">Sign up</button>
          </div>
        </div>
      </div>
      <div className="lower__part">
        <p>Have an account? Log in </p>
      </div>
    </div>
  );
}

export default ModalSanjiv;
