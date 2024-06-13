import { signIn } from "../api/auth/[...nextauth]/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { prompt: "login" });
      }}
    >
      <button type="submit" className="bg-green-500/80 p-2 px-4 rounded-xl">
        Signin with Google
      </button>
    </form>
  );
}
