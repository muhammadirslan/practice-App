import React from "react";

export default function SignIn() {
  return (
    <>
      <h1>Sign In</h1>
      <div>
        <input type="text" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <input type="button" value="sign In" />
      </div>
    </>
  );
}
