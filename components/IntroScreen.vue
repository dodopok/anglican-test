<template>
  <div class="intro-root">

    <!-- ─── Hero ── -->
    <section class="hero-section">
      <!-- Faint arch watermark -->
      <div class="arch-watermark" aria-hidden="true">
        <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="82" y="1" width="36" height="258" rx="2" fill="#1754CF" opacity=".05"/>
          <rect x="1" y="86" width="198" height="36" rx="2" fill="#1754CF" opacity=".05"/>
          <path d="M38 88 Q38 20 100 20 Q162 20 162 88" stroke="#1754CF" stroke-width="2.5" fill="none" opacity=".07"/>
        </svg>
      </div>

      <div class="icon-wrap">
        <img src="/ordo-icon.png" alt="Ordo" class="ordo-icon" />
      </div>

      <p class="eyebrow">Caminho Anglicano</p>

      <h1 class="hero-title">
        Teste<br /><em>Anglicano</em>
      </h1>

      <div class="ornament" aria-hidden="true">
        <span class="ornament-line" />
        <span class="ornament-diamond">✦</span>
        <span class="ornament-line" />
      </div>

      <p class="hero-sub">
        30 perguntas sobre história, liturgia, LOC e teologia anglicana.
        Sorteadas a cada vez.
      </p>
    </section>

    <!-- ─── CTA ── -->
    <button class="cta-btn" @click="$emit('start')">
      Começar o Teste
      <svg class="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>

    <p class="cta-note">Cada tentativa tem perguntas diferentes</p>

    <!-- ─── About blurb ── -->
    <div class="about-blurb">
      <p>
        Parte do projeto <strong>Caminho Anglicano</strong>.
        Ao final, conheça o <strong>Ordo</strong> — app de Ofício Diário anglicano.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
defineEmits<{ start: [] }>()
</script>

<style scoped>
.intro-root {
  padding-top: 0.5rem;
  animation: slideUp 0.45s cubic-bezier(.22,.68,0,1.2) both;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Hero */
.hero-section {
  position: relative;
  text-align: center;
  padding: 2.5rem 1rem 2.25rem;
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
.arch-watermark svg { width: 240px; height: auto; }

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
  font-size: clamp(3.2rem, 13vw, 5rem);
  font-weight: 600;
  line-height: 1.0;
  color: #1C1917;
  margin: 0 0 1.1rem;
}
.hero-title em {
  font-style: italic;
  color: #1754CF;
}

.ornament {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 180px;
  margin: 0 auto 1.1rem;
}
.ornament-line {
  flex: 1;
  height: 1px;
  background: #B8962E;
  opacity: 0.45;
}
.ornament-diamond {
  font-size: 0.55rem;
  color: #B8962E;
  opacity: 0.75;
}

.hero-sub {
  position: relative;
  z-index: 1;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.65;
  color: #78716C;
  max-width: 280px;
  margin: 0 auto;
}

/* CTA */
.cta-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #1754CF;
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 1.05rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 20px rgba(23, 84, 207, 0.28);
  margin-bottom: 0.7rem;
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
  width: 17px;
  height: 17px;
  transition: transform 0.15s;
}
.cta-btn:hover .cta-arrow { transform: translateX(3px); }

.cta-note {
  font-family: 'Raleway', sans-serif;
  font-size: 0.72rem;
  color: #A8A29E;
  text-align: center;
  margin: 0 0 2rem;
}

/* About */
.about-blurb {
  border-top: 1px solid #E7E5E4;
  padding-top: 1.25rem;
}
.about-blurb p {
  font-family: 'Raleway', sans-serif;
  font-size: 0.78rem;
  line-height: 1.7;
  color: #78716C;
  margin: 0;
  text-align: center;
}
.about-blurb strong {
  color: #1C1917;
  font-weight: 600;
}
</style>
