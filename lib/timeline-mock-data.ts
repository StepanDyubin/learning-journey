export interface Course {
  id: string
  name: string
}

export interface Statistics {
  progress: number
  hoursSpent: number
  performance: number
}

export interface CourseStep {
  id: string
  type: "COURSE"
  statistics: Statistics
  isDone: boolean
  course: Course
}

export interface BlockStep {
  id: string
  type: "BLOCK"
  statistics: Statistics
  isDone: boolean
  blockId: string
  blockName: string
  steps: (CourseStep | BlockStep)[]
}

export interface RecomendationStep {
  id: string
  type: "RECOMMENDATION"
  course: Course;
  match: number;
}

export type Step = CourseStep | BlockStep | RecomendationStep

export interface Category {
  id: string
  name: string
  steps: (CourseStep | BlockStep)[]
  recomendation: RecomendationStep
}

export function generateWebDevCategory(): Category {
  return {
    id: "web-dev",
    name: "Web Development",
    steps: [
      {
        id: "web-basics-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 30, performance: 94 },
        course: { id: "web-basics", name: "Web Development Basics" },
      },
      {
        id: "web-html-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 35, performance: 95 },
        course: { id: "web-html", name: "HTML & CSS Mastery" },
      },
      {
        id: "web-js-step",
        type: "COURSE",
        isDone: false,
        statistics: { progress: 70, hoursSpent: 28, performance: 85 },
        course: { id: "web-js", name: "JavaScript Fundamentals" },
      },
    ],
    recomendation: {
      id: "web-react",
      type: "RECOMMENDATION",
      course: { id: "web-react", name: "React Basics" },
      match: 95,
    }
  }
}

export function generateDataScienceCategory(): Category {
  return {
    id: "data-science",
    name: "Data Science",
    steps: [
      {
        id: "ds-basics-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 40, performance: 92 },
        course: { id: "ds-basics", name: "Data Science Fundamentals" },
      },
      {
        id: "data-python-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 32, performance: 90 },
        course: { id: "data-python", name: "Python for Data" },
      },
      {
        id: "ml-basics-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 32, performance: 90 },
        course: { id: "ml-python", name: "ML Basics" },
      },
      {
        id: "ds-python-step",
        type: "COURSE",
        isDone: false,
        statistics: { progress: 50, hoursSpent: 22, performance: 44 },
        course: { id: "ds-python", name: "Data Science with Python" },
      },
    ],
    recomendation: {
      id: "data-ml",
      type: "RECOMMENDATION",
      course: { id: "data-ml", name: "Machine Learning Advanced" },
      match: 93,
    }
  }
}

export function generateMobileDevCategory(): Category {
  return {
    id: "mobile-dev",
    name: "Mobile Development",
    steps: [
      {
        id: "mobile-basics-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 25, performance: 88 },
        course: { id: "mobile-basics", name: "Mobile Development Basics" },
      },
      {
        id: "mobile-platforms-block-step",
        type: "BLOCK",
        isDone: false,
        statistics: { progress: 0, hoursSpent: 0, performance: 0 },
        blockId: "mobile-platforms-block",
        blockName: "Mobile Platforms",
        steps: [
          {
            id: "mobile-ios-step",
            type: "COURSE",
            isDone: false,
            statistics: { progress: 0, hoursSpent: 0, performance: 0 },
            course: { id: "mobile-ios", name: "iOS Development" },
          },
          {
            id: "mobile-android-step",
            type: "COURSE",
            isDone: false,
            statistics: { progress: 0, hoursSpent: 0, performance: 0 },
            course: { id: "mobile-android", name: "Android Development" },
          },
        ],
      },
    ],
    recomendation: {
      id: "mobile-react-native",
      type: "RECOMMENDATION",
      course: { id: "mobile-react-native", name: "React Native" },
      match: 89,
    }
  }
}

export function generateDevOpsCategory(): Category {
  return {
    id: "devops",
    name: "DevOps",
    steps: [
      {
        id: "devops-basics-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 28, performance: 91 },
        course: { id: "devops-basics", name: "DevOps Fundamentals" },
      },
      {
        id: "devops-tools-block-step",
        type: "BLOCK",
        isDone: false,
        statistics: { progress: 0, hoursSpent: 0, performance: 0 },
        blockId: "devops-tools-block",
        blockName: "DevOps Tools",
        steps: [
          {
            id: "devops-docker-step",
            type: "COURSE",
            isDone: false,
            statistics: { progress: 0, hoursSpent: 0, performance: 0 },
            course: { id: "devops-docker", name: "Docker & Containers" },
          },
          {
            id: "devops-kubernetes-step",
            type: "COURSE",
            isDone: false,
            statistics: { progress: 0, hoursSpent: 0, performance: 0 },
            course: { id: "devops-kubernetes", name: "Kubernetes" },
          },
        ],
      },
    ],
    recomendation: {
      id: "devops-aws",
      type: "RECOMMENDATION",
      course: { id: "devops-aws", name: "AWS for DevOps" },
      match: 90,
    }
  }
}

export function generateAIMLCategory(): Category {
  return {
    id: "ai-ml",
    name: "AI/ML",
    steps: [
      {
        id: "ai-basics-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 35, performance: 93 },
        course: { id: "ai-basics", name: "AI & ML Fundamentals" },
      },
      {
        id: "ai-deep-learning-step",
        type: "COURSE",
        isDone: true,
        statistics: { progress: 100, hoursSpent: 42, performance: 89 },
        course: { id: "ai-deep-learning", name: "Deep Learning" },
      },
      {
        id: "ai-advanced-block-step",
        type: "BLOCK",
        isDone: false,
        statistics: { progress: 55, hoursSpent: 18, performance: 82 },
        blockId: "ai-advanced-block",
        blockName: "Advanced AI",
        steps: [
          {
            id: "ai-nlp-step",
            type: "COURSE",
            isDone: false,
            statistics: { progress: 70, hoursSpent: 12, performance: 85 },
            course: { id: "ai-nlp", name: "Natural Language Processing" },
          },
          {
            id: "ai-cv-step",
            type: "COURSE",
            isDone: false,
            statistics: { progress: 40, hoursSpent: 6, performance: 79 },
            course: { id: "ai-cv", name: "Computer Vision" },
          },
        ],
      },
      {
        id: "ai-deployment-step",
        type: "COURSE",
        isDone: false,
        statistics: { progress: 5, hoursSpent: 1, performance: 100 },
        course: { id: "ai-deployment", name: "AI Model Deployment" },
      },
    ],
    recomendation: {
      id: "ai-reinforcement-learning",
      type: "RECOMMENDATION",
      course: { id: "ai-reinforcement-learning", name: "Reinforcement Learning" },
      match: 91,
    }
  }
}

export function generateTimelineData(): Category[] {
  return [
    generateWebDevCategory(),
    generateDataScienceCategory(),
    generateMobileDevCategory(),
    generateDevOpsCategory(),
    generateAIMLCategory(),
  ]
}
