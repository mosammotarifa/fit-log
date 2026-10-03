import Image from "next/image";
import Link from "next/link";
import navbarpic from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-12 pt-6  pb-6  border-t border-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* LEFT: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
        >
          <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors p-1">
            <Image
              src={navbarpic}
              alt="FitLog Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FITLOG
          </span>
        </Link>

        {/* RIGHT: Footer Text */}
        <div className="text-center sm:text-right">
          <p className="text-xs text-base-content/70 font-medium">
            © 2026{" "}
            <span className="font-semibold text-base-content">FitLog</span> —
            Workout Library.
            <span className="hidden sm:inline"> • </span>
            <br className="sm:hidden" />
            <span className="italic">Train hard, log honest.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
