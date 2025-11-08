import { useEffect } from "react"
import LessonItem from "./LessonItem"
import { useLesson } from "../hooks/useLesson"
import { useTypeStore } from "../store/typing"

export const Lesson = () => {
  const {
    typedKeys,
    addTypedKey,
    removeLastTypedKey,
    removeAllTypedKeys,
    setLastTypedKey,
  } = useTypeStore()

  const { currentLesson, currentSectionIndex, currentSectionDrillIndex } =
    useLesson({ typedKeys, removeAllTypedKeys })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastTypedKey(e.metaKey ? e.code : e.key)
      // Allow page reload (Ctrl+R, Cmd+R, F5)
      if (["F5", "r"].includes(e.key) && (e.ctrlKey || e.metaKey)) {
        return
      }

      // Allow delete key
      if (e.key === "Backspace") {
        removeLastTypedKey()
        return
      }

      e.preventDefault()
      addTypedKey(e.key)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="w-full">
      <LessonItem
        lesson={currentLesson}
        currentSectionIndex={currentSectionIndex}
        currentSectionDrillIndex={currentSectionDrillIndex}
        typedKeys={typedKeys}
      />
    </div>
  )
}
