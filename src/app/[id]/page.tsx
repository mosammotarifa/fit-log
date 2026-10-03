import Image from "next/image";
import Link from "next/link";
import { Itype } from "@/type/type";
import MyTodaysPlan from "../component/homepage/MyTodaysPlan";
import SavePlan from "../component/homepage/SavePlan";

export interface IWorkoutDetails {
  params: {
    id: string;
  };
}

const getdata = async (): Promise<Itype[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  const data = await res.json();

  return data;
};

const WorkoutDetails = async ({ params }: IWorkoutDetails) => {
  const { id } = await params;

  const workoutDetail = await getdata();

  const workout = workoutDetail.find(
    (workout: Itype) => workout.id === Number(id),
  );

  if (!workout) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-bold">Workout not found</h2>
      </div>
    );
  }

  const muscleGroups = workout.muscleGroups || [];
  const instructions = workout.instructions || [];

  return (
    <div className="min-h-screen w-full bg-base-200 p-3 sm:p-4 md:p-6">
      <div className="group mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-lg md:flex-row">
        {/* LEFT — Image */}
        <div className="relative h-[240px] w-full sm:h-[320px] md:h-[600px] md:w-1/2 lg:h-auto">
          <Link
            href={`/${workout.id}`}
            className="relative block h-full w-full overflow-hidden"
          >
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Difficulty */}
            {workout.difficulty && (
              <span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:right-4 sm:top-4">
                {workout.difficulty}
              </span>
            )}
          </Link>
        </div>

        {/* RIGHT — Content */}
        <div className="flex w-full flex-col items-center p-5 text-center sm:p-6 md:w-1/2 md:items-start md:text-left md:justify-center md:p-10 lg:p-14">
          {/* Name */}
          <Link href={`/${workout.id}`}>
            <h2 className="mb-3 text-2xl font-bold leading-tight text-base-content sm:text-3xl lg:text-4xl">
              {workout.name}
            </h2>
          </Link>

          {/* Description */}
          {workout.description && (
            <p className="mb-5 text-sm leading-6 text-base-content/70 sm:text-base sm:leading-7">
              {workout.description}
            </p>
          )}

          {/* Muscle Groups */}
          {muscleGroups.length > 0 && (
            <div className="mb-5">
              <h3 className="mb-3 text-sm font-bold sm:text-base">
                Muscle Groups
              </h3>

              <div className="flex flex-wrap gap-2">
                {muscleGroups.map((group: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#C2F800] px-3 py-1.5 text-xs font-semibold text-black sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Workout Information */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 border-t border-base-200 pt-5 sm:gap-5">
            {workout.equipment && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
                  Equipment
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  🏋️ {workout.equipment}
                </p>
              </div>
            )}

            {workout.sets && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
                  Sets
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  {workout.sets}
                </p>
              </div>
            )}

            {workout.reps && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
                  Reps
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  {workout.reps}
                </p>
              </div>
            )}

            <div>
              <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
                Duration
              </p>
              <p className="mt-1 text-sm font-semibold sm:text-base">
                ⏱️ {workout.duration} min
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
                Calories
              </p>
              <p className="mt-1 text-sm font-semibold sm:text-base">
                🔥 {workout.caloriesBurned} kcal
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
                Rating
              </p>
              <p className="mt-1 text-sm font-semibold sm:text-base">
                ⭐ {workout.rating}
              </p>
            </div>
          </div>

          {/* Instructions */}
          {instructions.length > 0 && (
            <div className="mt-5 border-t border-base-200 pt-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider sm:text-sm">
                Instructions
              </h3>

              <ul className="list-disc space-y-1.5 pl-5 text-xs leading-5 text-base-content/80 sm:space-y-2 sm:text-sm sm:leading-6">
                {instructions.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="w-full sm:w-auto">
              <MyTodaysPlan workout={workout} />
            </div>

            <div className="w-full sm:w-auto">
              <SavePlan workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
