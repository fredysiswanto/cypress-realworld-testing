import Head from "next/head"
import dynamic from "next/dynamic"
import Layout from "../../components/Layout"
import CourseHero from "../../components/Course/CourseHero"
import CourseContent from "../../components/Course/CourseContent"
import { progressService } from "../../machines/progressService"
import coursesJson from "../../data/courses.json"
import { Lesson } from "common"

const CourseNextLessonBtn = dynamic(
  () => import("../../components/Course/CourseNextLessonBtn"),
  {
    ssr: false,
  }
)

type Props = {
  title: string
  lessons: Lesson[]
  description: string
  learnFeatures: string[]
  content: object
  courses: string[]
  course: string
}

export default function SectionPage({
  title,
  lessons,
  description,
  learnFeatures,
  content,
  courses,
  course,
}: Props) {
  return (
    <Layout
      content={content}
      courses={courses}
      progressService={progressService}
    >
      <Head>
        <title>{title} | Real World Testing with Cypress</title>
        <meta name="description" content={description} />
      </Head>

      <CourseHero
        title={title}
        description={description}
        image={content[course].image}
      >
        <CourseNextLessonBtn
          lessons={lessons}
          progressService={progressService}
          course={course}
        />
      </CourseHero>

      <CourseContent
        title={title}
        lessons={lessons}
        learnFeatures={learnFeatures}
        progressService={progressService}
        course={course}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { title, lessons, description, learnFeatures } =
    coursesJson[params.course]
  const courses = Object.keys(coursesJson)

  return {
    props: {
      lessons,
      title,
      description,
      learnFeatures,
      content: coursesJson,
      courses,
      course: params.course,
    },
  }
}

export async function getStaticPaths() {
  const courses = Object.keys(coursesJson)
  const paths = courses.map((course) => {
    const { title, lessons } = coursesJson[course]
    return { params: { course, lessons, title } }
  })

  return {
    paths,
    fallback: false,
  }
}
