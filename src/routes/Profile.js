import { signOut } from "firebase/auth";
import { authService } from "myBase";
import React from "react";

export default () => {
  const onLogOutClick = () => {
    signOut(authService);
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
