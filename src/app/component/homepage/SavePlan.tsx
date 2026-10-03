"use client";

import { workoutContext } from "@/context/WorkoutProvider";
import { Itype } from "@/type/type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export interface ISavePlan {
  workout: Itype;
}

const SavePlan = ({ workout }: ISavePlan) => {
  const { savePlan, setSavePlan } = useContext(workoutContext);

  const handleSavePlan = () => {
    const alreadySaved = savePlan.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.info("This workout is already saved!");
      return;
    }

    setSavePlan([...savePlan, workout]);
    toast.success("Workout saved for later!");
  };

  return (
    <div>
      <button
        onClick={handleSavePlan}
        className="btn btn-outline flex-1"
      >
        Save for Later
      </button>
    </div>
  );
};

export default SavePlan;