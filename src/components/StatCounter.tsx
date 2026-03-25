import { useEffect, useRef, useState } from 'react';

type StatCounterProps = {
  target: number;
  label: string;
};

export function StatCounter({ target, label }: StatCounterProps) {
  const [value, setValue] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = articleRef.current;
    if (!el || target <= 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let current = 0;
        const duration = 900;
        const stepTime = Math.max(20, Math.floor(duration / target));
        const timer = window.setInterval(() => {
          current += 1;
          setValue(current);
          if (current >= target) window.clearInterval(timer);
        }, stepTime);

        observer.unobserve(el);
      },
      { threshold: 0.65 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <article ref={articleRef} role="listitem">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
