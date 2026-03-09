<template>
  <div class="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
    <!-- Category + Difficulty Header -->
    <div class="px-5 pt-5 pb-0 flex items-center justify-between gap-2">
      <span :class="['text-xs font-semibold uppercase tracking-wide', categoryColor]">
        {{ question.category }}
      </span>
      <span :class="['px-2.5 py-1 rounded-full text-xs font-bold', difficultyClass]">
        {{ difficultyLabel }}
      </span>
    </div>

    <!-- Question -->
    <div class="px-5 pt-4 pb-5">
      <p class="font-display text-xl font-semibold text-textPrimary leading-snug">
        {{ question.question }}
      </p>
    </div>

    <!-- Divider -->
    <div class="h-px bg-border mx-5" />

    <!-- Options -->
    <div class="p-4 space-y-3">
      <button
        v-for="(option, i) in displayOptions"
        :key="i"
        :disabled="selectedOptionIndex !== null"
        :class="['option-btn w-full text-left px-4 py-3.5 rounded-xl border-2 font-medium text-sm transition-all', optionClass(i)]"
        @click="$emit('select', i)"
      >
        <div class="flex items-start gap-3">
          <span :class="['flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 mt-0.5 transition-all', letterClass(i)]">
            {{ letters[i] }}
          </span>
          <span class="leading-relaxed">{{ option }}</span>
        </div>
      </button>
    </div>

    <!-- Explanation -->
    <Transition name="fade">
      <div v-if="showExplanation" class="mx-4 mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div class="flex items-center gap-2 mb-2">
          <span v-if="isCurrentCorrect" class="text-emerald-600 font-bold text-sm flex items-center gap-1">
            ✅ Correto!
          </span>
          <span v-else class="text-red-600 font-bold text-sm flex items-center gap-1">
            ❌ Incorreto
          </span>
        </div>
        <p class="text-sm text-textSecondary leading-relaxed">
          {{ question.explanation }}
        </p>
      </div>
    </Transition>

    <!-- Next Button -->
    <Transition name="fade">
      <div v-if="showExplanation" class="px-4 pb-4">
        <button
          @click="$emit('next')"
          class="w-full bg-primary hover:bg-primary-600 active:bg-primary-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-md"
        >
          {{ isLast ? 'Ver Resultado 🏆' : 'Próxima Pergunta →' }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '~/data/questions'
import { difficultyLabels, difficultyColors, categoryColors } from '~/data/questions'

const props = defineProps<{
  question: Question
  displayOptions: string[]
  selectedOptionIndex: number | null
  showExplanation: boolean
  isLast: boolean
}>()

defineEmits<{
  select: [index: number]
  next: []
}>()

const letters = ['A', 'B', 'C', 'D']

const difficultyLabel = computed(() => difficultyLabels[props.question.difficulty])
const difficultyClass = computed(() => difficultyColors[props.question.difficulty])
const categoryColor = computed(() => categoryColors[props.question.category] ?? 'text-textSecondary')

const correctDisplayIndex = computed(() => {
  return props.displayOptions.indexOf(props.question.options[props.question.correctIndex])
})

const isCurrentCorrect = computed(() => {
  if (props.selectedOptionIndex === null) return false
  return props.selectedOptionIndex === correctDisplayIndex.value
})

function optionClass(i: number): string {
  if (props.selectedOptionIndex === null) {
    return 'border-border text-textPrimary bg-white hover:border-primary hover:bg-primary-50'
  }

  if (i === correctDisplayIndex.value) {
    return 'border-emerald-500 bg-emerald-50 text-emerald-900'
  }
  if (i === props.selectedOptionIndex) {
    return 'border-red-400 bg-red-50 text-red-900'
  }
  return 'border-border text-textSecondary bg-white opacity-50'
}

function letterClass(i: number): string {
  if (props.selectedOptionIndex === null) {
    return 'border-border text-textSecondary bg-white'
  }
  if (i === correctDisplayIndex.value) {
    return 'border-emerald-500 bg-emerald-500 text-white'
  }
  if (i === props.selectedOptionIndex) {
    return 'border-red-400 bg-red-400 text-white'
  }
  return 'border-border text-textSecondary bg-white'
}
</script>
