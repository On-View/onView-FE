"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScreenSize } from "@/hooks/use-screen-size";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    large?: number;
  };
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
}

export default function Carousel({
  children,
  className,
  itemsPerView = {
    mobile: 1,
    tablet: 3,
    desktop: 5,
    large: 6,
  },
  autoplay = false,
  autoplayInterval = 5000,
  showArrows = true,
  showDots = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();

  // Determine items to show based on screen size
  const getItemsToShow = () => {
    switch (screenSize) {
      case "mobile":
        return itemsPerView.mobile || 1;
      case "tablet":
        return itemsPerView.tablet || 3;
      case "desktop":
        return itemsPerView.desktop || 5;
      case "large":
        return itemsPerView.large || 6;
      default:
        return 4;
    }
  };

  const actualItemsToShow = Math.min(getItemsToShow(), children.length);

  // Calculate the maximum valid index
  const maxIndex = Math.max(0, children.length - actualItemsToShow);

  const next = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        next();
      } else {
        setCurrentIndex(0);
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, currentIndex, maxIndex]);

  // Recalculate currentIndex when screen size changes to avoid empty slides
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [screenSize, maxIndex, currentIndex]);

  // Calculate the width of each item as a percentage
  const itemWidth = 100 / actualItemsToShow;

  return (
    <div className={cn("relative", className)}>
      <div
        ref={carouselRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}%)`,
            width: `${children.length * itemWidth}%`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${itemWidth}%`, padding: "0 8px" }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && children.length > actualItemsToShow && (
        <>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md z-10",
              currentIndex <= 0 && "opacity-50 cursor-not-allowed"
            )}
            onClick={prev}
            disabled={currentIndex <= 0}
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md z-10",
              currentIndex >= maxIndex && "opacity-50 cursor-not-allowed"
            )}
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {showDots && children.length > actualItemsToShow && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === index ? "bg-orange-500 w-4" : "bg-gray-300"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
