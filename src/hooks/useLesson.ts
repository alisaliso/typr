import { useCallback, useEffect, useState } from "react"

import lessonsData from "../assets/lessons/lessons.json"
import type { Lesson } from "../types/lessonTypes"

type LessonsType = Record<string, Lesson>
const lessons: LessonsType = lessonsData

type LessonHookProps = {
  typedKeys: string[]
  removeAllTypedKeys: () => void
}

type LessonHookReturnType = {
  currentLesson: Lesson | undefined
  currentSectionIndex: number
  currentSectionDrillIndex: number
}

export const useLesson = ({
  typedKeys,
  removeAllTypedKeys,
}: LessonHookProps): LessonHookReturnType => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(1)
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    undefined
  )
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)
  const [currentSectionDrillIndex, setCurrentSectionDrillIndex] =
    useState<number>(0)

  useEffect(() => {
    if (!currentLessonIndex) return

    setCurrentLesson(lessons[currentLessonIndex.toString()])
  }, [currentLessonIndex])

  const checkDrillCompletion = useCallback(() => {
    if (!currentLesson) return

    const currentSection = currentLesson.sections[currentSectionIndex]
    const currentDrill = currentSection.drills[currentSectionDrillIndex]
    const isDrillComplete = typedKeys?.length >= currentDrill.length

    if (isDrillComplete) {
      removeAllTypedKeys()

      const nextDrillIndex = currentSectionDrillIndex + 1
      const isLastDrillInSection =
        nextDrillIndex >= currentSection.drills.length

      if (isLastDrillInSection) {
        const nextSectionIndex = currentSectionIndex + 1
        const isLastSection = nextSectionIndex >= currentLesson.sections.length

        if (isLastSection) {
          // Reset to beginning
          setCurrentSectionIndex(0)
          setCurrentSectionDrillIndex(0)

          // Try to advance to next lesson
          const nextLessonIndex = currentLessonIndex + 1
          if (lessons[nextLessonIndex.toString()]) {
            setCurrentLessonIndex(nextLessonIndex)
          }
        } else {
          setCurrentSectionIndex(nextSectionIndex)
          setCurrentSectionDrillIndex(0)
        }
      } else {
        setCurrentSectionDrillIndex(nextDrillIndex)
      }
    }
  }, [typedKeys, currentLesson, currentSectionIndex, currentSectionDrillIndex])

  useEffect(() => {
    checkDrillCompletion()
  }, [checkDrillCompletion])

  return {
    currentLesson,
    currentSectionIndex,
    currentSectionDrillIndex,
  }
}
