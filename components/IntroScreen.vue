<template>
  <div class="intro-root">

    <!-- ─── Hero ──────────────────────────────────────────────────── -->
    <section class="hero-section">

      <!-- Faint arch watermark -->
      <div class="arch-watermark" aria-hidden="true">
        <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="82" y="1" width="36" height="258" rx="2" fill="#1754CF" opacity=".06"/>
          <rect x="1" y="86" width="198" height="36" rx="2" fill="#1754CF" opacity=".06"/>
          <path d="M38 88 Q38 20 100 20 Q162 20 162 88" stroke="#1754CF" stroke-width="2.5" fill="none" opacity=".08"/>
        </svg>
      </div>

      <!-- Ordo icon -->
      <div class="icon-wrap">
        <img src="/ordo-icon.png" alt="Ordo" class="ordo-icon" />
      </div>

      <!-- Eyebrow -->
      <p class="eyebrow">Caminho Anglicano</p>

      <!-- Title -->
      <h1 class="hero-title">
        Teste<br />
        <em>Anglicano</em>
      </h1>

      <!-- Gold rule ornament -->
      <div class="ornament" aria-hidden="true">
        <span class="ornament-line" />
        <span class="ornament-diamond">✦</span>
        <span class="ornament-line" />
      </div>

      <!-- Subtitle -->
      <p class="hero-sub">
        Quanto você conhece sobre a história, a liturgia e a teologia anglicana?
      </p>
    </section>

    <!-- ─── Meta chips ─────────────────────────────────────────────── -->
    <div class="chips-row">
      <span class="chip">📚 30 perguntas</span>
      <span class="chip">🔄 Sorteadas do banco</span>
      <span class="chip">⚡ 5 níveis</span>
    </div>

    <!-- ─── Difficulty strip ───────────────────────────────────────── -->
    <div class="diff-strip">
      <span class="diff-label">Dificuldade</span>
      <div class="diff-badges">
        <span class="badge badge-1">Muito Fácil</span>
        <span class="badge badge-2">Fácil</span>
        <span class="badge badge-3">Médio</span>
        <span class="badge badge-4">Difícil</span>
        <span class="badge badge-5">Dificílima</span>
      </div>
    </div>

    <!-- ─── Topics ─────────────────────────────────────────────────── -->
    <ul class="topics-list">
      <li v-for="t in topics" :key="t.label">
        <span class="topic-icon">{{ t.icon }}</span>
        <span class="topic-text">{{ t.label }}</span>
      </li>
    </ul>

    <!-- ─── CTA ────────────────────────────────────────────────────── -->
    <button class="cta-btn" @click="$emit('start')">
      Começar o Teste
      <svg class="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>

    <p class="cta-note">As perguntas são sorteadas — cada tentativa é diferente</p>

    <!-- ─── About blurb ────────────────────────────────────────────── -->
    <div class="about-blurb">
      <p>
        Este quiz é parte do projeto <strong>Caminho Anglicano</strong>.
        Ao final, você poderá conhecer o <strong>Ordo</strong> — app de Ofício Diário
        anglicano com múltiplos Livros de Oração Comum.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
defineEmits<{ start: [] }>()

const topics = [
  { icon: '🏰', label: 'História anglicana e da Reforma' },
  { icon: '📖', label: 'Livro de Oração Comum (LOC)' },
  { icon: '⛪', label: 'Liturgia e Calendário Litúrgico' },
  { icon: '🕊️', label: 'Teologia e os 39 Artigos' },
  { icon: '🇧🇷', label: 'IEAB e anglicanismo no Brasil' },
  { icon: '✝️', label: 'Figuras históricas' },
]
</script>

