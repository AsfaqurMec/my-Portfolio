import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectImageSlider = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const count = images?.length ?? 0;
  const safeIndex = count ? Math.min(index, count - 1) : 0;

  const go = useCallback(
    (delta) => {
      if (!count) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count]
  );

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (!count) return;
    setIndex((i) => Math.min(i, count - 1));
  }, [count]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const end = e.changedTouches[0].clientX;
    const diff = touchStart - end;
    if (Math.abs(diff) > 45) {
      if (diff > 0) go(1);
      else go(-1);
    }
    setTouchStart(null);
  };

  if (!count) return null;

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} image gallery`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative aspect-[16/10] md:aspect-[21/9] max-h-[min(70vh,520px)]">
        {images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`${title} — screenshot ${i + 1} of ${count}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
              i === safeIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-[2] pointer-events-none" />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-[3] w-11 h-11 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center border border-white/15 opacity-80 hover:opacity-100 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-[3] w-11 h-11 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center border border-white/15 opacity-80 hover:opacity-100 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="Next image"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-0 right-0 z-[3] flex justify-center gap-1.5 px-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === safeIndex ? 'w-8 bg-violet-400' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === safeIndex}
            />
          ))}
        </div>

        <div className="absolute top-4 right-4 z-[3] px-3 py-1 rounded-full bg-black/50 text-xs font-medium text-white/90 border border-white/10">
          {safeIndex + 1} / {count}
        </div>
      </div>
    </div>
  );
};

ProjectImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default ProjectImageSlider;
