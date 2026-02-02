import { SlideData } from "./types";

export const slides: SlideData[] = [
  // ========== TITLE ==========
  {
    id: 1,
    visual: "TITLE_SLIDE",
    title: "AI Ethics",
    subtitle: "Гуманитарный инструментарий для работы с AI",
    footer: "AI Mindset Lab · W26 · Workshop 03",
  },

  // ========== MALAKHOV VIDEOS ==========
  {
    id: 2,
    title: "4 лекции Александра Малахова",
    subtitle: "Глубокое погружение в AI этику — 4 видео по 2 часа",
    visual: "NETWORK_CONSTELLATION",
    youtubeVideos: [
      {
        id: "G6HdkWCOq4c",
        url: "https://www.youtube.com/watch?v=G6HdkWCOq4c",
        title: "1. Основы этики AI",
      },
      {
        id: "ZtKCg-wz228",
        url: "https://youtu.be/ZtKCg-wz228",
        title: "2. Политэкономия AI",
      },
      {
        id: "44QiJDOv8gc",
        url: "https://youtu.be/44QiJDOv8gc",
        title: "3. Форсайт vs Фикшн",
      },
      {
        id: "3i31k2nhApg",
        url: "https://youtu.be/3i31k2nhApg",
        title: "4. X-risks & Safety",
      },
    ],
    layout: "center",
    footer: "Рекомендуем посмотреть для глубокого погружения",
  },

  // ========== e/acc CAMP ==========
  {
    id: 3,
    title: "e/acc Camp",
    subtitle: "Effective Accelerationism — ускорить будущее",
    visual: "EACC_CAMP",
    content: [
      "Marc Andreessen — a16z, $50B OpenAI инвестиция (фев 2026)",
      "Beff Jezos — анонимный философ движения",
      "Sam Altman — OpenAI CEO, AGI к 2027",
      "Aaron Levie (Box), Mark Pincus (Zynga)",
    ],
    layout: "center",
    footer: "Философия: технологии решают все проблемы",
    contextNote: {
      text: "Trump administration официально поддерживает e/acc подход. Marc Andreessen получил доступ к Белому Дому. Движение набирает политическую силу.",
      source: "AI News 2026",
      type: "insight",
    },
  },

  // ========== DOOM CAMP ==========
  {
    id: 4,
    title: "DOOM Camp",
    subtitle: "AI Safety — притормозить и подумать",
    visual: "DOOM_CAMP",
    content: [
      "Eliezer Yudkowsky — MIRI, p(doom) > 50%",
      "Yoshua Bengio — сдвиг к cautious optimism",
      "Ilya Sutskever — SSI (Safe Superintelligence), $3B",
      "Tristan Harris — Center for Humane Technology",
    ],
    layout: "center",
    footer: "Философия: безопасность важнее скорости",
    contextNote: {
      text: "Yudkowsky написал книгу 'If Anyone Builds It, Everyone Dies' (NYT bestseller). Sutskever запустил SSI с $3B. Bengio изменил позицию с doom на осторожный оптимизм.",
      source: "AI Safety 2026",
      type: "insight",
    },
  },

  // ========== ETHICS SPECTRUM ==========
  {
    id: 5,
    title: "Ethics Spectrum",
    subtitle: "Где вы на карте?",
    visual: "ETHICS_SPECTRUM",
    content: [
      "X axis: ДИСТОПИЯ ↔ УТОПИЯ — как видите будущее?",
      "Y axis: ПРИТОРМОЗИТЬ ↔ ПОЕХАЛИ — что делать сейчас?",
      "4 квадранта: разные комбинации позиций",
      "Большинство людей — где-то между крайностями",
    ],
    layout: "center",
    footer: "Нет правильного ответа — есть ваша позиция",
    contextNote: {
      text: "DeepSeek за $6M достиг уровня ChatGPT. Если barrier to entry низкий, регуляция бессмысленна? Или наоборот — ещё важнее?",
      source: "DeepSeek Impact",
      type: "insight",
    },
  },

  // ========== CUI BONO ==========
  {
    id: 6,
    title: "Cui Bono?",
    subtitle: "Главный вопрос AI этики: кому выгодно?",
    visual: "CUI_BONO",
    steps: [
      {
        num: "1",
        title: "Follow the money",
        description: "OpenAI: non-profit → $300B company. Кто инвестирует?",
      },
      {
        num: "2",
        title: "Check incentives",
        description: "'AGI к 2027' — прогноз или pitch deck?",
      },
      {
        num: "3",
        title: "Who controls?",
        description: "Судьба человечества решается несколькими тысячами людей",
      },
    ],
    layout: "steps",
    footer: "Когда слышите про AI ethics — спросите: в чьих интересах?",
  },

  // ========== ALIGNMENT ==========
  {
    id: 7,
    title: "AI Alignment",
    subtitle: "Три типа выравнивания с человеческими ценностями",
    visual: "ALIGNMENT_TYPES",
    steps: [
      {
        num: "1",
        title: "Existential",
        description: "AI не уничтожит человечество",
      },
      {
        num: "2",
        title: "Purposeful",
        description: "AI помогает достигать твоих целей",
      },
      {
        num: "3",
        title: "Codified",
        description: "AI следует законам общества",
      },
    ],
    layout: "steps",
    footer: "Alignment = выравнивание целей AI и человека",
    contextNote: {
      text: "Если AI оптимизирует не ту метрику, результат катастрофичен. Пример: 'сделать всех счастливыми' → принудительно накачать дофамином.",
      source: "AI Alignment Research",
      type: "insight",
    },
  },

  // ========== VERVAEKE ==========
  {
    id: 8,
    title: "John Vervaeke: Align to God",
    subtitle: "Transcendent values как альтернатива profit",
    visual: "VERVAEKE_QUOTE",
    quote: {
      text: "If we don't align AI to something transcendent — to wisdom traditions, to the sacred — we will align it to whatever drives engagement and profit.",
      author: "John Vervaeke",
      role: "Cognitive Scientist, University of Toronto",
    },
    vervaekeVideo: "https://www.youtube.com/watch?v=54l8_ewcOlY",
    layout: "center",
    footer: "God = метафора transcendent values, не религия",
    contextNote: {
      text: "Vervaeke: alignment к 'God' = alignment к wisdom, meaning, flourishing. Что если метрика AI — human flourishing, а не прибыль?",
      source: "Awakening from the Meaning Crisis",
      type: "insight",
    },
  },

  // ========== DOGFOODING ==========
  {
    id: 9,
    title: "Dogfooding",
    subtitle: "Этический тест: я бы использовал это сам?",
    visual: "DOGFOODING",
    steps: [
      {
        num: "1",
        title: "Что это?",
        description: "Команда использует продукт на себе до релиза",
      },
      {
        num: "2",
        title: "Примеры",
        description: "Anthropic пишет docs через Claude. OpenAI тестирует o1 на research.",
      },
      {
        num: "3",
        title: "Красный флаг",
        description: "TikTok: 40 мин/день для детей сотрудников, без лимита для всех",
      },
    ],
    layout: "steps",
    footer: "Простой тест на честность: используешь ли ты это сам?",
  },

  // ========== CONVERSATION ==========
  {
    id: 10,
    title: "Conversation with Ideas",
    subtitle: "AI как партнёр в диалоге",
    visual: "CLAUDE_ARTIFACT",
    steps: [
      {
        num: "❌",
        title: "Не так",
        description: "'Напиши мне промпт' — получишь ответ, но не понимание",
      },
      {
        num: "✅",
        title: "А так",
        description: "'Помоги разобраться' — Socratic method, итеративное мышление",
      },
    ],
    qrCode: "https://claude.ai",
    layout: "steps",
    footer: "Этика = относиться к AI как к собеседнику",
  },

  // ========== PRACTICE ==========
  {
    id: 11,
    title: "Практика",
    subtitle: "Найдите свою позицию на карте",
    visual: "BREAKOUT_ROOMS",
    content: [
      "1. Пройдите интерактивный тест",
      "→ w26-ethics-test.netlify.app",
      "",
      "2. Обсудите с соседями:",
      "• Где вы на карте?",
      "• Почему именно там?",
      "• Что изменило бы вашу позицию?",
    ],
    layout: "center",
    footer: "Этика = не правила, а осознанный выбор",
  },

  // ========== QUOTE 1 ==========
  {
    id: 12,
    title: "О чуде AI",
    visual: "QUOTE_BLOCK",
    quote: {
      text: "Сама возможность существования AI — это настоящее чудо. Взять горсть песка, пропустить электричество и получить штуку, способную вобрать в себя все знания мира.",
      author: "Александр Малахов",
    },
    footer: "Базовая энергия должна быть воодушевление",
  },

  // ========== QUOTE 2 ==========
  {
    id: 13,
    title: "О контроле",
    visual: "QUOTE_BLOCK",
    quote: {
      text: "У человечества есть, в лучшем случае, право вето и шанс сделать несколько ключевых выборов. Ошибка может быть фатальной.",
      author: "Александр Малахов",
    },
    footer: "Решения сейчас определяют будущее",
  },

  // ========== CLOSING ==========
  {
    id: 14,
    title: "Takeaways",
    subtitle: "Что забрать с собой",
    visual: "CLOSING_SPARK",
    steps: [
      {
        num: "1",
        title: "Cui bono?",
        description: "Спрашивайте: кому выгодно?",
      },
      {
        num: "2",
        title: "Ваша позиция",
        description: "Знайте где вы на спектре",
      },
      {
        num: "3",
        title: "Диалог",
        description: "Этика = разговор, а не чеклист",
      },
    ],
    layout: "steps",
    footer: "Смотрите 4 лекции Малахова для глубокого погружения",
  },
];
