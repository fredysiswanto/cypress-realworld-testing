declare type LessonTableOfContents = {
  content: string
  slug: string
  lvl: number
  current?: boolean
}

declare interface ChallengeAnswer {
  id: string
  answeredCorrectly?: boolean
  skipped?: boolean
}
declare interface EventPayload {
  type: string
  id: string
  challengeIndex: number
}

declare interface MultipleChoicePayload extends EventPayload {
  userAnswerIndex: number
}

declare interface FreeFormPayload extends EventPayload {
  userAnswer: string
}
declare interface ProgressContext {
  sectionsCompleted: string[]
  lessonsCompleted: string[]
  disableChallenges: boolean
}

declare interface Challenge {
  challengeType: string
  question: string
}

declare interface MultipleChoiceChallenge extends Challenge {
  answers: []
  correctAnswerIndex: string
}
declare interface FreeFormChallenge extends Challenge {
  answer: string
  hint: string
}