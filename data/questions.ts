export interface Question {
  id: number
  question: string
  options: string[]
  correctIndex: number
  difficulty: 1 | 2 | 3 | 4 | 5
  category: string
  explanation: string
}

export const difficultyLabels: Record<number, string> = {
  1: 'Muito Fácil',
  2: 'Fácil',
  3: 'Médio',
  4: 'Difícil',
  5: 'Dificílima',
}

export const difficultyColors: Record<number, string> = {
  1: 'bg-emerald-100 text-emerald-800',
  2: 'bg-blue-100 text-blue-800',
  3: 'bg-amber-100 text-amber-800',
  4: 'bg-orange-100 text-orange-800',
  5: 'bg-purple-100 text-purple-800',
}

export const categoryColors: Record<string, string> = {
  'História': 'text-amber-700',
  'Liturgia': 'text-primary',
  'LOC & Orações': 'text-emerald-700',
  'Teologia': 'text-purple-700',
  'Brasil Anglicano': 'text-blue-700',
  'Figuras Históricas': 'text-red-700',
  'Calendário Litúrgico': 'text-teal-700',
}

export const allQuestions: Question[] = [
  // ─── MUITO FÁCIL (difficulty: 1) ─────────────────────────────────────────
  {
    id: 1,
    question: 'Qual é o nome do principal livro de orações anglicano?',
    options: ['Livro de Oração Comum', 'Catecismo Romano', 'Confissão de Westminster', 'Didaquê'],
    correctIndex: 0,
    difficulty: 1,
    category: 'LOC & Orações',
    explanation:
      'O Livro de Oração Comum (LOC), ou Book of Common Prayer em inglês, é o livro litúrgico central do anglicanismo, compilado originalmente por Thomas Cranmer em 1549.',
  },
  {
    id: 2,
    question: 'Em que país nasceu o anglicanismo?',
    options: ['Inglaterra', 'Alemanha', 'Suíça', 'França'],
    correctIndex: 0,
    difficulty: 1,
    category: 'História',
    explanation:
      'O anglicanismo nasceu na Inglaterra no século XVI, quando Henrique VIII se separou da autoridade do Papa de Roma em 1534.',
  },
  {
    id: 3,
    question: 'Qual foi o rei inglês que iniciou a separação da Igreja da Inglaterra com Roma?',
    options: ['Henrique VIII', 'Carlos I', 'Eduardo VI', 'Ricardo II'],
    correctIndex: 0,
    difficulty: 1,
    category: 'História',
    explanation:
      'Henrique VIII, pelo Ato de Supremacia de 1534, declarou-se Chefe Supremo da Igreja da Inglaterra, rompendo com a autoridade papal. A motivação principal foi sua disputa com o Papa sobre a anulação de seu casamento com Catarina de Aragão.',
  },
  {
    id: 4,
    question: 'Qual é a cidade sede da Comunhão Anglicana mundial?',
    options: ['Canterbury', 'Londres', 'Oxford', 'York'],
    correctIndex: 0,
    difficulty: 1,
    category: 'História',
    explanation:
      'Canterbury é a sede histórica do anglicanismo. O Arcebispo de Cantuária (Canterbury) é o líder espiritual simbólico da Comunhão Anglicana, composta por mais de 85 milhões de fiéis em todo o mundo.',
  },
  {
    id: 5,
    question: 'Quantos sacramentos a maioria das igrejas anglicanas reconhece como sacramentos do Evangelho?',
    options: ['Dois (Batismo e Eucaristia)', 'Sete', 'Um', 'Três'],
    correctIndex: 0,
    difficulty: 1,
    category: 'Teologia',
    explanation:
      'Segundo o Artigo 25 dos 39 Artigos da Religião, o anglicanismo reconhece dois sacramentos do Evangelho: o Batismo e a Ceia do Senhor (Eucaristia). Outros ritos são reconhecidos, mas não elevados ao mesmo nível sacramental.',
  },
  {
    id: 6,
    question: 'Qual é a cor litúrgica do Tempo do Natal e das festas do Senhor?',
    options: ['Branco', 'Verde', 'Roxo', 'Vermelho'],
    correctIndex: 0,
    difficulty: 1,
    category: 'Calendário Litúrgico',
    explanation:
      'O branco (ou dourado) é a cor da alegria e da pureza, usada no Natal, na Páscoa, na Epifania e em outras festas do Senhor, bem como em batizados e casamentos.',
  },
  {
    id: 7,
    question: 'O que celebra o Domingo de Pentecostes?',
    options: [
      'A descida do Espírito Santo sobre os apóstolos',
      'A ressurreição de Jesus',
      'O nascimento de Jesus',
      'A ascensão de Jesus ao céu',
    ],
    correctIndex: 0,
    difficulty: 1,
    category: 'Calendário Litúrgico',
    explanation:
      'Pentecostes celebra a vinda do Espírito Santo sobre os apóstolos, descrita em Atos 2. Ocorre 50 dias após a Páscoa e é chamado de "aniversário da Igreja". A cor litúrgica é o vermelho.',
  },
  {
    id: 8,
    question: 'Qual oração Jesus ensinou a seus discípulos e é central no culto anglicano?',
    options: ['Pai Nosso', 'Ave Maria', 'Salve Rainha', 'Magnificat'],
    correctIndex: 0,
    difficulty: 1,
    category: 'LOC & Orações',
    explanation:
      'O Pai Nosso (Oração do Senhor) é a oração por excelência do cristão, encontrada em Mateus 6:9-13 e Lucas 11:2-4. No culto anglicano, é recitada em praticamente todos os ofícios e celebrações.',
  },
  {
    id: 9,
    question: 'Qual instrumento musical é historicamente central no culto anglicano?',
    options: ['Órgão de tubos', 'Violão', 'Pandeiro', 'Flauta'],
    correctIndex: 0,
    difficulty: 1,
    category: 'Liturgia',
    explanation:
      'O órgão de tubos é o instrumento tradicional das catedrais e igrejas anglicanas, com uma rica tradição de compositores como Henry Purcell, G.F. Handel e outros que compuseram para o culto anglicano.',
  },
  {
    id: 10,
    question: 'Por qual país vieram os primeiros missionários anglicanos que evangelizaram brasileiros no século XIX?',
    options: [
      'Estados Unidos (Igreja Episcopal Americana)',
      'Inglaterra (Igreja da Inglaterra)',
      'Canadá (Igreja Anglicana do Canadá)',
      'Escócia (Igreja Episcopal Escocesa)',
    ],
    correctIndex: 0,
    difficulty: 1,
    category: 'Brasil Anglicano',
    explanation:
      'Os primeiros missionários a evangelizar brasileiros vieram dos Estados Unidos, enviados pela Igreja Episcopal Americana (ECUSA). A missão se concentrou inicialmente no Sul do Brasil, no Rio Grande do Sul, a partir de 1890. Antes disso, já existiam capelânias britânicas nas grandes cidades, mas voltadas à comunidade inglesa residente.',
  },
  {
    id: 11,
    question: 'O que é o "Pai Nosso" na tradição anglicana?',
    options: [
      'A Oração do Senhor, ensinada por Jesus',
      'Uma oração de São Francisco de Assis',
      'Um hino do Livro de Oração Comum',
      'Uma litania pelos defuntos',
    ],
    correctIndex: 0,
    difficulty: 1,
    category: 'LOC & Orações',
    explanation:
      'Na tradição anglicana, a Oração do Senhor (Pai Nosso) é central em todos os ofícios. O LOC a inclui em latim e inglês (e português nas versões brasileiras), e é recitada em toda celebração eucarística.',
  },
  {
    id: 12,
    question: 'Qual é o dia mais importante do calendário cristão anglicano?',
    options: ['A Páscoa (Ressurreição do Senhor)', 'O Natal', 'Pentecostes', 'Epifania'],
    correctIndex: 0,
    difficulty: 1,
    category: 'Calendário Litúrgico',
    explanation:
      'A Páscoa é o centro de todo o ano litúrgico cristão. Para os anglicanos, como para todos os cristãos, a Ressurreição de Jesus Cristo é o fundamento da fé.',
  },

  // ─── FÁCIL (difficulty: 2) ────────────────────────────────────────────────
  {
    id: 13,
    question: 'Quem foi o primeiro Arcebispo de Cantuária da era anglicana?',
    options: ['Thomas Cranmer', 'William Laud', 'Matthew Parker', 'Thomas Becket'],
    correctIndex: 0,
    difficulty: 2,
    category: 'Figuras Históricas',
    explanation:
      'Thomas Cranmer (1489–1556) foi o primeiro Arcebispo de Cantuária a liderar a Igreja da Inglaterra separada de Roma. Ele foi o principal arquiteto da Reforma Anglicana e o autor do primeiro Livro de Oração Comum.',
  },
  {
    id: 14,
    question: 'Em que século aconteceu a Reforma Anglicana?',
    options: ['Século XVI', 'Século XV', 'Século XVII', 'Século XVIII'],
    correctIndex: 0,
    difficulty: 2,
    category: 'História',
    explanation:
      'A Reforma Anglicana ocorreu no século XVI, iniciando com o Ato de Supremacia em 1534 e tomando forma teológica e litúrgica principalmente durante os reinados de Eduardo VI (1547–1553) e Elizabeth I (1558–1603).',
  },
  {
    id: 15,
    question: 'O que é a Quaresma no calendário litúrgico anglicano?',
    options: [
      'Período de 40 dias de penitência antes da Páscoa',
      'Período de celebração após a Páscoa',
      'O tempo litúrgico que precede o Natal',
      'A semana que precede o Pentecostes',
    ],
    correctIndex: 0,
    difficulty: 2,
    category: 'Calendário Litúrgico',
    explanation:
      'A Quaresma é o período de 40 dias (excluindo os domingos) de preparação penitencial para a Páscoa. Começa na Quarta-feira de Cinzas e termina no Sábado Santo. A cor litúrgica é o roxo/violeta.',
  },
  {
    id: 16,
    question: 'Qual cor litúrgica é usada durante a Quaresma e o Advento na tradição anglicana?',
    options: ['Roxo/Violeta', 'Verde', 'Vermelho', 'Branco'],
    correctIndex: 0,
    difficulty: 2,
    category: 'Calendário Litúrgico',
    explanation:
      'O roxo/violeta é a cor da penitência e da espera, usada tanto na Quaresma (penitência antes da Páscoa) quanto no Advento (espera pelo Natal). Algumas tradições usam o azul no Advento para diferenciar.',
  },
  {
    id: 17,
    question: 'Qual rainha inglesa consolidou o anglicanismo no século XVI?',
    options: ['Elizabeth I', 'Maria Tudor', 'Lady Jane Grey', 'Ana Bolena'],
    correctIndex: 0,
    difficulty: 2,
    category: 'Figuras Históricas',
    explanation:
      'Elizabeth I (1558–1603) estabeleceu o Estabelecimento Elisabetano, que criou uma Igreja da Inglaterra que buscava ser o "caminho do meio" (Via Media) entre o catolicismo romano e o protestantismo radical, uma posição que define o anglicanismo até hoje.',
  },
  {
    id: 18,
    question: 'O que é o Advento no calendário litúrgico?',
    options: [
      'Período de quatro semanas de preparação para o Natal',
      'A chegada do Espírito Santo',
      'O período após a Páscoa',
      'A semana da Paixão de Cristo',
    ],
    correctIndex: 0,
    difficulty: 2,
    category: 'Calendário Litúrgico',
    explanation:
      'O Advento ("vinda" em latim) é o período de quatro semanas que prepara os cristãos para o Natal, com dupla dimensão: lembrar a vinda histórica de Cristo em Belém e esperar sua vinda futura em glória.',
  },
  {
    id: 19,
    question: 'Qual é a profissão de fé mais antiga usada no batismo e nos ofícios anglicanos?',
    options: ['Credo Apostólico', 'Credo Niceno', 'Credo Atanasiano', 'Confissão de Westminster'],
    correctIndex: 0,
    difficulty: 2,
    category: 'Liturgia',
    explanation:
      'O Credo Apostólico é a profissão de fé mais antiga da tradição cristã ocidental, usada no Batismo e nos Ofícios Diários (Matinas e Vésperas/Oração da Manhã e Oração da Tarde) na liturgia anglicana.',
  },
  {
    id: 20,
    question: 'O que é o "Te Deum"?',
    options: [
      'Um hino de louvor usado no culto desde a Antiguidade',
      'Uma oração de confissão de pecados',
      'Um salmo penitencial da Quaresma',
      'Uma oração pelos defuntos',
    ],
    correctIndex: 0,
    difficulty: 2,
    category: 'Liturgia',
    explanation:
      'O "Te Deum Laudamus" ("A ti, ó Deus, louvamos") é um hino cristão do século IV ou V, atribuído a Ambrósio e Agostinho. No LOC, é cantado ou recitado na Oração da Manhã, especialmente em festas.',
  },
  {
    id: 21,
    question: 'Quem fundou o metodismo, movimento que nasceu dentro do anglicanismo?',
    options: ['John Wesley', 'George Whitefield', 'Charles Spurgeon', 'Jonathan Edwards'],
    correctIndex: 0,
    difficulty: 2,
    category: 'Figuras Históricas',
    explanation:
      'John Wesley (1703–1791), sacerdote anglicano, iniciou o movimento de renovação que se tornaria o metodismo. Ele e seu irmão Charles nunca deixaram a Igreja da Inglaterra; a separação definitiva ocorreu após sua morte.',
  },
  {
    id: 22,
    question: 'O que é o "Magnificat" na liturgia anglicana?',
    options: [
      'O cântico de Maria, registrado em Lucas 1:46-55',
      'Uma oração eucarística',
      'Um salmo da Quaresma',
      'O hino de abertura do Advento',
    ],
    correctIndex: 0,
    difficulty: 2,
    category: 'Liturgia',
    explanation:
      'O Magnificat (início: "Minha alma engrandece ao Senhor") é o cântico de Maria ao visitar sua prima Isabel, registrado em Lucas 1:46-55. Na tradição anglicana, é cantado na Oração da Tarde (Vésperas/Evensong).',
  },
  {
    id: 23,
    question: 'Qual é o nome da oração pelo mundo e pelas necessidades da comunidade no culto anglicano?',
    options: ['Oração dos Fiéis (ou Intercessões)', 'Confissão Geral', 'Coleta', 'Prefácio'],
    correctIndex: 0,
    difficulty: 2,
    category: 'Liturgia',
    explanation:
      'A Oração dos Fiéis (ou Intercessões) é a grande oração de intercessão da comunidade pelo mundo, pela Igreja, pelos governantes e pelas necessidades específicas. É momento central do culto eucarístico anglicano.',
  },
  {
    id: 24,
    question: 'Qual é a cor litúrgica do Tempo Comum (Tempo do Reino)?',
    options: ['Verde', 'Branco', 'Roxo', 'Vermelho'],
    correctIndex: 0,
    difficulty: 2,
    category: 'Calendário Litúrgico',
    explanation:
      'O verde é a cor do crescimento, da vida e da esperança, usado durante o Tempo Comum — os longos períodos do ano litúrgico que não são festas ou tempos especiais. Simboliza o crescimento espiritual da Igreja.',
  },

  // ─── MÉDIO (difficulty: 3) ────────────────────────────────────────────────
  {
    id: 25,
    question: 'Em que ano foi publicada a primeira edição do Book of Common Prayer (Livro de Oração Comum)?',
    options: ['1549', '1534', '1563', '1611'],
    correctIndex: 0,
    difficulty: 3,
    category: 'História',
    explanation:
      'O primeiro Book of Common Prayer foi publicado em 1549, durante o reinado de Eduardo VI, sob a liderança de Thomas Cranmer. Uma versão revisada e mais protestante foi publicada em 1552. A versão de 1662 permanece oficial na Igreja da Inglaterra.',
  },
  {
    id: 26,
    question: 'Quantos Artigos compõem a confissão de fé anglicana?',
    options: ['39', '25', '33', '42'],
    correctIndex: 0,
    difficulty: 3,
    category: 'Teologia',
    explanation:
      'Os 39 Artigos da Religião (formulados entre 1553 e 1571) são a confissão de fé do anglicanismo, estabelecendo a posição teológica anglicana sobre a Escritura, a salvação, os sacramentos, o papado e outros temas.',
  },
  {
    id: 27,
    question: 'O que é a "Via Media" no anglicanismo?',
    options: [
      'O caminho do meio entre o catolicismo romano e o protestantismo',
      'Uma rota de peregrinagem medieval inglesa',
      'O nome de uma das liturgias do LOC',
      'A posição anglicana sobre o papado',
    ],
    correctIndex: 0,
    difficulty: 3,
    category: 'Teologia',
    explanation:
      'A "Via Media" (caminho do meio) descreve a posição anglicana de se situar entre o catolicismo romano e o protestantismo radical. Formulada especialmente por Richard Hooker e desenvolvida no século XIX pelo Movimento de Oxford.',
  },
  {
    id: 28,
    question: 'Em que ano foi aprovado o Ato de Supremacia, declarando Henrique VIII chefe da Igreja da Inglaterra?',
    options: ['1534', '1517', '1549', '1521'],
    correctIndex: 0,
    difficulty: 3,
    category: 'História',
    explanation:
      'O Ato de Supremacia de 1534 declarou Henrique VIII "Chefe Supremo na terra da Igreja da Inglaterra". Isso formalizou a separação de Roma, embora Henrique tenha se mantido teologicamente conservador — ele não era protestante.',
  },
  {
    id: 29,
    question: 'Quem escreveu os 42 Artigos originais, que depois se tornaram os 39 Artigos?',
    options: ['Thomas Cranmer', 'John Jewel', 'Richard Hooker', 'Matthew Parker'],
    correctIndex: 0,
    difficulty: 3,
    category: 'Figuras Históricas',
    explanation:
      'Thomas Cranmer redigiu os 42 Artigos em 1553. Após a morte de Cranmer (1556) e a revisão da doutrina anglicana, os artigos foram revisados para 39, sendo aprovados em sua forma final em 1571 sob Elizabeth I.',
  },
  {
    id: 30,
    question: 'O que é o Credo Niceno e quando é usado na liturgia anglicana?',
    options: [
      'Profissão de fé do Concílio de Niceia (325); usada na Eucaristia dominical',
      'Credo do Concílio de Trento; usado nas festas',
      'Profissão de fé do Concílio de Calcedônia; usada no Batismo',
      'Credo medieval; usado apenas na Quaresma',
    ],
    correctIndex: 0,
    difficulty: 3,
    category: 'Liturgia',
    explanation:
      'O Credo Niceno foi formulado no Concílio de Niceia (325 d.C.) e expandido em Constantinopla (381 d.C.). Na liturgia anglicana, é recitado na celebração eucarística dominical, ao contrário do Credo Apostólico, que é para os Ofícios Diários.',
  },
  {
    id: 31,
    question: 'O que é o "Ofício Diário" na tradição anglicana?',
    options: [
      'A oração rítmica ao longo do dia: Oração da Manhã e Oração da Tarde',
      'A Missa celebrada diariamente',
      'A confissão diária de pecados ao sacerdote',
      'O catecismo ensinado diariamente às crianças',
    ],
    correctIndex: 0,
    difficulty: 3,
    category: 'LOC & Orações',
    explanation:
      'O Ofício Diário (Daily Office) é a prática de oração estruturada ao longo do dia — especialmente Matinas (Oração da Manhã) e Vésperas (Oração da Tarde). Herança do ofício monástico, democratizado por Cranmer para que todo cristão pudesse praticar.',
  },
  {
    id: 32,
    question: 'Qual é o período litúrgico entre o Natal e a Quarta-feira de Cinzas?',
    options: [
      'Epifania (Tempo após o Natal)',
      'Tempo Pascal',
      'Advento',
      'Pentecostes',
    ],
    correctIndex: 0,
    difficulty: 3,
    category: 'Calendário Litúrgico',
    explanation:
      'Após o Natal começa o Tempo da Epifania (6 de janeiro), celebrando a manifestação de Cristo aos gentios. Esse período se estende até a Quarta-feira de Cinzas, quando começa a Quaresma.',
  },
  {
    id: 33,
    question: 'Em que região do Brasil se concentrou o início da missão anglicana entre brasileiros, no final do século XIX?',
    options: [
      'Sul do Brasil, especialmente no Rio Grande do Sul',
      'Nordeste, em Pernambuco e Bahia',
      'Sudeste, em São Paulo e Rio de Janeiro',
      'Norte, na região Amazônica',
    ],
    correctIndex: 0,
    difficulty: 3,
    category: 'Brasil Anglicano',
    explanation:
      'A missão anglicana entre brasileiros teve início no Sul do Brasil, sobretudo no Rio Grande do Sul, a partir de 1890. Foi nessa região que missionários americanos — entre eles Lucien Lee Kinsolving e James Watson Morris — iniciaram o trabalho que daria origem à organização da Igreja Episcopal no Brasil.',
  },
  {
    id: 34,
    question: 'O que é a "Confissão Geral" no culto anglicano?',
    options: [
      'Uma oração de confissão de pecados feita coletivamente pela congregação',
      'A confissão privada feita ao sacerdote antes da comunhão',
      'Um documento teológico dos 39 Artigos',
      'A leitura do Decálogo antes da Eucaristia',
    ],
    correctIndex: 0,
    difficulty: 3,
    category: 'Liturgia',
    explanation:
      'A Confissão Geral é a oração coletiva de confissão de pecados da congregação, um dos elementos distintivos da liturgia anglicana. Cranmer a introduziu para que toda a assembleia reconhecesse seus pecados juntos, seguida pela Absolvição pronunciada pelo sacerdote.',
  },
  {
    id: 35,
    question: 'Qual foi a contribuição de William Tyndale para o anglicanismo?',
    options: [
      'Traduziu a Bíblia para o inglês; mártir da Reforma protestante inglesa',
      'Escreveu os 39 Artigos da Religião',
      'Fundou a Diocese de Canterbury',
      'Introduziu o canto coral nas catedrais anglicanas',
    ],
    correctIndex: 0,
    difficulty: 3,
    category: 'Figuras Históricas',
    explanation:
      'William Tyndale (c. 1494–1536) traduziu o Novo Testamento e partes do Antigo Testamento para o inglês, estabelecendo a base do inglês bíblico que influenciou diretamente o LOC e a Bíblia do Rei Jaime (KJV). Foi executado por heresia.',
  },
  {
    id: 36,
    question: 'Qual é o nome do serviço litúrgico anglicano de canto vespertino em catedrais?',
    options: ['Evensong', 'Compline', 'Lauds', 'Benedictus'],
    correctIndex: 0,
    difficulty: 3,
    category: 'Liturgia',
    explanation:
      'O Evensong (Oração da Tarde cantada) é um dos elementos mais característicos da tradição anglicana, especialmente em catedrais com coros de canto coral. Inclui salmos, lições da Escritura, o Magnificat e o Nunc Dimittis.',
  },

  // ─── DIFÍCIL (difficulty: 4) ──────────────────────────────────────────────
  {
    id: 37,
    question: 'O que é a "Lambeth Conference"?',
    options: [
      'Reunião dos bispos de toda a Comunhão Anglicana, realizada a cada dez anos',
      'O conselho permanente de governo da Igreja da Inglaterra',
      'O tribunal eclesiástico do Arcebispo de Cantuária',
      'O sínodo geral anual da Igreja da Inglaterra',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'História',
    explanation:
      'A Conferência de Lambeth é a reunião de todos os bispos da Comunhão Anglicana, realizada geralmente a cada dez anos no Palácio de Lambeth (residência do Arcebispo de Cantuária em Londres). A primeira foi em 1867. Suas resoluções são consultivas, não legislativas.',
  },
  {
    id: 38,
    question: 'Quem foi Richard Hooker e qual sua importância para a teologia anglicana?',
    options: [
      'Teólogo do século XVI que fundamentou a teologia anglicana em "Of the Laws of Ecclesiastical Polity"',
      'Arcebispo de Cantuária que liderou a Reforma sob Elizabeth I',
      'Missionário que evangelizou o Brasil no século XIX',
      'Autor dos 39 Artigos em sua versão definitiva',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'Figuras Históricas',
    explanation:
      'Richard Hooker (1554–1600) é um dos mais importantes teólogos anglicanos, autor de "Of the Laws of Ecclesiastical Polity". Ele articulou a teologia das três fontes: Escritura, Tradição e Razão — a base da teologia anglicana até hoje.',
  },
  {
    id: 39,
    question: 'O que é o "Quadrilátero de Chicago-Lambeth" (1888)?',
    options: [
      'Quatro princípios anglicanos para a unidade cristã: Escrituras, Credos, Sacramentos e Episcopado histórico',
      'Quatro dioceses fundadoras da Igreja Episcopal nas Américas',
      'Um acordo de plena comunhão entre anglicanos e luteranos',
      'As quatro fontes teológicas do anglicanismo',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'Teologia',
    explanation:
      'O Quadrilátero de Chicago-Lambeth (1886/1888) propõe quatro bases para a unidade cristã: (1) as Sagradas Escrituras como regra da fé; (2) os Credos históricos; (3) os dois sacramentos do Batismo e Eucaristia; (4) o episcopado histórico.',
  },
  {
    id: 40,
    question: 'O que significa o princípio "lex orandi, lex credendi" e como se aplica ao anglicanismo?',
    options: [
      '"A lei da oração é a lei da crença" — a liturgia forma e expressa a teologia anglicana',
      '"A lei da Escritura é a lei da Igreja" — princípio dos 39 Artigos',
      '"A lei dos sínodos é a lei da fé" — princípio de governança eclesiástica',
      '"A lei do amor é a lei do cristão" — ética anglicana',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'Teologia',
    explanation:
      '"Lex orandi, lex credendi" (a lei da oração é a lei da crença) é fundamental para entender o anglicanismo: a teologia anglicana é expressa primariamente através da liturgia do LOC, não de confissões dogmáticas rígidas. Cranmer entendia a liturgia como formação teológica.',
  },
  {
    id: 41,
    question: 'Em que ano Thomas Cranmer foi queimado na fogueira e em que cidade?',
    options: ['1556, em Oxford', '1549, em Londres', '1563, em Canterbury', '1547, em York'],
    correctIndex: 0,
    difficulty: 4,
    category: 'Figuras Históricas',
    explanation:
      'Thomas Cranmer foi queimado na fogueira em 21 de março de 1556, em Oxford, durante o reinado de Maria Tudor (católica). No momento da execução, ele estendeu primeiro a mão direita (que havia assinado uma recantação) ao fogo, dizendo que ela deveria ser a primeira a arder.',
  },
  {
    id: 42,
    question: 'O que é o "Acordo de Porvoo" no contexto da Comunhão Anglicana?',
    options: [
      'Acordo de plena comunhão entre igrejas anglicanas britânicas/irlandesas e igrejas luteranas nórdicas (1992)',
      'Acordo entre a Igreja da Inglaterra e a Igreja Católica Romana',
      'Um documento sobre a ordenação de mulheres na Comunhão Anglicana',
      'Um tratado de paz eclesiástica entre anglicanos e presbiterianos',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'História',
    explanation:
      'O Acordo de Porvoo (1992) estabelece plena comunhão entre as igrejas anglicanas da Grã-Bretanha e Irlanda e as igrejas luteranas dos países nórdicos e bálticos. O nome vem de Porvoo, cidade finlandesa onde o acordo foi firmado.',
  },
  {
    id: 43,
    question: 'Quem foi William Wilberforce e qual sua relação com o anglicanismo?',
    options: [
      'Político anglicano evangelicalista que liderou o movimento abolicionista britânico no século XIX',
      'Arcebispo de Cantuária que condenou a escravidão no século XVIII',
      'Fundador do movimento evangélico dentro do anglicanismo',
      'Missionário anglicano que evangelizou a África subsaariana',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'Figuras Históricas',
    explanation:
      'William Wilberforce (1759–1833) foi um político britânico profundamente influenciado pelo movimento evangélico anglicano (Clapham Sect). Dedicou sua vida a abolir o comércio escravo, conquistando a aprovação da lei abolicionista em 1807. Morreu poucos dias antes da abolição total da escravidão no Império Britânico.',
  },
  {
    id: 44,
    question: 'O que é o "Movimento de Oxford" (Tractarianismo) do século XIX?',
    options: [
      'Movimento que buscou reafirmar as raízes católicas do anglicanismo, contra o liberalismo e o regalismo',
      'Um movimento de renovação carismática dentro do anglicanismo',
      'A fundação das primeiras universidades anglicanas no século XIX',
      'Um movimento missionário para evangelizar os países do Terceiro Mundo',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'História',
    explanation:
      'O Movimento de Oxford (1833–1845) foi liderado por John Henry Newman, Edward Pusey e John Keble na Universidade de Oxford. Publicaram os "Tracts for the Times" e enfatizaram a catolicidade, a apostolicidade e a sacramentalidade da Igreja Anglicana.',
  },
  {
    id: 45,
    question: 'Quem foi John Henry Newman e qual seu papel no anglicanismo e além?',
    options: [
      'Principal líder do Movimento de Oxford que depois se converteu ao catolicismo romano (1845) e foi cardeal',
      'Fundador do metodismo que nunca deixou o anglicanismo',
      'Arcebispo de York que consolidou o anglicanismo no século XIX',
      'Autor da revisão definitiva do LOC de 1662',
    ],
    correctIndex: 0,
    difficulty: 4,
    category: 'Figuras Históricas',
    explanation:
      'John Henry Newman (1801–1890) foi o mais brilhante teólogo do Movimento de Oxford. Sua conversão ao catolicismo romano em 1845 foi um choque para os anglicanos. Mais tarde foi elevado à condição de cardeal e beatificado em 2010, sendo canonizado em 2019.',
  },

  // ─── DIFICÍLIMA (difficulty: 5) ──────────────────────────────────────────
  {
    id: 46,
    question: 'O que é a "teologia das três fontes" (Escritura, Tradição e Razão) e a qual teólogo anglicano é atribuída?',
    options: [
      'Richard Hooker formulou que Escritura, Tradição e Razão são as fontes do conhecimento teológico anglicano',
      'Thomas Cranmer propôs que Escritura, Catecismo e Credos são os fundamentos anglicanos',
      'William Laud definiu Escritura, Tradição e Experiência como as três fontes',
      'John Jewel formulou Escritura, Concílios e Papado como as três fontes reformadas',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'Teologia',
    explanation:
      'Richard Hooker articulou que Escritura, Tradição (da Igreja primitiva) e Razão são as fontes do conhecimento teológico anglicano. Essa "tripla fonte" (popularizada como "banco de três pernas" no século XX) é fundamental para entender o método teológico anglicano.',
  },
  {
    id: 47,
    question: 'O que declarou a Bula "Apostolicae Curae" (1896) do Papa Leão XIII sobre o anglicanismo?',
    options: [
      'Que as ordens sagradas anglicanas são "absolutamente nulas e completamente vazias"',
      'Que os anglicanos são cristãos válidos apesar das diferenças',
      'Que o anglicanismo é um ramo legítimo da Igreja Católica',
      'Que os bispos anglicanos perdem a sucessão apostólica ao se casarem',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'Teologia',
    explanation:
      'A Bula Apostolicae Curae (1896) declarou que as ordenações anglicanas são "absolutamente nulas e completamente vazias" (omnino irritas et prorsus nullas), por considerar que houve ruptura na intenção e na forma durante a Reforma. Os anglicanos contestam essa conclusão.',
  },
  {
    id: 48,
    question: 'O que é o ARCIC e qual sua relevância para o ecumenismo?',
    options: [
      'Comissão Internacional Anglicana-Católica Romana para diálogo ecumênico, iniciada em 1970',
      'Aliança Reformada de Igrejas Cristãs da Commonwealth',
      'Associação de Reitores e Clérigos Igrejas Cristãs na América',
      'Um tratado entre a Igreja da Inglaterra e a Igreja Ortodoxa do Oriente',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'História',
    explanation:
      'O ARCIC (Anglican-Roman Catholic International Commission) foi criado em 1970 após o encontro histórico entre o Arcebispo Michael Ramsey e o Papa Paulo VI em 1966. Produziu documentos de convergência sobre Eucaristia, ministério, autoridade e justificação pela fé.',
  },
  {
    id: 49,
    question: 'Qual foi a principal questão debatida na Resolução 1.10 da Conferência de Lambeth de 1998?',
    options: [
      'Homossexualidade e a visão anglicana da sexualidade humana',
      'A ordenação de mulheres ao episcopado',
      'A plena comunhão com igrejas luteranas',
      'A posição anglicana sobre o divórcio e novo casamento',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'História',
    explanation:
      'A Resolução 1.10 de Lambeth 1998 afirmou que a "prática homossexual é incompatível com a Escritura", gerando enorme controvérsia que levou à criação do GAFCON (2008) e às divisões atuais na Comunhão Anglicana.',
  },
  {
    id: 50,
    question: 'O que distingue a teologia eucarística anglicana da luterana (consubstanciação) e da reformada (memorialismo)?',
    options: [
      'Anglicanos afirmam presença real espiritual/misteriosa, sem definir o modo — rejeitando a transubstanciação romana e a consubstanciação luterana',
      'Anglicanos adotam a transubstanciação da mesma forma que o catolicismo romano',
      'Anglicanos são puro memorialismo como Zuínglio — a Ceia é apenas símbolo',
      'Anglicanos adotam a posição de Calvino da presença celestial, rejeitando qualquer presença real',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'Teologia',
    explanation:
      'A teologia eucarística anglicana é deliberadamente ambígua: afirma que Cristo está "verdadeiramente, realmente e substancialmente presente" (Artigo 28), mas rejeita "a doutrina romanista da transubstanciação" (Art. 28). Cranmer favorecia a presença espiritual real — "virtual" ou "celestial" — mediada pela fé.',
  },
  {
    id: 51,
    question: 'Qual foi a revisão do Book of Common Prayer de 1662 e qual seu contexto histórico?',
    options: [
      'Foi a revisão após a Restauração Stuart (Carlos II), que se tornou a versão canônica definitiva na Igreja da Inglaterra',
      'Foi a revisão do LOC durante o Commonwealth de Cromwell, mais puritana',
      'Foi a revisão mandada por Elizabeth I para estabelecer o Estabelecimento Elisabetano',
      'Foi a revisão solicitada pelos bispos no Concílio de Trento',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'História',
    explanation:
      'O BCP de 1662 foi revisado após a Restauração da monarquia sob Carlos II. O Ato de Uniformidade de 1662 tornou esse LOC obrigatório, levando a um grande cisma quando mais de 2.000 ministros puritanos ("os ejectados") se recusaram a conformar-se. O BCP de 1662 permanece o padrão litúrgico legal da Igreja da Inglaterra.',
  },
  {
    id: 52,
    question: 'O que é o GAFCON e por que foi criado em 2008?',
    options: [
      'Global Anglican Future Conference — rede de anglicanos conservadores criada em resposta à consagração de bispos em uniões homoafetivas',
      'Grupo Africano de Formação Cristã e Oração — iniciativa de evangelismo no continente africano',
      'Conferência Geral Anglicana para Comunhão e Novas Oportunidades — encontro quinquenal de toda a Comunhão',
      'Um movimento de renovação carismática anglicano iniciado na África do Sul',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'História',
    explanation:
      'O GAFCON (Global Anglican Future Conference) foi criado em 2008 em Jerusalém como resposta conservadora às políticas da Igreja Episcopal dos EUA (TEC) e da Igreja Anglicana do Canadá sobre homossexualidade. Representa principalmente igrejas do Hemisfério Sul (África, Ásia) e quebrou comunhão com muitas igrejas ocidentais.',
  },
  {
    id: 53,
    question: 'Qual foi o papel de Hugh Latimer e Nicholas Ridley na Reforma Anglicana?',
    options: [
      'Bispos reformadores queimados na fogueira em Oxford em 1555 durante o reinado de Maria Tudor',
      'Teólogos que escreveram os 39 Artigos sob Elizabeth I',
      'Missionários anglicanos que evangelizaram a América do Norte',
      'Arcebispos de York e Canterbury que reformaram o sistema canonical anglicano',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'Figuras Históricas',
    explanation:
      'Hugh Latimer e Nicholas Ridley foram queimados na fogueira em 16 de outubro de 1555 em Oxford. Latimer disse a Ridley: "Sê encorajado, Mestre Ridley; e age como um homem. Neste dia, pela graça de Deus, acenderemos tal vela na Inglaterra que, confio, nunca será apagada." São mártires venerados na tradição anglicana.',
  },
  {
    id: 54,
    question: 'O que diferencia a posição anglicana sobre o episcopado do catolicismo romano e do presbiterianismo?',
    options: [
      'Anglicanos afirmam o episcopado histórico como "bene esse" (bem da Igreja) ou "plene esse" (plenitude), sem definir dogmaticamente como "esse" (necessário à existência)',
      'Anglicanos rejeitam completamente o episcopado monárquico como não-bíblico',
      'Anglicanos adotam o episcopado papal com o Arcebispo de Cantuária como Papa anglicano',
      'Anglicanos são presbiterianos em sua estrutura, sem distinção real entre bispos e presbíteros',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'Teologia',
    explanation:
      'A posição anglicana sobre o episcopado é historicamente ambígua: para anglo-católicos, o episcopado é essencial (esse); para a maioria, é valioso (bene esse) mas não absolutamente necessário para a validade da Igreja. O Quadrilátero de Chicago-Lambeth pede o "episcopado histórico" para a unidade, sem defini-lo dogmaticamente.',
  },
  {
    id: 55,
    question: 'Qual foi a contribuição de George Herbert para o anglicanismo?',
    options: [
      'Poeta-sacerdote anglicano do século XVII cujos hinos e poemas moldam a espiritualidade anglicana até hoje',
      'Arcebispo de Cantuária que reformou o sistema de capelânias britânicas',
      'Teólogo que formulou a doutrina anglicana sobre a predestinação',
      'Compositor que criou o estilo musical do Evensong nas catedrais',
    ],
    correctIndex: 0,
    difficulty: 5,
    category: 'Figuras Históricas',
    explanation:
      'George Herbert (1593–1633) foi um dos maiores poetas da língua inglesa e sacerdote anglicano. Sua obra "The Temple" (1633) é um clássico da espiritualidade anglicana. Muitos de seus poemas foram transformados em hinos, incluindo "Teach me, my God and King" e "Let all the world in every corner sing".',
  },
]

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5

export function selectQuestions(total: number = 30): Question[] {
  const byDifficulty: Record<DifficultyLevel, Question[]> = {
    1: allQuestions.filter((q) => q.difficulty === 1),
    2: allQuestions.filter((q) => q.difficulty === 2),
    3: allQuestions.filter((q) => q.difficulty === 3),
    4: allQuestions.filter((q) => q.difficulty === 4),
    5: allQuestions.filter((q) => q.difficulty === 5),
  }

  // Distribution: 6 muito fácil, 8 fácil, 8 médio, 5 difícil, 3 dificílima
  const counts: Record<DifficultyLevel, number> = { 1: 6, 2: 8, 3: 8, 4: 5, 5: 3 }

  const selected: Question[] = []

  for (const level of [1, 2, 3, 4, 5] as DifficultyLevel[]) {
    const pool = shuffle([...byDifficulty[level]])
    selected.push(...pool.slice(0, Math.min(counts[level], pool.length)))
  }

  return shuffle(selected)
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
