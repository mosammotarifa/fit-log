
import heropic from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full Outer Border Frame */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-3xl border-2"
          style={{ borderColor: "#C2F800" }}
        >
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col items-start space-y-6 text-left">
            {/* Top Tag Text (Plain Text with Accent Color) */}
            <small
              className="text-xs sm:text-sm font-black tracking-widest uppercase"
              style={{ color: "#C2F800" }}
            >
              WORKOUT LIBRARY
            </small>

            {/* Heavy Bold Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-base-content leading-none uppercase">
              TRAIN WITH INTENT. <br className="hidden sm:inline" />
              <span className="text-base-content">LOG EVERY SET.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base text-base-content/70 max-w-xl font-normal leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* CTA Button */}
            {/* <Link href={"/workoutlist"}> */}
              <a
              href="#library"
                className="btn border-none font-extrabold tracking-wider uppercase px-8 py-3.5 text-sm rounded-xl transition-transform active:scale-95 flex items-center gap-2"
                style={{ backgroundColor: "#C2F800", color: "#0d0d0d" }}
              >
                <span>BROWSE WORKOUTS</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            {/* </Link> */}
          </div>

          {/* RIGHT COLUMN: Clean Image (No Glow & No Hover Transition) */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden border border-base-300 bg-base-100">
              <Image
                src={heropic}
                alt="banner pic"
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
