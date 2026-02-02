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
    subtitle: "Effective Accelerationism — ускорить AI развитие максимально быстро",
    visual: "EACC_CAMP",
    content: [
      "Marc Andreessen (a16z) — главный идеолог, доступ к Белому Дому при Trump admin",
      "Sam Altman (OpenAI) — 'AGI к 2027', $300B оценка компании",
      "Beff Jezos — анонимный философ движения, Silicon Valley insider",
      "Aaron Levie (Box), Mark Pincus (Zynga) — tech founders за ускорение",
    ],
    layout: "center",
    footer: "Философия: технологии решают проблемы быстрее, чем создают новые",
    contextNote: {
      text: "Trump administration официально поддерживает e/acc. Федеральная преэмпция штатных AI законов. Регуляция = тормоз инноваций. США должны победить в AI гонке любой ценой.",
      source: "Political Context 2026",
      type: "insight",
    },
  },

  // ========== DOOM CAMP ==========
  {
    id: 4,
    title: "AI Safety Camp",
    subtitle: "Притормозить и подумать — мы не понимаем что создаём",
    visual: "DOOM_CAMP",
    content: [
      "Eliezer Yudkowsky (MIRI) — p(doom) > 50%, написал 'If Anyone Builds It, Everyone Dies'",
      "Yoshua Bengio — Turing Award, недавно сдвинулся к cautious optimism",
      "Ilya Sutskever — ушёл из OpenAI, запустил SSI с $3B на alignment",
      "Tristan Harris — Center for Humane Technology, социальные риски AI",
    ],
    layout: "center",
    footer: "Философия: безопасность важнее скорости, alignment problem не решён",
    contextNote: {
      text: "International AI Safety Report: 78% исследователей требуют регуляции. EU AI Act задержан до 2027. Center for AI Safety: 'Риск вымирания от AI = глобальный приоритет наравне с пандемиями и ядерной войной'.",
      source: "AI Safety 2026",
      type: "insight",
    },
  },

  // ========== ETHICS SPECTRUM ==========
  {
    id: 5,
    title: "Ethics Spectrum",
    subtitle: "Где вы на 2D карте AI этики?",
    visual: "ETHICS_SPECTRUM",
    content: [
      "X axis: ДИСТОПИЯ ↔ УТОПИЯ — как вы видите будущее с AI?",
      "Y axis: ПРИТОРМОЗИТЬ ↔ ПОЕХАЛИ — что делать прямо сейчас?",
      "4 квадранта: e/acc (оптимизм + скорость), Safety-first (оптимизм + осторожность), Cautious (пессимизм + осторожность), Pragmatic (между)",
      "Большинство людей — где-то в центре, но склоняются в одну сторону",
    ],
    layout: "center",
    footer: "Нет правильного ответа — есть ваша позиция и reasoning за ней",
    contextNote: {
      text: "DeepSeek за $6M достиг уровня ChatGPT o1. Nvidia потеряла $600B за день. Вопрос: если barrier to entry упал, регуляция бессмысленна или ещё важнее?",
      source: "DeepSeek Impact 2025",
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
        description: "OpenAI: non-profit → $300B company. Инвесторы: Microsoft, a16z, Khosla. Их интересы = интересы человечества?",
      },
      {
        num: "2",
        title: "Check incentives",
        description: "Sam Altman: 'AGI к 2027' — научный прогноз или pitch для следующего раунда? Musk: 'AGI к 2026' перед $20B raise xAI.",
      },
      {
        num: "3",
        title: "Who decides?",
        description: "Судьба человечества решается несколькими тысячами людей в нескольких компаниях. Остальные 8 млрд — статисты.",
      },
    ],
    layout: "steps",
    footer: "Малахов: 'Когда слышите про AI ethics — спросите: в чьих интересах это решение?'",
  },

  // ========== ALIGNMENT ==========
  {
    id: 7,
    title: "AI Alignment",
    subtitle: "Три типа выравнивания AI с человеческими ценностями",
    visual: "ALIGNMENT_TYPES",
    steps: [
      {
        num: "1",
        title: "Existential Alignment",
        description: "AI не уничтожит человечество. Базовый уровень — убедиться что модель не оптимизирует extinction.",
      },
      {
        num: "2",
        title: "Purposeful Alignment",
        description: "AI помогает достигать твоих целей, а не своих. Твой ассистент работает на тебя, не на OpenAI.",
      },
      {
        num: "3",
        title: "Codified Alignment",
        description: "AI следует законам и нормам общества. Compliance, регуляция, аудит алгоритмов.",
      },
    ],
    layout: "steps",
    footer: "Alignment problem: если AI оптимизирует не ту метрику, результат катастрофичен",
    contextNote: {
      text: "Пример misalignment: 'Сделай всех счастливыми' → принудительно накачать дофамином. Формально цель достигнута. Поэтому alignment — центральная проблема AI safety.",
      source: "AI Alignment Research",
      type: "insight",
    },
  },

  // ========== VERVAEKE ==========
  {
    id: 8,
    title: "John Vervaeke: Align to God",
    subtitle: "Transcendent values как альтернатива profit metrics",
    visual: "VERVAEKE_QUOTE",
    quote: {
      text: "If we don't align AI to something transcendent — to wisdom traditions, to the sacred — we will align it to whatever drives engagement and profit.",
      author: "John Vervaeke",
      role: "Cognitive Scientist, University of Toronto",
    },
    vervaekeVideo: "https://www.youtube.com/watch?v=54l8_ewcOlY",
    layout: "center",
    footer: "God ≠ религия. God = метафора для wisdom, meaning, human flourishing",
    contextNote: {
      text: "Vervaeke спрашивает: сейчас AI aligned к engagement (TikTok), profit (OpenAI $300B), geopolitics (US vs China). Что если метрика = human flourishing? Как это измерить? Кто решает?",
      source: "Awakening from the Meaning Crisis",
      type: "insight",
    },
  },

  // ========== DOGFOODING ==========
  {
    id: 9,
    title: "Dogfooding",
    subtitle: "Простой этический тест: я бы использовал это сам?",
    visual: "DOGFOODING",
    steps: [
      {
        num: "1",
        title: "Что это?",
        description: "Eating your own dog food — команда использует продукт на себе до релиза. Если боишься использовать — не выпускай.",
      },
      {
        num: "2",
        title: "Хорошие примеры",
        description: "Anthropic пишет документацию через Claude. OpenAI тестирует o1 на своих research задачах. DeepMind проверяет Gemini на code review.",
      },
      {
        num: "3",
        title: "Красный флаг",
        description: "ByteDance: TikTok ограничен до 40 мин/день для детей сотрудников, но без лимита для всех остальных. Знают о рисках, но не применяют стандарты.",
      },
    ],
    layout: "steps",
    footer: "Простой тест на честность: используешь ли ты это сам и для своих детей?",
  },

  // ========== PRACTICE ==========
  {
    id: 10,
    title: "Практика: найди свою позицию",
    subtitle: "Интерактивный тест — пройдите прямо сейчас",
    visual: "ETHICS_SPECTRUM",
    qrCode: "https://w26-ethics-test.netlify.app",
    content: [
      "Сканируйте QR-код или откройте ссылку",
      "Ответьте на 8 вопросов про AI этику",
      "Увидьте свою позицию на 2D карте в реальном времени",
      "Сравните с позициями других участников",
    ],
    layout: "center",
    footer: "w26-ethics-test.netlify.app",
  },

  // ========== QUOTE 1 ==========
  {
    id: 11,
    title: "О чуде AI",
    visual: "QUOTE_BLOCK",
    quote: {
      text: "Сама возможность существования AI — это настоящее чудо. Взять горсть песка, пропустить электричество и получить штуку, способную вобрать в себя все знания мира. При всех этических дилеммах — базовая энергия должна быть интерес и воодушевление.",
      author: "Александр Малахов",
    },
    footer: "Это самое важное, что случается при нашей жизни",
  },

  // ========== QUOTE 2 ==========
  {
    id: 12,
    title: "О контроле",
    visual: "QUOTE_BLOCK",
    quote: {
      text: "У человечества есть, в лучшем случае, право вето и шанс сделать несколько ключевых выборов. Ошибка может быть фатальной. Решения сейчас могут определить не только XXI век, но всё дальнейшее развитие.",
      author: "Александр Малахов",
    },
    footer: "Lock-in effect: ценности победившие сейчас, могут застыть навсегда",
  },

  // ========== CLOSING ==========
  {
    id: 13,
    title: "Takeaways",
    subtitle: "Что забрать с собой",
    visual: "CLOSING_SPARK",
    steps: [
      {
        num: "1",
        title: "Cui bono?",
        description: "При любом AI решении спрашивайте: кому выгодно? Какие incentives?",
      },
      {
        num: "2",
        title: "Ваша позиция",
        description: "Знайте где вы на спектре e/acc ↔ Safety и почему именно там",
      },
      {
        num: "3",
        title: "Гуманитарный инструментарий",
        description: "Философия не устаревает. Аристотель актуален как 2300 лет назад.",
      },
    ],
    layout: "steps",
    footer: "4 лекции Малахова — для глубокого погружения в каждую тему",
  },
];
