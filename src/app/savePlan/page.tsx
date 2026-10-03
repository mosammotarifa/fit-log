"use client"
import Image from "next/image";
import { Itype } from "@/type/type";
import { workoutContext } from "@/context/WorkoutProvider";
import Link from "next/link";
import { useContext } from "react";

interface ISavePlan {
  workout: Itype;
}

const SavePlan = ({ workout }: ISavePlan) => {
  const { setSavePlan } = useContext(workoutContext);
  const handleDelete = () => {
    setSavePlan((prev) => prev.filter((item) => item.id !== workout.id));
  };
  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-md sm:p-5 md:flex-row md:items-center md:gap-6">
      {/* Left Side: Image + Text */}
      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        {/* Image */}
        <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-40">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Workout Info */}
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h2 className="mb-3 text-xl font-bold">{workout.name}</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            <div>
              <p className="text-xs text-base-content/60">Equipment</p>
              <p className="font-semibold">{workout.equipment}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/60">Duration</p>
              <p className="font-semibold">{workout.duration}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/60">Calories</p>
              <p className="font-semibold">{workout.caloriesBurned} kcal</p>
            </div>

            <div>
              <p className="text-xs text-base-content/60">Rating</p>
              <p className="font-semibold">⭐ {workout.rating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:flex-col">
        <Link href={`/${workout.id}`} className="w-full sm:flex-1 md:w-auto">
          <button className="btn btn-outline w-full rounded-xl px-6">
            View Details
          </button>
        </Link>

        <button
          onClick={handleDelete}
          className="btn w-full rounded-xl border border-error/20 bg-error/10 px-5 text-error shadow-sm transition-all duration-200 hover:bg-error hover:text-white hover:shadow-md sm:flex-1 md:w-auto"
        >
          <i className="fa-solid fa-trash"></i>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SavePlan;
