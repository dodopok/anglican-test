<template>
  <div>
    <!-- Score Card -->
    <div class="relative bg-primary rounded-2xl p-6 mb-5 overflow-hidden shadow-lg text-center">
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400" />

      <!-- Circular Score -->
      <div class="flex justify-center mb-4">
        <div class="relative w-32 h-32">
          <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <!-- Track -->
            <circle
              cx="60" cy="60" r="52"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              stroke-width="10"
            />
            <!-- Progress -->
            <circle
              cx="60" cy="60" r="52"
              fill="none"
              stroke="white"
              stroke-width="10"
              stroke-linecap="round"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
              class="score-circle-path"
            />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-white font-display font-bold text-3xl leading-none">{{ score }}</span>
            <span class="text-blue-200 text-sm font-medium">/ {{ total }}</span>
          </div>
        </div>
      </div>

      <!-- Title -->
      <div class="text-4xl mb-2">{{ scoreTitle.emoji }}</div>
      <h2 class="font-display text-3xl font-bold text-white mb-1">{{ scoreTitle.title }}</h2>
      <p class="text-blue-200 text-sm max-w-xs mx-auto leading-relaxed">{{ scoreTitle.description }}</p>

      <!-- Percentage -->
      <div class="mt-4 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
        <span class="text-white font-bold text-lg">{{ percentage }}%</span>
        <span class="text-blue-200 text-sm">de acerto</span>
      </div>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-cols-3 gap-3 mb-5">
      <div class="bg-white rounded-xl p-4 shadow-sm border border-border text-center">
        <div class="text-2xl font-bold text-emerald-600">{{ score }}</div>
        <div class="text-xs text-textSecondary mt-1 font-medium">Acertos</div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-border text-center">
        <div class="text-2xl font-bold text-red-500">{{ total - score }}</div>
        <div class="text-xs text-textSecondary mt-1 font-medium">Erros</div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-border text-center">
        <div class="text-2xl font-bold text-primary">{{ total }}</div>
        <div class="text-xs text-textSecondary mt-1 font-medium">Total</div>
      </div>
    </div>

    <!-- Share -->
    <div class="bg-white rounded-2xl p-5 shadow-sm border border-border mb-5">
      <p class="text-sm font-bold text-textPrimary mb-3 flex items-center gap-2">
        <span>📤</span> Compartilhar resultado
      </p>
      <div class="grid grid-cols-3 gap-3">
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener"
          class="flex flex-col items-center gap-2 p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-xl border border-[#25D366]/30 transition-colors"
        >
          <svg class="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span class="text-xs font-semibold text-[#25D366]">WhatsApp</span>
        </a>

        <a
          :href="twitterUrl"
          target="_blank"
          rel="noopener"
          class="flex flex-col items-center gap-2 p-3 bg-black/5 hover:bg-black/10 rounded-xl border border-black/10 transition-colors"
        >
          <svg class="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span class="text-xs font-semibold text-black">X / Twitter</span>
        </a>

        <button
          @click="copyToClipboard"
          class="flex flex-col items-center gap-2 p-3 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/30 transition-colors"
        >
          <svg class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span class="text-xs font-semibold text-primary">{{ copied ? 'Copiado!' : 'Copiar' }}</span>
        </button>
      </div>
      <p class="text-xs text-textSecondary mt-3 text-center">
        Desafie seus amigos a também fazer o teste! 😄
      </p>
    </div>

    <!-- Question Review (collapsed) -->
    <div class="bg-white rounded-2xl shadow-sm border border-border mb-5 overflow-hidden">
      <button
        @click="showReview = !showReview"
        class="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span class="font-semibold text-textPrimary text-sm">Ver revisão das perguntas</span>
        <svg
          class="w-5 h-5 text-textSecondary transition-transform"
          :class="{ 'rotate-180': showReview }"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <Transition name="fade">
        <div v-if="showReview" class="border-t border-border divide-y divide-border">
          <div
            v-for="(answer, i) in answers"
            :key="answer.questionId"
            class="px-5 py-4"
          >
            <div class="flex items-start gap-3">
              <span :class="['flex-shrink-0 mt-0.5 text-base', answer.correct ? 'text-emerald-500' : 'text-red-400']">
                {{ answer.correct ? '✅' : '❌' }}
              </span>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-textPrimary leading-snug mb-1">
                  {{ i + 1 }}. {{ questions[i]?.question }}
                </p>
                <p v-if="!answer.correct" class="text-xs text-emerald-700 font-medium">
                  ✓ {{ answer.displayOptions[answer.correctIndex] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- CTA Buttons -->
    <div class="space-y-3">
      <button
        @click="$emit('show-ordo')"
        class="w-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-white font-bold py-4 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-3"
      >
        <img src="/ordo-icon.png" alt="Ordo" class="w-7 h-7 rounded-md" />
        Conhecer o app Ordo
      </button>

      <button
        @click="$emit('restart')"
        class="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Refazer o Teste (perguntas novas)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ScoreTitle } from '~/composables/useQuiz'
import type { Question } from '~/data/questions'
import type { Answer } from '~/composables/useQuiz'

const config = useRuntimeConfig()

const props = defineProps<{
  score: number
  total: number
  scoreTitle: ScoreTitle
  answers: Answer[]
  questions: Question[]
  modeLabel: string
}>()

defineEmits<{
  restart: []
  'show-ordo': []
}>()

const showReview = ref(false)
const copied = ref(false)

const percentage = computed(() => Math.round((props.score / props.total) * 100))

// SVG circle math
const radius = 52
const circumference = computed(() => 2 * Math.PI * radius)
const dashOffset = computed(() => {
  const pct = props.score / props.total
  return circumference.value * (1 - pct)
})

const siteUrl = computed(() => config.public.siteUrl)

const shareText = computed(
  () =>
    `Fiz o Teste Anglicano (${props.modeLabel}) e obtive ${props.score}/${props.total} pontos (${percentage.value}%)! 🏆 Meu título: "${props.scoreTitle.title}" ${props.scoreTitle.emoji}\n\nFaça também: ${siteUrl.value} 📖 #anglicanismo #caminhoanglicano`
)

const whatsappUrl = computed(
  () => `https://wa.me/?text=${encodeURIComponent(shareText.value)}`
)

const twitterUrl = computed(
  () =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `Fiz o Teste Anglicano (${props.modeLabel}): ${props.score}/${props.total} pontos (${percentage.value}%)! Título: "${props.scoreTitle.title}" ${props.scoreTitle.emoji} #anglicanismo #caminhoanglicano`
    )}&url=${encodeURIComponent(siteUrl.value)}`
)

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(shareText.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch {
    // fallback
  }
}

// Animate circle on mount — dashOffset reactive ref drives the SVG
onMounted(() => {
  // trigger reactivity after first paint for animation
})
</script>
