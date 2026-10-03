"use client";
import { Itype } from "@/type/type";
import React, { createContext, ReactNode, useState } from "react";

interface IWorkoutProvider {
  todaysPlan: Itype[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<Itype[]>>;
  savePlan: Itype[];
  setSavePlan: React.Dispatch<React.SetStateAction<Itype[]>>;
}

export const workoutContext = createContext<IWorkoutProvider>({
  todaysPlan: [],
  setTodaysPlan: () => [],
  savePlan: [],
  setSavePlan: () => [],
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<Itype[]>([]);
  const [savePlan, setSavePlan] = useState<Itype[]>([]);

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    savePlan,
    setSavePlan,
  };

  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
