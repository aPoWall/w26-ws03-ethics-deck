export type VisualType =
  | 'SECTION_DIVIDER'
  | 'TITLE_SLIDE'
  | 'LECTURE_CARD'
  | 'ETHICS_SPECTRUM'
  | 'EACC_CAMP'
  | 'DOOM_CAMP'
  | 'TWO_CAMPS'
  | 'CUI_BONO'
  | 'ALIGNMENT_TYPES'
  | 'VERVAEKE_QUOTE'
  | 'QUOTE_BLOCK'
  | 'MEDITATION'
  | 'BREAKOUT_ROOMS'
  | 'CONTEXT_HORIZON'
  | 'PROMPT_STRUCTURE'
  | 'CLOSING_SPARK'
  | 'CHECKIN_MOOD'
  | 'CLAUDE_ARTIFACT'
  | 'DOGFOODING'
  | 'CONVERSATION_IDEAS'
  | 'TIMELINE_2026'
  | 'NETWORK_CONSTELLATION'
  | 'QR_CODE_TEST'
  | 'BRIDGE'
  | 'ETHICAL_THEORIES'
  | 'BIAS_JUSTICE'
  | 'GEOPOLITICS'
  | 'XRISK_PYRAMID';

export type SlideLayout = 'center' | 'split' | 'text' | 'stats' | 'steps' | 'comparison' | 'two-column';

export interface StatItem {
  value: string | number;
  label: string;
  color?: 'red' | 'black' | 'muted';
  suffix?: string;
}

export interface StepItem {
  num: string;
  title: string;
  description?: string;
}

export interface QuoteData {
  text: string;
  author: string;
  role?: string;
}

export interface ContextNote {
  text: string;
  source?: string;
  type?: 'quote' | 'intro' | 'tip' | 'insight';
}

export interface PromptBlock {
  title: string;
  prompt: string;
  description?: string;
}

export interface YouTubeVideo {
  id: string;
  url: string;
  title: string;
  thumbnail?: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  visual: VisualType;
  visualDescription?: string;
  layout?: SlideLayout;
  content?: string[];
  stats?: StatItem[];
  steps?: StepItem[];
  quote?: QuoteData;
  sectionTitle?: string;
  timing?: string;
  footer?: string;
  contextNote?: ContextNote;
  promptBlock?: PromptBlock;
  youtubeVideos?: YouTubeVideo[];
  qrCode?: string;
  vervaekeVideo?: string;
  lectureNumber?: number;
  lectureTitle?: string;
}