<style scoped>
/* Root */
.intro-root {
  padding-top: 0.5rem;
  animation: slideUp 0.45s cubic-bezier(.22,.68,0,1.2) both;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Hero ── */
.hero-section {
  position: relative;
  text-align: center;
  padding: 2.5rem 1rem 2rem;
  overflow: hidden;
}

.arch-watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.arch-watermark svg {
  width: 240px;
  height: auto;
}

.icon-wrap {
  position: relative;
  z-index: 1;
  display: inline-flex;
  margin-bottom: 1.25rem;
}
.ordo-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(23, 84, 207, 0.18), 0 2px 8px rgba(0,0,0,0.08);
}

.eyebrow {
  position: relative;
  z-index: 1;
  font-family: 'Raleway', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #B8962E;
  margin: 0 0 0.6rem;
}

.hero-title {
  position: relative;
  z-index: 1;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(3rem, 12vw, 4.5rem);
  font-weight: 600;
  line-height: 1.0;
  color: #1C1917;
  margin: 0 0 1.1rem;
  letter-spacing: -0.01em;
}
.hero-title em {
  font-style: italic;
  color: #1754CF;
}

/* Ornament */
.ornament {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 200px;
  margin: 0 auto 1.1rem;
}
.ornament-line {
  flex: 1;
  height: 1px;
  background: #B8962E;
  opacity: 0.5;
}
.ornament-diamond {
  font-size: 0.6rem;
  color: #B8962E;
  opacity: 0.8;
}

.hero-sub {
  position: relative;
  z-index: 1;
  font-family: 'Raleway', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: #78716C;
  max-width: 320px;
  margin: 0 auto;
}

/* ── Chips ── */
.chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.chip {
  font-family: 'Raleway', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 0.35rem 0.85rem;
  border: 1.5px solid #E7E5E4;
  border-radius: 999px;
  color: #78716C;
  background: white;
}

/* ── Difficulty strip ── */
.diff-strip {
  background: white;
  border: 1.5px solid #E7E5E4;
  border-radius: 14px;
  padding: 0.9rem 1rem;
  margin-bottom: 1rem;
}
.diff-label {
  display: block;
  font-family: 'Raleway', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #78716C;
  margin-bottom: 0.6rem;
}
.diff-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.badge {
  font-family: 'Raleway', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
}
.badge-1 { background: #d1fae5; color: #065f46; }
.badge-2 { background: #dbeafe; color: #1e40af; }
.badge-3 { background: #fef3c7; color: #92400e; }
.badge-4 { background: #ffedd5; color: #9a3412; }
.badge-5 { background: #ede9fe; color: #5b21b6; }

/* ── Topics ── */
.topics-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  background: white;
  border: 1.5px solid #E7E5E4;
  border-radius: 14px;
  overflow: hidden;
}
.topics-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #F4F4F4;
}
.topics-list li:last-child { border-bottom: none; }

.topic-icon {
  font-size: 1rem;
  flex-shrink: 0;
}
.topic-text {
  font-family: 'Raleway', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #44403C;
}

/* ── CTA ── */
.cta-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #1754CF;
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
  box-shadow: 0 4px 20px rgba(23, 84, 207, 0.28);
  margin-bottom: 0.6rem;
}
.cta-btn:hover {
  background: #1244A6;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(23, 84, 207, 0.35);
}
.cta-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(23, 84, 207, 0.2);
}
.cta-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.18s;
}
.cta-btn:hover .cta-arrow {
  transform: translateX(3px);
}

.cta-note {
  font-family: 'Raleway', sans-serif;
  font-size: 0.72rem;
  color: #A8A29E;
  text-align: center;
  margin: 0 0 1.5rem;
}

/* ── About blurb ── */
.about-blurb {
  border-top: 1px solid #E7E5E4;
  padding-top: 1.25rem;
  margin-top: 0.5rem;
}
.about-blurb p {
  font-family: 'Raleway', sans-serif;
  font-size: 0.78rem;
  line-height: 1.7;
  color: #78716C;
  margin: 0;
}
.about-blurb strong {
  color: #1C1917;
  font-weight: 600;
}
</style>
