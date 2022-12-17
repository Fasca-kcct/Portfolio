import Link from "next/link";

export default function Header() {
  return (
    <>
      <ul className="flex mx-16 my-5">
        <li className="mr-6">
          <Link
            className="font-semibold text-xl text-blue-500 hover:text-blue-700"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="font-semibold text-xl text-blue-500 hover:text-blue-700"
            href="/about"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            className="font-semibold text-xl text-blue-500 hover:text-blue-700"
            href="/link"
          >
            link
          </Link>
        </li>
      </ul>
      <hr className="border-2 border-slate-400" />
    </>
  );
}
