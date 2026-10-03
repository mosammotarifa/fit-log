"use client";

import { workoutContext } from "@/context/WorkoutProvider";
import { Itype } from "@/type/type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export interface IMyTodaysPlan {
  workout: Itype;
}

const MyTodaysPlan = ({ workout }: IMyTodaysPlan) => {
  const { todaysPlan, setTodaysPlan } = useContext(workoutContext);

  const handleTodaysPlan = () => {
    const alreadyAdded = todaysPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
       toast.info("This workout is already in Today's Plan!");
      return;
    }

    setTodaysPlan((prev) => [...prev, workout]);
    toast.success("Workout added to Today's Plan!");
  };

  return (
    <div>
      <button
        onClick={handleTodaysPlan}
        className="btn flex-1 bg-[#C2F800] text-black hover:bg-[#b5e900]"
      >
        Add to Todays Plan
      </button>
    </div>
  );
};

export default MyTodaysPlan;