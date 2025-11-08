type LessonSection = {
  type: string
  drills: string[]
}

export type Lesson = {
  title: string
  sections: LessonSection[]
}
