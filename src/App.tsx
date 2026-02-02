import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "./slidesData";
import { VisualMetaphor } from "./components/VisualMetaphors";

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showTOC, setShowTOC] = useState(false);
  const [hoveredContextNote, setHoveredContextNote] = useState(false);

  const slideCount = slides.length;
  const currentSlide = slides[currentSlideIndex];
  const isSectionDivider = currentSlide.visual === "SECTION_DIVIDER";

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < slideCount - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, slideCount]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlideIndex(index);
    setShowTOC(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNextSlide();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevSlide();
      }
      if (e.key === "t" || e.key === "T") {
        setShowTOC((prev) => !prev);
      }
      if (e.key === "Escape") {
        setShowTOC(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="min-h-screen h-screen w-full bg-white font-mono text-swiss-black overflow-hidden flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-swiss-gray/30 z-50">
        <motion.div
          className="absolute top-0 left-0 h-full bg-swiss-red"
          animate={{
            width: `${((currentSlideIndex + 1) / slideCount) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* TOC Button */}
      <button
        onClick={() => setShowTOC(true)}
        className="fixed top-4 right-4 z-40 p-2 bg-white/95 backdrop-blur-sm rounded-lg border border-swiss-gray hover:border-swiss-red transition-all shadow-sm group"
        title="Содержание (T)"
      >
        <svg
          className="w-5 h-5 text-swiss-muted group-hover:text-swiss-red transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Context Note Popup */}
      {currentSlide.contextNote && (
        <div
          className="fixed top-4 left-4 z-40"
          onMouseEnter={() => setHoveredContextNote(true)}
          onMouseLeave={() => setHoveredContextNote(false)}
        >
          <motion.button
            className="p-2.5 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-swiss-red/30 hover:border-swiss-red transition-all shadow-md group relative"
            title="Контекст спикера"
          >
            <svg
              className="w-6 h-6 text-swiss-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.button>

          <AnimatePresence>
            {hoveredContextNote && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-full left-0 mt-3 w-80 p-4 bg-white border-2 border-swiss-red/20 rounded-xl shadow-xl z-50"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full uppercase tracking-wide bg-swiss-red/10 text-swiss-red">
                    {currentSlide.contextNote.type === "quote"
                      ? "Цитата"
                      : currentSlide.contextNote.type === "tip"
                        ? "Совет"
                        : currentSlide.contextNote.type === "insight"
                          ? "Инсайт"
                          : "Контекст"}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 self-stretch bg-swiss-red rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-sm text-swiss-black leading-relaxed font-medium">
                      {currentSlide.contextNote.text}
                    </p>
                    {currentSlide.contextNote.source && (
                      <p className="text-xs text-swiss-muted mt-3 pt-2 border-t border-swiss-gray/30">
                        — {currentSlide.contextNote.source}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 pt-14 pb-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl flex flex-col items-center text-center max-h-full overflow-hidden"
          >
            {/* Visual Metaphor */}
            <div className={`mb-4 flex items-center justify-center ${isSectionDivider ? "min-h-[30vh]" : ""}`}>
              <VisualMetaphor
                type={currentSlide.visual}
                sectionTitle={currentSlide.sectionTitle}
                steps={currentSlide.steps}
                quote={currentSlide.quote}
                lectureNumber={currentSlide.lectureNumber}
              />
            </div>

            {/* Title */}
            {!isSectionDivider && (
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2">
                {currentSlide.title}
              </h1>
            )}

            {/* Section Divider Title & Subtitle */}
            {isSectionDivider && (
              <>
                <h2 className="text-2xl font-bold text-swiss-black mt-2">
                  {currentSlide.title}
                </h2>
                {currentSlide.subtitle && (
                  <p className="text-base text-swiss-muted mt-1">
                    {currentSlide.subtitle}
                  </p>
                )}
                {currentSlide.timing && (
                  <p className="text-sm text-swiss-red mt-2 font-medium">
                    {currentSlide.timing}
                  </p>
                )}
              </>
            )}

            {/* Subtitle */}
            {!isSectionDivider && currentSlide.subtitle && (
              <h2 className="text-base md:text-lg text-swiss-muted mb-4">
                {currentSlide.subtitle}
              </h2>
            )}

            {/* Content */}
            {currentSlide.content && !isSectionDivider && (
              <ul className="space-y-2 max-w-2xl text-left">
                {currentSlide.content.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-swiss-red mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* YouTube Videos Grid */}
            {currentSlide.youtubeVideos && (
              <div className="w-full max-w-4xl grid grid-cols-2 gap-4 mt-6">
                {currentSlide.youtubeVideos.map((video, idx) => (
                  <motion.a
                    key={idx}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="group relative overflow-hidden rounded-lg border-2 border-swiss-gray hover:border-swiss-red transition-all"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-xs text-white font-medium">{video.title}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {/* Vervaeke Video */}
            {currentSlide.vervaekeVideo && (
              <motion.a
                href={currentSlide.vervaekeVideo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-swiss-red text-white rounded-lg hover:bg-swiss-black transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-sm font-medium">Смотреть: Awakening from the Meaning Crisis</span>
              </motion.a>
            )}

            {/* QR Code */}
            {currentSlide.qrCode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex flex-col items-center gap-3"
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentSlide.qrCode)}`}
                  alt="QR Code"
                  className="w-48 h-48 border-4 border-swiss-red rounded-lg"
                />
                <p className="text-sm text-swiss-muted">Сканируй или открой: {currentSlide.qrCode}</p>
              </motion.div>
            )}

            {/* Steps */}
            {currentSlide.steps && currentSlide.visual !== "SECTION_DIVIDER" && (
              <div className="w-full max-w-2xl space-y-2 text-left mt-4">
                {currentSlide.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className="flex items-start gap-4 p-3 border-b border-swiss-gray/50"
                  >
                    <span className="text-xl font-extrabold text-swiss-red min-w-[50px]">
                      {step.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold">{step.title}</div>
                      {step.description && (
                        <div className="text-xs text-swiss-muted mt-1">
                          {step.description}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Footer */}
            {currentSlide.footer && (
              <p className="text-xs text-swiss-muted mt-4 pt-3 border-t border-swiss-gray max-w-2xl">
                {currentSlide.footer}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Dots */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-1 z-40 max-w-[80vw] overflow-x-auto py-1 px-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-1 h-1 rounded-full transition-all duration-300 flex-shrink-0 ${
              idx === currentSlideIndex
                ? "bg-swiss-red scale-150"
                : "bg-swiss-gray hover:bg-swiss-muted"
            }`}
          />
        ))}
      </div>

      {/* Side Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-40">
        <button
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0}
          className="p-2 rounded-full border border-swiss-gray hover:border-swiss-black transition-all disabled:opacity-20"
        >
          <svg className="w-4 h-4 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <div className="text-xs text-swiss-muted font-mono">
          {String(currentSlideIndex + 1).padStart(2, "0")}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === slideCount - 1}
          className="p-2 rounded-full border-2 border-swiss-red hover:bg-swiss-red hover:text-white transition-all disabled:opacity-20"
        >
          <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent pt-4 pb-2 px-4 z-30">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-swiss-red text-white text-[10px] font-bold px-2 py-0.5 rounded">
              W26-WS03
            </span>
            <span className="text-xs text-swiss-muted">AI Ethics</span>
          </div>
          <div className="text-xs text-swiss-muted hidden md:block">
            [T] Contents · [←→] Navigate
          </div>
          <div className="text-xs text-swiss-muted">
            {currentSlideIndex + 1} / {slideCount}
          </div>
        </div>
      </div>

      {/* TOC Sidebar */}
      <AnimatePresence>
        {showTOC && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setShowTOC(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-white border-l border-swiss-gray z-[60] p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Contents</h3>
                <button
                  onClick={() => setShowTOC(false)}
                  className="p-2 hover:bg-swiss-gray/20 rounded"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-full text-left py-2 px-3 border-l-4 transition-all hover:bg-swiss-gray/10 rounded-r text-sm ${
                      idx === currentSlideIndex
                        ? "border-swiss-red text-swiss-red bg-swiss-gray/5 font-medium"
                        : "border-transparent text-swiss-muted"
                    }`}
                  >
                    <span className="opacity-50 mr-2">{slide.id}.</span>
                    {slide.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
