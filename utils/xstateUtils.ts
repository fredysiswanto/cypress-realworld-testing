import { progressService } from "../machines/progressService"
import {includes} from "lodash/fp"

export function sectionCompleted(section) {
  // filter stepsCompleted from state and compare length to total lessons in learn.json
}

export function isLessonCompleted(lesson) {
  // via _.includes, check that lesson is in state stepsCompleted
  // @ts-ignore
  // console.log(progressService.state.context)
  console.log(lesson)
  // return includes(progressService.state.context.lessonsCompleted, lesson)
}

export function isSectionStarted(lesson) {
  // via _.includes, check that the section is contained in one of the lessonsCompleted
}