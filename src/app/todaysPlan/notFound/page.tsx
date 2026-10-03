
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center rounded-2xl border border-base-300 bg-base-100 p-10 text-center shadow-md">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-base-200 text-3xl">
          🏋️
        </div>

        <h2 className="mb-2 text-2xl font-bold text-base-content">
          No Workouts Found
        </h2>

        <p className="mb-6 text-sm leading-6 text-base-content/60">
          There are no workouts available here yet. Explore all available
          workouts and choose what you want to do today.
        </p>

       <Link href={'/'}>
        <button className="btn bg-[#C2F800] text-black hover:bg-[#b5e900]">
          Explore Workouts
        </button>
       </Link>
      </div>
    </div>
  );
};

export default NotFound;