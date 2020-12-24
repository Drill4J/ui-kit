import { useState, useEffect, useRef } from 'react';

export function useHover() {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => setIsVisible(true);
  const handleMouseOut = () => setIsVisible(false);

  useEffect(() => {
    const node = ref.current;
    node?.addEventListener('mouseover', handleMouseOver);
    node?.addEventListener('mouseout', handleMouseOut);

    return () => {
      node?.removeEventListener('mouseover', handleMouseOver);
      node?.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref.current]);

  return { ref, isVisible };
}
