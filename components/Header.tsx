import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter()
  const isCurrentUrl = (pathname: string): boolean => {
    if(router.pathname === pathname){
      return true
    }else {
      return false
    }
  }
  return (
    <>
    <div className="flex justify-center border-b-4 border-gray-500">
        <ul className="flex mx-16 my-5">
          <li className="mr-6">
            <Link
              className={`font-semibold text-xl text-blue-500 hover:text-blue-700 ${isCurrentUrl("/") ? "underline" : "no-underline"}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              className={`font-semibold text-xl text-blue-500 hover:text-blue-700 ${isCurrentUrl("/about") ? "underline" : "no-underline"}`}
              href="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className={`font-semibold text-xl text-blue-500 hover:text-blue-700 ${isCurrentUrl("/link") ? "underline" : "no-underline"}`}
              href="/link"
            >
              link
            </Link>
          </li>
        </ul>
    </div>
      
      {/* <hr className="border-2 border-slate-400" /> */}
    </>
  );
}
