import React, { useEffect, useRef } from 'react';
import '../styles/ScrollStack.css';

const ScrollStack = ({
  children,
  itemDistance = 120,
  itemScale = 0.04,
  itemStackDistance = 40,
  stackPosition = "25%",
  scaleEndPosition = "15%",
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll('.scroll-stack-item');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((scrollY - containerTop + windowHeight) / (containerHeight + windowHeight), 0),
        1
      );

      items.forEach((item, index) => {
        const itemProgress = Math.min(progress * (items.length - index), 1);
        const scale = baseScale + (1 - baseScale) * itemProgress;
        const translateY = -itemProgress * itemDistance;
        const rotate = rotationAmount * itemProgress;
        const blur = blurAmount * (1 - itemProgress);

        item.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
        item.style.filter = `blur(${blur}px)`;
        item.style.zIndex = Math.floor(itemProgress * 100);
      });
    };

    if (useWindowScroll) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, rotationAmount, blurAmount, useWindowScroll]);

  const childrenArray = React.Children.toArray(children);
  return (
    <div ref={containerRef} className="scroll-stack-container">
      {childrenArray.map((child, index) => (
        <div key={index} className="scroll-stack-item">
          {child}
        </div>
      ))}
    </div>
  );
};

const ScrollStackItem = ({ children, itemClassName = '' }) => {
  return (
    <div className={`scroll-stack-item-content ${itemClassName}`}>
      {children}
    </div>
  );
};

export { ScrollStack, ScrollStackItem };
