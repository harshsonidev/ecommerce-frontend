import Link from "next/link";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import HeaderLogo from "./HeaderLogo";
import ThemeToggle from "./ThemeToggle";

export default function Header({ searchBar = false }) {
  return (
    <>
      <nav
        className="relative pt-4 bg-background"
        data-config-id="toggle-mobile"
        data-config-target=".navbar-menu"
      >
        <div className='container'>
          <div className="flex items-center">
            <Link className="inline-block text-lg font-bold" href="/">
              <HeaderLogo />
            </Link>
            <div className="lg:hidden ml-auto">
              <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-config-id="auto-svg-1-2"
                >
                  <path
                    d="M3 12H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 6H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 18H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            {searchBar && (
              <div className="hidden lg:flex ml-14 lg:w-80 lg:space-x-12">
                <Input
                  placeholder="Search Products"
                  className="outline-none shadow-none"
                />
              </div>
            )}
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
                <Link
                  className="inline-block mr-6 text-sm font-semibold tracking-wide hover:text-gray-900"
                  href="/login"
                >
                  Sign In
                </Link>
                <Link
                  className="inline-block mr-6 text-sm font-semibold tracking-wide hover:text-gray-900"
                  href="/signup"
                >
                  Create an account
                </Link>
                <Link
                  className="relative group inline-block py-2 px-4 text-sm font-semibold tracking-wide hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
                  href="/signup/vendor"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Join as Vendor</span>
                </Link>
                <div className="ms-4">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-2" />
      </nav>
    </>
  );
}
