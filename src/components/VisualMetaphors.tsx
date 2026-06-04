import React from "react";
import { motion } from "framer-motion";
import { VisualType, StepItem, QuoteData } from "../types";

interface VisualMetaphorProps {
  type: VisualType;
  sectionTitle?: string;
  steps?: StepItem[];
  quote?: QuoteData;
  lectureNumber?: number;
}

export const VisualMetaphor: React.FC<VisualMetaphorProps> = ({
  type,
  sectionTitle,
  quote,
  lectureNumber,
}) => {
  switch (type) {
    case "SECTION_DIVIDER":
      return (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 border-4 border-swiss-red rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 border-2 border-swiss-red/50 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <div className="text-6xl font-extrabold text-swiss-red z-10">
            {sectionTitle}
          </div>
        </motion.div>
      );

    case "EACC_CAMP":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-32 h-32 relative"
        >
          {/* Rocket going up */}
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            initial={{ y: 10 }}
            animate={{ y: [10, 0, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Rocket body */}
            <path
              d="M95,150 L95,80 Q100,70 105,80 L105,150 Z"
              fill="#DC2626"
              stroke="#171717"
              strokeWidth="2"
            />
            {/* Rocket nose */}
            <path
              d="M95,80 Q100,60 105,80"
              fill="#171717"
            />
            {/* Window */}
            <circle cx="100" cy="100" r="8" fill="#D4D4D4" />
            {/* Flames */}
            <motion.path
              d="M95,150 L90,170 L95,160 L100,175 L105,160 L110,170 L105,150"
              fill="#FFA500"
              animate={{ opacity: [0.5, 1, 0.5], scaleY: [0.8, 1.2, 0.8] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </motion.svg>
        </motion.div>
      );

    case "DOOM_CAMP":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-64 h-64 relative"
        >
          {/* Stop sign */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.polygon
              points="100,20 150,40 170,90 170,110 150,160 100,180 50,160 30,110 30,90 50,40"
              fill="#DC2626"
              stroke="#171717"
              strokeWidth="3"
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.02, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <text
              x="100"
              y="110"
              textAnchor="middle"
              fill="white"
              fontSize="28"
              fontWeight="bold"
              fontFamily="IBM Plex Mono, monospace"
            >
              STOP
            </text>
          </svg>
        </motion.div>
      );

    case "ETHICS_SPECTRUM":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl"
        >
          <svg viewBox="0 0 500 500" className="w-full h-96">
            {/* 2D Grid Background */}
            <rect x="50" y="50" width="400" height="400" fill="#F5F5F5" stroke="#171717" strokeWidth="2" />

            {/* Axes */}
            <line x1="50" y1="250" x2="450" y2="250" stroke="#737373" strokeWidth="2" />
            <line x1="250" y1="50" x2="250" y2="450" stroke="#737373" strokeWidth="2" />

            {/* X Axis Labels */}
            <text x="50" y="470" fontSize="12" fontWeight="bold" fill="#DC2626" textAnchor="start">ДИСТОПИЯ</text>
            <text x="450" y="470" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="end">УТОПИЯ</text>

            {/* Y Axis Labels */}
            <text x="30" y="55" fontSize="12" fontWeight="bold" fill="#FFA500" textAnchor="end" transform="rotate(-90 30 55)">ПОЕХАЛИ</text>
            <text x="30" y="450" fontSize="12" fontWeight="bold" fill="#DC2626" textAnchor="start" transform="rotate(-90 30 450)">ПРИТОРМОЗИТЬ</text>

            {/* Quadrant Labels */}
            <text x="150" y="150" fontSize="14" fill="#737373" textAnchor="middle">e/acc</text>
            <text x="350" y="150" fontSize="14" fill="#737373" textAnchor="middle">Optimistic</text>
            <text x="150" y="350" fontSize="14" fill="#737373" textAnchor="middle">Cautious</text>
            <text x="350" y="350" fontSize="14" fill="#737373" textAnchor="middle">Safety-first</text>

            {/* Animated sample points */}
            <motion.circle
              cx="350" cy="120" r="6" fill="#10B981"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="120" cy="150" r="6" fill="#FFA500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="380" cy="380" r="6" fill="#DC2626"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>
          <div className="text-center mt-4">
            <a
              href="https://w26-ethics-test.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-swiss-red text-white rounded-lg hover:bg-swiss-black transition-colors text-sm font-medium"
            >
              <span>📍</span>
              <span>Найти свою позицию: w26-ethics-test.netlify.app</span>
            </a>
          </div>
        </motion.div>
      );

    case "ALIGNMENT_TYPES":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-80 h-80"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Three concentric circles */}
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0 }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="55"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="30"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            {/* Center dot */}
            <circle cx="100" cy="100" r="5" fill="#DC2626" />
            {/* Labels */}
            <text x="100" y="25" textAnchor="middle" fontSize="10" fill="#737373">Existential</text>
            <text x="100" y="50" textAnchor="middle" fontSize="10" fill="#737373">Purposeful</text>
            <text x="100" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">AI</text>
          </svg>
        </motion.div>
      );

    case "VERVAEKE_QUOTE":
    case "QUOTE_BLOCK":
      if (!quote) return null;
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 border-l-4 border-swiss-red bg-swiss-gray/10 rounded-r-lg">
            <svg
              className="absolute top-4 left-4 w-8 h-8 text-swiss-red/20"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <blockquote className="text-lg md:text-xl italic text-swiss-black leading-relaxed pl-8">
              {quote.text}
            </blockquote>
            <div className="mt-4 pl-8">
              <p className="font-bold text-swiss-black">{quote.author}</p>
              {quote.role && (
                <p className="text-sm text-swiss-muted">{quote.role}</p>
              )}
            </div>
          </div>
        </motion.div>
      );

    case "DOGFOODING":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-64 h-64"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Dog bowl */}
            <ellipse cx="100" cy="120" rx="50" ry="15" fill="#D4D4D4" stroke="#171717" strokeWidth="2" />
            <path
              d="M50,120 L60,100 L140,100 L150,120"
              fill="#DC2626"
              stroke="#171717"
              strokeWidth="2"
            />
            {/* Dog icon */}
            <motion.g
              initial={{ y: -5 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <circle cx="100" cy="70" r="20" fill="#171717" />
              <circle cx="92" cy="65" r="3" fill="white" />
              <circle cx="108" cy="65" r="3" fill="white" />
              {/* Ears */}
              <ellipse cx="85" cy="60" rx="8" ry="15" fill="#171717" />
              <ellipse cx="115" cy="60" rx="8" ry="15" fill="#171717" />
            </motion.g>
            <text x="100" y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#171717">
              EAT YOUR OWN
            </text>
          </svg>
        </motion.div>
      );

    case "CLAUDE_ARTIFACT":
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-80 h-64"
        >
          <svg viewBox="0 0 300 200" className="w-full h-full">
            {/* Browser window */}
            <rect x="20" y="20" width="260" height="160" rx="8" fill="white" stroke="#171717" strokeWidth="2" />
            {/* Browser chrome */}
            <rect x="20" y="20" width="260" height="30" rx="8" fill="#D4D4D4" />
            <circle cx="35" cy="35" r="5" fill="#DC2626" />
            <circle cx="50" cy="35" r="5" fill="#FFA500" />
            <circle cx="65" cy="35" r="5" fill="#10B981" />
            {/* Content area with sparkles */}
            <motion.g
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <rect x="40" y="70" width="220" height="8" rx="4" fill="#DC2626" />
              <rect x="40" y="90" width="180" height="8" rx="4" fill="#737373" />
              <rect x="40" y="110" width="200" height="8" rx="4" fill="#737373" />
              <rect x="40" y="130" width="160" height="8" rx="4" fill="#737373" />
            </motion.g>
            {/* Sparkle effects */}
            <motion.circle
              cx="250"
              cy="70"
              r="3"
              fill="#DC2626"
              animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="240"
              cy="90"
              r="3"
              fill="#DC2626"
              animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        </motion.div>
      );

    case "CONVERSATION_IDEAS":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-80 h-80"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Two speech bubbles in conversation */}
            <motion.g
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Human bubble */}
              <rect x="20" y="60" width="80" height="40" rx="8" fill="#D4D4D4" stroke="#171717" strokeWidth="2" />
              <path d="M40,100 L35,110 L50,100 Z" fill="#D4D4D4" stroke="#171717" strokeWidth="2" />
              <text x="60" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#171717">YOU</text>
            </motion.g>
            <motion.g
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              {/* AI bubble */}
              <rect x="100" y="100" width="80" height="40" rx="8" fill="#DC2626" stroke="#171717" strokeWidth="2" />
              <path d="M160,100 L165,90 L150,100 Z" fill="#DC2626" stroke="#171717" strokeWidth="2" />
              <text x="140" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">AI</text>
            </motion.g>
            {/* Connection lines */}
            <motion.line
              x1="100"
              y1="80"
              x2="140"
              y2="120"
              stroke="#737373"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </motion.div>
      );

    case "MEDITATION":
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-64 h-64"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Meditation figure */}
            <motion.g
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Head */}
              <circle cx="100" cy="60" r="25" fill="#171717" />
              {/* Body in lotus position */}
              <ellipse cx="100" cy="120" rx="40" ry="30" fill="#171717" />
              {/* Arms */}
              <ellipse cx="70" cy="110" rx="20" ry="10" fill="#171717" transform="rotate(-20 70 110)" />
              <ellipse cx="130" cy="110" rx="20" ry="10" fill="#171717" transform="rotate(20 130 110)" />
            </motion.g>
            {/* Breath waves */}
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#DC2626"
              strokeWidth="1"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      );

    case "BREAKOUT_ROOMS":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-2xl"
        >
          <svg viewBox="0 0 400 200" className="w-full h-48">
            {/* Three rooms with people */}
            {[0, 1, 2].map((i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                {/* Room box */}
                <rect
                  x={20 + i * 130}
                  y="40"
                  width="100"
                  height="120"
                  rx="8"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                {/* People icons */}
                <circle cx={40 + i * 130} cy="80" r="12" fill="#171717" />
                <circle cx={70 + i * 130} cy="80" r="12" fill="#171717" />
                <circle cx={100 + i * 130} cy="80" r="12" fill="#171717" />
                {/* Chat bubbles */}
                <motion.circle
                  cx={55 + i * 130}
                  cy="120"
                  r="8"
                  fill="#DC2626"
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
      );

    case "TWO_CAMPS":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-3xl"
        >
          <svg viewBox="0 0 600 200" className="w-full h-48">
            {/* Left side - e/acc rocket */}
            <motion.g
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M95,150 L95,100 Q100,90 105,100 L105,150 Z" fill="#FFA500" stroke="#171717" strokeWidth="2" />
              <path d="M95,100 Q100,80 105,100" fill="#171717" />
              <circle cx="100" cy="110" r="6" fill="white" />
              <motion.path
                d="M95,150 L90,165 L95,155 L100,170 L105,155 L110,165 L105,150"
                fill="#DC2626"
                animate={{ opacity: [0.5, 1, 0.5], scaleY: [0.9, 1.1, 0.9] }}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
            </motion.g>
            <text x="100" y="190" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFA500">e/acc</text>

            {/* Center - vs */}
            <text x="300" y="105" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#737373">VS</text>
            <line x1="250" y1="100" x2="350" y2="100" stroke="#737373" strokeWidth="2" strokeDasharray="5,5" />

            {/* Right side - DOOM stop sign */}
            <motion.polygon
              points="500,50 530,60 545,85 545,115 530,140 500,150 470,140 455,115 455,85 470,60"
              fill="#DC2626"
              stroke="#171717"
              strokeWidth="2"
              initial={{ scale: 0.95 }}
              animate={{ scale: [0.95, 1.02, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <text x="500" y="107" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">STOP</text>
            <text x="500" y="190" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#DC2626">SAFETY</text>
          </svg>
        </motion.div>
      );

    case "CUI_BONO":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-80 h-80"
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Power pyramid */}
            <motion.path
              d="M150,50 L230,150 L70,150 Z"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
            <motion.path
              d="M120,120 L180,120 L150,80 Z"
              fill="#DC2626"
              fillOpacity="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            {/* Money symbols */}
            <motion.text
              x="150" y="75" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#171717"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >$$$</motion.text>
            {/* Arrows pointing up */}
            <motion.path
              d="M80,200 L150,120"
              stroke="#737373"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.path
              d="M220,200 L150,120"
              stroke="#737373"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <text x="150" y="270" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#171717">CUI BONO?</text>
          </svg>
        </motion.div>
      );

    case "QR_CODE_TEST":
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-64 h-64 flex items-center justify-center"
        >
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://w26-ethics-test.netlify.app"
            alt="QR Code для теста"
            className="w-full h-full border-4 border-swiss-red rounded-lg"
          />
        </motion.div>
      );

    case "CONTEXT_HORIZON":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-80 h-80"
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Concentric circles - expanding context */}
            <motion.circle
              cx="150" cy="150" r="30"
              fill="none" stroke="#DC2626" strokeWidth="3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0 }}
            />
            <motion.circle
              cx="150" cy="150" r="60"
              fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ delay: 0.2 }}
            />
            <motion.circle
              cx="150" cy="150" r="90"
              fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.4 }}
            />
            <motion.circle
              cx="150" cy="150" r="120"
              fill="none" stroke="#DC2626" strokeWidth="1" strokeDasharray="5,5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ delay: 0.6 }}
            />
            {/* Center dot */}
            <circle cx="150" cy="150" r="8" fill="#DC2626" />
            <text x="150" y="260" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#171717">
              Expanding Context
            </text>
          </svg>
        </motion.div>
      );

    case "NETWORK_CONSTELLATION":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl"
        >
          <svg viewBox="0 0 800 200" className="w-full h-48">
            {/* 4 connected nodes for 4 lectures */}
            {[0, 1, 2, 3].map((i) => (
              <motion.g key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                <circle cx={100 + i * 180} cy="100" r="40" fill="none" stroke="#DC2626" strokeWidth="2" />
                <circle cx={100 + i * 180} cy="100" r="30" fill="#DC2626" fillOpacity="0.1" />
                <text x={100 + i * 180} y="107" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#DC2626">{i + 1}</text>
                {i < 3 && (
                  <line
                    x1={140 + i * 180} y1="100"
                    x2={100 + (i + 1) * 180 - 40} y2="100"
                    stroke="#737373" strokeWidth="2" strokeDasharray="5,5"
                  />
                )}
              </motion.g>
            ))}
          </svg>
        </motion.div>
      );

    case "PROMPT_STRUCTURE":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-3xl"
        >
          <svg viewBox="0 0 600 180" className="w-full h-44">
            {/* Left: Foresight - clean checklist */}
            <motion.g
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <rect x="40" y="30" width="200" height="120" rx="8" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2" />
              <text x="140" y="60" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10B981">ФОРСАЙТ</text>
              {/* Checklist items */}
              <g fill="#171717" fontSize="11">
                <text x="60" y="85">✓ Данные</text>
                <text x="60" y="105">✓ Метрики</text>
                <text x="60" y="125">✓ Вероятности</text>
                <text x="130" y="85">✓ Track record</text>
                <text x="130" y="105">✓ Falsifiable</text>
                <text x="130" y="125">✓ Uncertainty</text>
              </g>
            </motion.g>

            {/* Center VS */}
            <text x="300" y="100" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#737373">VS</text>

            {/* Right: Fiction - warning style */}
            <motion.g
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <rect x="360" y="30" width="200" height="120" rx="8" fill="#DC2626" fillOpacity="0.1" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
              <text x="460" y="60" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#DC2626">ФИКШН</text>
              {/* Warning items */}
              <g fill="#737373" fontSize="11">
                <text x="380" y="85">⚠ Нарративы</text>
                <text x="380" y="105">⚠ Hype</text>
                <text x="380" y="125">⚠ Pitch deck</text>
                <text x="470" y="85">⚠ Cherry-pick</text>
                <text x="470" y="105">⚠ Incentives</text>
                <text x="470" y="125">⚠ Wishful</text>
              </g>
            </motion.g>
          </svg>
        </motion.div>
      );

    case "TITLE_SLIDE":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6"
        >
          <img
            src="/logo_rb.png"
            alt="AI Mindset Lab"
            className="w-48 h-auto"
          />
        </motion.div>
      );

    case "LECTURE_CARD":
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-32 h-32 relative"
        >
          <motion.div
            className="absolute inset-0 border-4 border-swiss-red rounded-2xl flex items-center justify-center bg-swiss-red/5"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl font-black text-swiss-red">{lectureNumber || sectionTitle}</span>
          </motion.div>
        </motion.div>
      );

    case "ETHICAL_THEORIES":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-3xl"
        >
          <svg viewBox="0 0 600 200" className="w-full h-48">
            {/* Three columns for three theories */}
            {[
              { x: 100, label: "Утилитаризм", color: "#FFA500", icon: "📊" },
              { x: 300, label: "Деонтология", color: "#DC2626", icon: "⚖️" },
              { x: 500, label: "Добродетель", color: "#10B981", icon: "🌟" },
            ].map((theory, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <rect x={theory.x - 60} y="40" width="120" height="100" rx="8" fill="none" stroke={theory.color} strokeWidth="2" />
                <text x={theory.x} y="95" textAnchor="middle" fontSize="28">{theory.icon}</text>
                <text x={theory.x} y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#171717">{theory.label}</text>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      );

    case "BIAS_JUSTICE":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-80 h-80"
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Scale of justice with bias */}
            <motion.g
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ transformOrigin: "150px 80px" }}
            >
              <line x1="80" y1="80" x2="220" y2="80" stroke="#171717" strokeWidth="4" />
              <line x1="150" y1="40" x2="150" y2="80" stroke="#171717" strokeWidth="4" />
              {/* Left plate */}
              <circle cx="80" cy="150" r="40" fill="none" stroke="#DC2626" strokeWidth="2" />
              <line x1="80" y1="80" x2="80" y2="110" stroke="#737373" strokeWidth="2" />
              {/* Right plate */}
              <circle cx="220" cy="130" r="40" fill="none" stroke="#10B981" strokeWidth="2" />
              <line x1="220" y1="80" x2="220" y2="90" stroke="#737373" strokeWidth="2" />
            </motion.g>
            <text x="150" y="250" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#171717">Algorithmic Bias</text>
          </svg>
        </motion.div>
      );

    case "GEOPOLITICS":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-3xl"
        >
          <svg viewBox="0 0 600 200" className="w-full h-48">
            {/* US vs China */}
            <motion.g
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <rect x="50" y="60" width="150" height="80" rx="8" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="2" />
              <text x="125" y="110" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#3B82F6">USA</text>
              <text x="125" y="130" textAnchor="middle" fontSize="12" fill="#737373">80%</text>
            </motion.g>
            <text x="300" y="105" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#737373">AI RACE</text>
            <motion.g
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <rect x="400" y="60" width="150" height="80" rx="8" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="2" />
              <text x="475" y="110" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#DC2626">China</text>
              <text x="475" y="130" textAnchor="middle" fontSize="12" fill="#737373">19%</text>
            </motion.g>
          </svg>
        </motion.div>
      );

    case "XRISK_PYRAMID":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-80 h-80"
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Danger pyramid */}
            <motion.path
              d="M150,40 L250,220 L50,220 Z"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
            <motion.path
              d="M150,40 L250,220 L50,220 Z"
              fill="#DC2626"
              fillOpacity="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            {/* Warning icon */}
            <motion.text
              x="150" y="130" textAnchor="middle" fontSize="48"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >⚠️</motion.text>
            {/* Levels */}
            <line x1="80" y1="160" x2="220" y2="160" stroke="#737373" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="100" y1="190" x2="200" y2="190" stroke="#737373" strokeWidth="1" strokeDasharray="3,3" />
            <text x="150" y="270" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#171717">X-RISK</text>
          </svg>
        </motion.div>
      );

    // Default cases for other types
    case "CLOSING_SPARK":
    case "CHECKIN_MOOD":
    case "TIMELINE_2026":
    case "BRIDGE":
    default:
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-48 h-48 flex items-center justify-center"
        >
          <div className="w-32 h-32 border-4 border-swiss-red rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-swiss-red rounded-full" />
          </div>
        </motion.div>
      );
  }
};
