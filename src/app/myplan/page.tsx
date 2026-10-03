"use client";

import { workoutContext } from "@/context/WorkoutProvider";
import { useContext, useState } from "react";
import TodaysPlan from "../todaysPlan/page";
import NotFound from "../todaysPlan/notFound/page";
import { Itype } from "@/type/type";
import SavePlan from "../savePlan/page";

const MyPlan = () => {
  const { todaysPlan, savePlan } = useContext(workoutContext);
  const [sortBy, setSortBy] = useState<
    "" | "duration" | "rating" | "caloriesBurned"
  >("");

  const sortedTodaysPlan = [...todaysPlan].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(b.duration) - Number(a.duration);
    }

    if (sortBy === "caloriesBurned") {
      return Number(b.caloriesBurned) - Number(a.caloriesBurned);
    }

    if (sortBy === "rating") {
      return Number(b.rating) - Number(a.rating);
    }

    return 0;
  });
  return (
    <div className="min-h-screen w-full bg-base-200 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Workout Dashboard
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-base-content/60 md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Exercises */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-base-content/60">
                  Exercises
                </p>

                <h2 className="mt-2 text-3xl font-extrabold">
                  {todaysPlan.length}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                🏋️
              </div>
            </div>
          </div>

          {/* Minutes */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-base-content/60">
                  Minutes
                </p>

                <h2 className="mt-2 text-3xl font-extrabold">
                  {todaysPlan.reduce(
                    (total, workout) => total + Number(workout.duration || 0),
                    0,
                  )}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-2xl">
                ⏱️
              </div>
            </div>
          </div>

          {/* Calories */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-base-content/60">
                  Calories
                </p>

                <h2 className="mt-2 text-3xl font-extrabold">
                  {todaysPlan.reduce(
                    (total, workout) =>
                      total + Number(workout.caloriesBurned || 0),
                    0,
                  )}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl">
                🔥
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        {/* Sort */}
        <div className="mb-4 flex justify-end">
          <select
            defaultValue=""
            onChange={(e) =>
              setSortBy(
                e.target.value as "duration" | "rating" | "caloriesBurned",
              )
            }
            className="select select-neutral w-full sm:w-44"
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="duration">Duration</option>
            <option value="caloriesBurned">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="tabs tabs-box w-full rounded-2xl border border-base-300 bg-base-100 p-2 shadow-md">
          {/* Today's Plan */}
          <input
            type="radio"
            name="my_tabs_6"
            className="tab h-14 flex-1 rounded-xl text-sm font-bold md:text-lg"
            aria-label={`Today's Plan (${todaysPlan.length})`}
            defaultChecked
          />

          <div className="tab-content mt-3 w-full rounded-xl bg-base-100 p-2 md:p-5">
            {todaysPlan.length > 0 ? (
              <div className="flex w-full flex-col gap-5">
                {sortedTodaysPlan.map((workout: Itype) => (
                  <TodaysPlan key={workout.id} workout={workout} />
                ))}
              </div>
            ) : (
              <NotFound />
            )}
          </div>

          {/* Saved Plan */}
          <input
            type="radio"
            name="my_tabs_6"
            className="tab h-14 flex-1 rounded-xl text-sm font-bold md:text-lg"
            aria-label={`Saved Plan (${savePlan.length})`}
          />

          <div className="tab-content mt-3 w-full rounded-xl bg-base-100 p-2 md:p-5">
            {savePlan.length > 0 ? (
              <div className="flex w-full flex-col gap-5">
                {savePlan.map((workout: Itype) => (
                  <SavePlan key={workout.id} workout={workout} />
                ))}
              </div>
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
