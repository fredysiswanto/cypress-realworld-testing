import { useActor } from "@xstate/react"
import { useState } from "react"

export default function LessonChallenge({
  progressService,
  lessonData,
  lessonPath,
}) {
  const [answerIndicies, setAnswerChecked] = useState([])
  const [, progressSend] = useActor(progressService)

  const isIncorrectAnswer = (index) => {
    return (
      answerIndicies.includes(index) &&
      lessonData.challenges[0].correctAnswerIndex !== index
    )
  }

  return (
    <>
      <hr className="mb-6" />
      <div data-test="multiple-choice-challenge" className="py-4 flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">
              Disable Challenges
            </h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-8 w-8">
                    <input
                      data-test="disable-challenges"
                      type="checkbox"
                      className="focus:ring-blue-500 text-blue-600 border-gray-300 rounded h-8 w-8"
                      onClick={() => {
                        progressSend({
                          type: "DISABLE_CHALLENGES",
                        })
                      }}
                    />
                  </div>
                  <label className="ml-16 text-lg leading-6 font-medium text-gray-600">
                    Don&apos;t show quiz in upcoming lessons.
                  </label>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}
