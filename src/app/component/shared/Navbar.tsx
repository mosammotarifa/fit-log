"use client";
import { useContext } from "react";
import Image from "next/image";
import navbarpic from "@/assets/logo.png";
import Link from "next/link";
import { workoutContext } from "@/context/WorkoutProvider";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { todaysPlan, savePlan } = useContext(workoutContext);
  const pathname = usePathname();
  // Navigation links reusable helper
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`transition-all duration-200 ${
            pathname === "/"
              ? "text-primary text-lg font-bold"
              : "font-medium hover:text-primary"
          }`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/myplan"
          className={`transition-all duration-200 ${
            pathname == "/myplan"
              ? "text-primary text-lg font-bold"
              : "font-medium hover:text-primary"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div>
      {/* Sticky Navbar with Glassmorphism */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-base-200 bg-base-100/80 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar min-h-16 px-0 justify-between">
            {/* LEFT: Logo & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              {/* Mobile Hamburger Dropdown */}
              <div className="dropdown lg:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                  aria-label="Open Menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>

                {/* Mobile Dropdown Menu */}
                <ul
                  tabIndex={0}
                  className="menu menu-md dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-base-200 gap-1"
                >
                  {links}
                </ul>
              </div>

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
              >
                <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-primary/10 ">
                  <Image
                    src={navbarpic}
                    alt="FitLog Logo"
                    width={28}
                    height={28}
                    // className="object-contain"
                  />
                </div>
                <span className="text-xl font-black tracking-wider from-primary to-secondary bg-clip-text ">
                  FITLOG
                </span>
              </Link>
            </div>

            {/* MIDDLE: Desktop Navigation Menu */}
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
            </div>

            {/* RIGHT: User Action Items / Stats */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Plan Count */}
              <button className="btn btn-ghost btn-sm gap-2 rounded-full font-medium border border-base-200 hover:border-primary/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
                <span className="hidden sm:inline text-xs">Plan</span>
                <span className="badge badge-sm font-semibold bg-[#ccff00] text-black">
                  {" "}
                  {todaysPlan.length}{" "}
                </span>
              </button>

              {/* Saved Count */}
              <button className="btn btn-ghost btn-sm gap-2 rounded-full font-medium border border-base-200 hover:border-primary/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
                <span className="hidden sm:inline text-xs">Saved</span>
                <span className="badge badge-sm font-semibold">
                  {" "}
                  {savePlan.length}{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center">
          {/* Main content goes here */}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
