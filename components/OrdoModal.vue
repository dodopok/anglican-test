<template>
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
    @click.self="$emit('close')"
  >
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('close')" />

    <!-- Modal -->
    <div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
      <!-- Header -->
      <div class="bg-primary px-6 pt-5 pb-6 text-center relative">
        <button
          @click="$emit('close')"
          class="absolute top-3 right-3 text-blue-200 hover:text-white transition-colors p-1"
          aria-label="Fechar"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- App Icon -->
        <div class="flex justify-center mb-3">
          <img
            src="/ordo-icon.png"
            alt="Ordo App"
            class="w-20 h-20 rounded-2xl shadow-lg"
          />
        </div>
        <h3 class="font-display text-2xl font-bold text-white mb-1">Ordo</h3>
        <p class="text-blue-200 text-sm">Ofício Diário Anglicano</p>
      </div>

      <!-- Content -->
      <div class="px-6 py-5">
        <p class="text-textPrimary font-medium text-sm leading-relaxed mb-4">
          O <strong>Ordo</strong> é o aplicativo completo para o Ofício Diário anglicano com
          múltiplos Livros de Oração Comum (LOCs), calendário litúrgico e muito mais.
        </p>

        <!-- Features -->
        <ul class="space-y-2 mb-5">
          <li class="flex items-center gap-3 text-sm text-textSecondary">
            <span class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs">📅</span>
            Ofício Diário completo (Matinas e Vésperas)
          </li>
          <li class="flex items-center gap-3 text-sm text-textSecondary">
            <span class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs">📖</span>
            Múltiplos LOCs: IEAB, IAB, 1662, 1987, ACNA e mais
          </li>
          <li class="flex items-center gap-3 text-sm text-textSecondary">
            <span class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🗓️</span>
            Calendário litúrgico com leituras do dia
          </li>
          <li class="flex items-center gap-3 text-sm text-textSecondary">
            <span class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🇧🇷</span>
            Em português, inglês e espanhol
          </li>
        </ul>

        <!-- Download Buttons -->
        <div class="space-y-3">
          <a
            href="https://apps.apple.com/br/app/ordo/id0000000000"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center gap-3 bg-black text-white rounded-xl px-4 py-3.5 font-semibold hover:bg-gray-900 transition-colors"
            @click.prevent="handleStore('ios')"
          >
            <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.73M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs text-gray-300">Disponível na</div>
              <div class="text-sm font-bold">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.caminhoanglicano.ordo"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center gap-3 bg-[#01875F] text-white rounded-xl px-4 py-3.5 font-semibold hover:bg-[#016B4C] transition-colors"
            @click.prevent="handleStore('android')"
          >
            <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs text-green-200">Disponível no</div>
              <div class="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </div>

        <button
          @click="$emit('close')"
          class="w-full mt-3 py-3 text-sm text-textSecondary hover:text-textPrimary transition-colors font-medium"
        >
          Agora não
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
defineEmits<{ close: [] }>()

function handleStore(platform: 'ios' | 'android') {
  const url = platform === 'ios' ? config.public.ordoAppStore : config.public.ordoPlayStore
  window.open(url, '_blank')
}
</script>
