import { ref, computed } from 'vue'
import { selectQuestions, shuffle, type Question } from '~/data/questions'

export type Phase = 'intro' | 'quiz' | 'result'

export type QuizMode = 10 | 15 | 30

export const QUIZ_MODES: { value: QuizMode; name: string; label: string; description: string }[] = [
  { value: 10, name: 'Fácil',  label: '10 perguntas', description: '~5 min' },
  { value: 15, name: 'Médio',  label: '15 perguntas', description: '~8 min' },
  { value: 30, name: 'Difícil', label: '30 perguntas', description: '~15 min' },
]

export interface Answer {
  questionId: number
  selectedIndex: number
  displayOptions: string[]
  correctIndex: number
  correct: boolean
}

export interface ScoreTitle {
  title: string
  emoji: string
  description: string
  color: string
}

export const scoreTitles: ScoreTitle[] = [
  {
    title: 'Visitante Curioso',
    emoji: '🏛️',
    description: 'Você ainda está descobrindo o anglicanismo. Há um mundo fascinante a explorar!',
    color: 'from-slate-400 to-slate-600',
  },
  {
    title: 'Fiel Iniciante',
    emoji: '📖',
    description: 'Você tem algum conhecimento básico. Continue estudando o LOC e a história anglicana!',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    title: 'Acólito',
    emoji: '✝️',
    description: 'Bom conhecimento das práticas e da liturgia! Você claramente frequenta a igreja com atenção.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Leitor',
    emoji: '📜',
    description: 'Conhecimento sólido da teologia e da história anglicana. Você é um estudante dedicado.',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    title: 'Diácono',
    emoji: '🕊️',
    description: 'Impressionante! Você tem um conhecimento profundo do anglicanismo, sua história e liturgia.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    title: 'Presbítero',
    emoji: '⚜️',
    description: 'Excelente! Seu conhecimento anglicano é digno de um clérigo. Thomas Cranmer estaria orgulhoso!',
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Cônego',
    emoji: '🎓',
    description: 'Notável! Você conhece os cantos mais obscuros da história e teologia anglicana.',
    color: 'from-primary-400 to-primary-600',
  },
  {
    title: 'Bispo',
    emoji: '🏰',
    description: 'Magistral! Seu conhecimento anglicano é excepcional. Você poderia escrever um livro!',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Arcebispo de Cantuária',
    emoji: '👑',
    description: 'PERFEITO! Você acertou tudo! Seu conhecimento é digno do líder espiritual da Comunhão Anglicana!',
    color: 'from-gold-400 to-gold-600',
  },
]

export function getScoreTitle(score: number, total: number): ScoreTitle {
  const pct = score / total
  if (pct === 1) return scoreTitles[8]
  if (pct >= 0.93) return scoreTitles[7]
  if (pct >= 0.83) return scoreTitles[6]
  if (pct >= 0.70) return scoreTitles[5]
  if (pct >= 0.57) return scoreTitles[4]
  if (pct >= 0.43) return scoreTitles[3]
  if (pct >= 0.30) return scoreTitles[2]
  if (pct >= 0.17) return scoreTitles[1]
  return scoreTitles[0]
}

export function useQuiz() {
  const phase = ref<Phase>('intro')
  const selectedMode = ref<QuizMode>(10)
  const questions = ref<Question[]>([])
  const currentIndex = ref(0)
  const answers = ref<Answer[]>([])
  const selectedOptionIndex = ref<number | null>(null)
  const showExplanation = ref(false)
  const displayOptions = ref<string[]>([])

  const currentQuestion = computed(() => questions.value[currentIndex.value])
  const isLastQuestion = computed(() => currentIndex.value === questions.value.length - 1)
  const score = computed(() => answers.value.filter((a) => a.correct).length)
  const progress = computed(() =>
    questions.value.length > 0 ? ((currentIndex.value + 1) / questions.value.length) * 100 : 0
  )
  const scoreTitle = computed(() => getScoreTitle(score.value, questions.value.length))
  const currentModeLabel = computed(() => {
    const m = QUIZ_MODES.find((m) => m.value === selectedMode.value)
    return m ? `${m.name} · ${m.label}` : ''
  })

  function start(mode?: QuizMode) {
    if (mode) selectedMode.value = mode
    questions.value = selectQuestions(selectedMode.value)
    answers.value = []
    currentIndex.value = 0
    selectedOptionIndex.value = null
    showExplanation.value = false
    setupCurrentQuestion()
    phase.value = 'quiz'
  }

  function setupCurrentQuestion() {
    const q = questions.value[currentIndex.value]
    if (!q) return
    const indices = shuffle([0, 1, 2, 3].slice(0, q.options.length))
    displayOptions.value = indices.map((i) => q.options[i])
    selectedOptionIndex.value = null
    showExplanation.value = false
  }

  function selectOption(displayIndex: number) {
    if (selectedOptionIndex.value !== null) return
    selectedOptionIndex.value = displayIndex
    showExplanation.value = true

    const q = currentQuestion.value
    const selectedText = displayOptions.value[displayIndex]
    const originalIndex = q.options.indexOf(selectedText)
    const correct = originalIndex === q.correctIndex

    answers.value.push({
      questionId: q.id,
      selectedIndex: displayIndex,
      displayOptions: [...displayOptions.value],
      correctIndex: displayOptions.value.indexOf(q.options[q.correctIndex]),
      correct,
    })
  }

  function next() {
    if (isLastQuestion.value) {
      phase.value = 'result'
      return
    }
    currentIndex.value++
    setupCurrentQuestion()
  }

  function restart() {
    phase.value = 'intro'
    questions.value = []
    answers.value = []
    currentIndex.value = 0
    selectedOptionIndex.value = null
    showExplanation.value = false
  }

  return {
    phase,
    selectedMode,
    questions,
    currentIndex,
    currentQuestion,
    answers,
    selectedOptionIndex,
    showExplanation,
    displayOptions,
    isLastQuestion,
    score,
    progress,
    scoreTitle,
    currentModeLabel,
    start,
    selectOption,
    next,
    restart,
  }
}
