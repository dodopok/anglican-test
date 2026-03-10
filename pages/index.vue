<template>
  <div class="flex flex-col min-h-dvh bg-background font-body">

    <!-- ─── Header ──────────────────────────────────────────────── -->
    <header class="bg-white border-b border-border/60 flex-shrink-0">
      <div class="max-w-2xl mx-auto px-5 h-14 flex items-center justify-between">
        <!-- Logo -->
        <a href="https://caminhoanglicano.com.br" target="_blank" class="flex items-center gap-2 group">
          <span class="text-gold-500 text-base leading-none select-none">✦</span>
          <span class="font-body text-sm font-semibold tracking-widest uppercase text-textPrimary group-hover:text-primary transition-colors">
            Caminho Anglicano
          </span>
        </a>

        <!-- Progress counter (quiz only) -->
        <div v-if="phase === 'quiz'" class="flex items-center gap-2.5">
          <span class="text-xs font-semibold text-textSecondary tabular-nums">
            {{ currentIndex + 1 }}<span class="text-border mx-0.5">/</span>{{ questions.length }}
          </span>
          <div class="w-20 h-1.5 rounded-full bg-border overflow-hidden">
            <div class="h-full bg-primary rounded-full progress-bar" :style="{ width: progress + '%' }" />
          </div>
          <span class="text-xs font-semibold text-primary">{{ score }}✓</span>
        </div>
        <span v-else class="text-xs text-textSecondary font-medium hidden sm:block">
          Teste Anglicano
        </span>
      </div>
    </header>

    <!-- ─── Main ─────────────────────────────────────────────────── -->
    <main class="flex-1 max-w-2xl w-full mx-auto px-5 pt-5"
          :class="phase === 'quiz' ? 'pb-28' : 'pb-8'">

      <Transition name="fade" mode="out-in">

        <!-- INTRO -->
        <div v-if="phase === 'intro'" key="intro">
          <IntroScreen @start="start" />
        </div>

        <!-- QUIZ -->
        <div v-else-if="phase === 'quiz'" key="quiz">
          <Transition name="question" mode="out-in">
            <QuizQuestion
              v-if="currentQuestion"
              :key="currentQuestion.id + '-' + currentIndex"
              :question="currentQuestion"
              :display-options="displayOptions"
              :selected-option-index="selectedOptionIndex"
              :show-explanation="showExplanation"
              @select="selectOption"
            />
          </Transition>
        </div>

        <!-- RESULT -->
        <div v-else-if="phase === 'result'" key="result">
          <ResultScreen
            :score="score"
            :total="questions.length"
            :score-title="scoreTitle"
            :answers="answers"
            :questions="questions"
            :mode-label="currentModeLabel"
            @restart="restart"
            @show-ordo="showOrdoModal = true"
          />
        </div>

      </Transition>
    </main>

    <!-- ─── Footer (intro + result only) ────────────────────────── -->
    <footer v-if="phase !== 'quiz'" class="flex-shrink-0 border-t border-border/60 py-3 px-5 text-center bg-white">
      <p class="text-xs text-textSecondary">
        <a href="https://caminhoanglicano.com.br" target="_blank" class="hover:text-primary transition-colors font-medium">
          caminhoanglicano.com.br
        </a>
        <span class="mx-2 text-border">·</span>
        <button @click="showOrdoModal = true" class="hover:text-primary transition-colors font-medium">
          App Ordo
        </button>
      </p>
    </footer>

    <!-- ─── Sticky Next Button (quiz, after answer) ──────────────── -->
    <Transition name="slide-up-btn">
      <div
        v-if="phase === 'quiz' && showExplanation"
        class="fixed bottom-0 left-0 right-0 z-40 px-5 pb-safe"
        style="padding-bottom: max(env(safe-area-inset-bottom), 1rem);"
      >
        <div class="max-w-2xl mx-auto">
          <button
            @click="next"
            class="w-full bg-primary hover:bg-primary-600 active:scale-[.98] text-white font-bold text-base py-4 rounded-2xl shadow-lg transition-all"
          >
            {{ isLastQuestion ? 'Ver Resultado 🏆' : 'Próxima Pergunta →' }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- Ordo Modal -->
    <Transition name="fade">
      <OrdoModal v-if="showOrdoModal" @close="showOrdoModal = false" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useQuiz } from '~/composables/useQuiz'
import IntroScreen from '~/components/IntroScreen.vue'
import QuizQuestion from '~/components/QuizQuestion.vue'
import ResultScreen from '~/components/ResultScreen.vue'
import OrdoModal from '~/components/OrdoModal.vue'

const {
  phase, questions, currentIndex, currentQuestion,
  answers, selectedOptionIndex, showExplanation,
  displayOptions, isLastQuestion, score, progress,
  scoreTitle, currentModeLabel, start, selectOption, next, restart,
} = useQuiz()

const showOrdoModal = ref(false)

watch(phase, (val) => {
  if (val === 'result') {
    setTimeout(() => { showOrdoModal.value = true }, 3500)
  }
})
</script>
