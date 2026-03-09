<template>
  <div class="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">

    <!-- Category + Difficulty -->
    <div class="px-5 pt-4 pb-0 flex items-center justify-between gap-2">
      <span :class="['text-xs font-semibold uppercase tracking-wide', categoryColor]">
        {{ question.category }}
      </span>
      <span :class="['px-2.5 py-1 rounded-full text-xs font-bold', difficultyClass]">
        {{ difficultyLabel }}
      </span>
    </div>

    <!-- Question text -->
    <div class="px-5 pt-3 pb-4">
      <p class="font-display text-[1.2rem] font-semibold text-textPrimary leading-snug">
        {{ question.question }}
      </p>
    </div>

    <!-- Divider -->
    <div class="h-px bg-border mx-5" />

    <!-- Options -->
    <div class="p-4 space-y-2.5">
      <button
        v-for="(option, i) in displayOptions"
        :key="i"
        :disabled="selectedOptionIndex !== null"
        :class="['option-btn w-full text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all', optionClass(i)]"
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

    <!-- Feedback banner + explanation (after answering) -->
    <Transition name="fade">
      <div v-if="showExplanation">
        <!-- Correct / Wrong banner -->
        <div :class="['mx-4 mb-3 px-4 py-2.5 rounded-xl flex items-center gap-2', isCurrentCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200']">
          <span class="text-base">{{ isCurrentCorrect ? '✅' : '❌' }}</span>
          <span :class="['font-bold text-sm', isCurrentCorrect ? 'text-emerald-700' : 'text-red-700']">
            {{ isCurrentCorrect ? 'Correto!' : 'Incorreto' }}
          </span>
          <span v-if="!isCurrentCorrect" class="text-xs text-textSecondary ml-1">
            — a resposta certa está destacada em verde
          </span>
        </div>

        <!-- Explanation (collapsible, starts open) -->
        <div class="mx-4 mb-4 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200">
          <p class="text-xs font-bold text-textSecondary uppercase tracking-wider mb-1.5">Saiba mais</p>
          <p class="text-sm text-textSecondary leading-relaxed">{{ question.explanation }}</p>
        </div>
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
}>()

defineEmits<{
  select: [index: number]
}>()

const letters = ['A', 'B', 'C', 'D']

const difficultyLabel = computed(() => difficultyLabels[props.question.difficulty])
const difficultyClass = computed(() => difficultyColors[props.question.difficulty])
const categoryColor = computed(() => categoryColors[props.question.category] ?? 'text-textSecondary')

const correctDisplayIndex = computed(() =>
  props.displayOptions.indexOf(props.question.options[props.question.correctIndex])
)

const isCurrentCorrect = computed(() =>
  props.selectedOptionIndex !== null &&
  props.selectedOptionIndex === correctDisplayIndex.value
)

function optionClass(i: number): string {
  if (props.selectedOptionIndex === null) {
    return 'border-border text-textPrimary bg-white hover:border-primary hover:bg-primary-50'
  }
  if (i === correctDisplayIndex.value) return 'border-emerald-500 bg-emerald-50 text-emerald-900'
  if (i === props.selectedOptionIndex) return 'border-red-400 bg-red-50 text-red-900'
  return 'border-border text-textSecondary bg-white opacity-40'
}

function letterClass(i: number): string {
  if (props.selectedOptionIndex === null) return 'border-border text-textSecondary bg-white'
  if (i === correctDisplayIndex.value) return 'border-emerald-500 bg-emerald-500 text-white'
  if (i === props.selectedOptionIndex) return 'border-red-400 bg-red-400 text-white'
  return 'border-border text-textSecondary bg-white'
}
</script>
