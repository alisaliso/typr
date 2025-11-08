import type { Lesson } from "../types/lessonTypes"

type LessonItemProps = {
  lesson: Lesson | undefined
  currentSectionIndex: number
  currentSectionDrillIndex: number
  typedKeys: string[]
}

const LessonItem = ({
  lesson,
  currentSectionIndex,
  currentSectionDrillIndex,
  typedKeys,
}: LessonItemProps) => {
  const currentDrill = lesson?.sections[currentSectionIndex].drills[
    currentSectionDrillIndex
  ]
    .replace(/\s/g, "_")
    .split("")

  return (
    <div className="pt-4 px-4 bg-gray-100">
      <div className="bg-gray-300 px-4 py-3">
        <div className="text-2xl tracking-wide relative z-1">
          <p className="text-gray-400 pointer-events-none flex">
            {currentDrill?.map((char, index) => {
              const isTyped = index < typedKeys.length
              const isCorrect =
                char.toLowerCase() ===
                typedKeys[index]?.toLowerCase()?.replace(/\s/g, "_")

              return (
                <span
                  key={index}
                  className={`
                    ${
                      isTyped
                        ? isCorrect
                          ? "text-gray-800"
                          : "text-red-700 inline-block w-auto animate-wiggle"
                        : ""
                    }
                  `}
                >
                  {char}
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LessonItem
