import React from 'react';


import Workout from '../component/homepage/Workout';
import { Itype } from '@/type/type';
const getworkouts =async ():Promise<Itype[]>=>{
    const res =await fetch('https://api.api-store.workers.dev/api/fitlog')
    const data =await res.json()
    return data;
}
const WorkoutsDetails =async () => {
    const workoutsdetails= await getworkouts()
    return (
        <div className="min-h-screen bg-base-200 px-4 py-10">
    {/* Header */}
    <div className="mx-auto mb-10 max-w-7xl text-center">
      <h2 className="text-3xl font-bold tracking-wide">
        THE LIBRARY
      </h2>

      <p className="mt-2 text-base-content/60">
        Twelve lifts covering every major muscle group.
      </p>
    </div>

    {/* Workout Grid */}
   
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workoutsdetails.map((workout: Itype) => (
      <Workout workout={workout} key={workout.id} /> 
      ))}
    </div>
   

  </div>
    );
};

export default WorkoutsDetails;