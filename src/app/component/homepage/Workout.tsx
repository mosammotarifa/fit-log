import { Itype } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
export interface IWorkout {
  workout: Itype;
}
const Workout = ({ workout }: IWorkout) => {
  return (
    <div className="rounded-2xl bg-base-100 shadow-lg overflow-hidden border border-base-200 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <Link href={`/${workout.id}`}>
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={300}
            height={400}
            className="w-full h-56 object-cover"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Group */}
        <p className="inline-block rounded-full bg-[#C2F800] px-3 py-1 text-sm font-semibold text-black mb-3">
          {workout.muscleGroups}
        </p>

        {/* Exercise Name */}
        <h2 className="text-xl font-bold text-base-content mb-2">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="text-sm text-base-content/60 mb-5">
          🏋️ {workout.equipment}
        </p>

        {/* Light HR line */}
        <div className="border-t border-base-200 mb-5"></div>

        {/* Workout Stats */}
        <div className="grid grid-cols-3 gap-3">
          {/* Duration */}
          <div className="flex items-center gap-2">
            <span className="text-lg">⏱️</span>
            <div>
              <p className="text-xs text-base-content/50">Duration</p>
              <p className="text-sm font-semibold">{workout.duration}</p>
            </div>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <span className="text-lg">🔥</span>
            <div>
              <p className="text-xs text-base-content/50">Calories</p>
              <p className="text-sm font-semibold">
                {workout.caloriesBurned} kcal
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <div>
              <p className="text-xs text-base-content/50">Rating</p>
              <p className="text-sm font-semibold">{workout.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
