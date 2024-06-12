"use client";
import { signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <>
      <button
        className="bg-red-500/80 p-2 px-5 rounded-xl"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </>
  );
};
