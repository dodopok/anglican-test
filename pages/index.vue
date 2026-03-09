<template>
  <div class="min-h-screen bg-background font-body">

    <!-- ─── Header ──────────────────────────────────────────────── -->
    <header class="bg-white border-b border-border/60">
      <div class="max-w-2xl mx-auto px-5 h-14 flex items-center justify-between">
        <!-- Logo -->
        <a href="https://caminhoanglicano.com.br" target="_blank" class="flex items-center gap-2 group">
          <span class="text-gold-500 text-base leading-none select-none">✦</span>
          <span class="font-body text-sm font-semibold tracking-widest uppercase text-textPrimary group-hover:text-primary transition-colors">
            Caminho Anglicano
          </span>
        </a>

        <!-- Right: quiz indicator (only during quiz) or site link -->
        <div v-if="phase === 'quiz'" class="flex items-center gap-2">
          <span class="text-xs font-semibold text-textSecondary tabular-nums">
            {{ currentIndex + 1 }}<span class="text-border mx-0.5">/</span>{{ questions.length }}
          </span>
          <div class="w-16 h-1 rounded-full bg-border overflow-hidden">
            <div class="h-full bg-primary rounded-full progress-bar" :style="{ width: progress + '%' }" />
          </div>
        </div>
        <span v-else class="text-xs text-textSecondary font-medium hidden sm:block">
          Teste Anglicano
        </span>
      </div>
    </header>

    <!-- ─── Main ─────────────────────────────────────────────────── -->
    <main class="max-w-2xl mx-auto px-5 pt-6 pb-24">

      <Transition name="fade" mode="out-in">

        <!-- INTRO -->
        <div v-if="phase === 'intro'" key="intro">
          <IntroScreen @start="start" />
        </div>

        <!-- QUIZ -->
        <div v-else-if="phase === 'quiz'" key="quiz">
          <!-- Progress (mobile full bar) -->
          <div class="mb-5 sm:hidden">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-xs font-semibold text-textSecondary">
                Pergunta {{ currentIndex + 1 }} de {{ questions.length }}
              </span>
              <span class="text-xs font-semibold text-primary">{{ score }} ✓</span>
            </div>
            <div class="h-1.5 bg-border rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full progress-bar" :style="{ width: progress + '%' }" />
            </div>
          </div>

          <Transition name="question" mode="out-in">
            <QuizQuestion
              v-if="currentQuestion"
              :key="currentQuestion.id + '-' + currentIndex"
              :question="currentQuestion"
              :display-options="displayOptions"
              :selected-option-index="selectedOptionIndex"
              :show-explanation="showExplanation"
              :is-last="isLastQuestion"
              @select="selectOption"
              @next="next"
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
            @restart="restart"
            @show-ordo="showOrdoModal = true"
          />
        </div>

      </Transition>
    </main>

    <!-- Ordo Modal -->
    <Transition name="fade">
      <OrdoModal v-if="showOrdoModal" @close="showOrdoModal = false" />
    </Transition>

    <!-- ─── Footer ───────────────────────────────────────────────── -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-border/60 py-2.5 px-5 text-center">
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
  scoreTitle, start, selectOption, next, restart,
} = useQuiz()

const showOrdoModal = ref(false)

watch(phase, (val) => {
  if (val === 'result') {
    setTimeout(() => { showOrdoModal.value = true }, 3500)
  }
})
</script>
