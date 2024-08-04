import Link from "next/link";

/*
 * This is the start page. Here you can give the
 * client your api-key and the needed informations
 * like your email and a password. This is like a register
 * page.
 */
export default function Start() {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <form>
        <h2 className="text-primary text-2xl">The minimal <Link className="underline" href={"https://selfmail.app"}>selfmail</Link> client.</h2>
      </form>
    </div>
  )
}