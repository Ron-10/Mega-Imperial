import React, { useEffect, useState, useCallback } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  height: string;
  children: React.ReactNode;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, height, children, overlay = true }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setOffsetY(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offsetY * 0.5}px)`,
          willChange: 'transform'
        }}
      />
      {overlay && <div className="absolute inset-0 bg-black/50" />}
      {children}
    </div>
  );
};

export default ParallaxSection;