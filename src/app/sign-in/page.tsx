import { auth } from "../api/auth/[...nextauth]/auth";
import { SignIn } from "../components/signin";
import { SignOut } from "../components/signout";

export default async function signInPage() {
  const session = await auth();
  console.log(session);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {session ? (
        <div className="flex gap-5 flex-col items-center font-extralight">
          <p>
            Name: <b>{session?.user?.name}</b>
          </p>
          <p>
            Email: <b>{session?.user?.email}</b>
          </p>
          <img
            src={session?.user?.image || ""}
            alt="user img"
            className="rounded-xl"
          />
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
