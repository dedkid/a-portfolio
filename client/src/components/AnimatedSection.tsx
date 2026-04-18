import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  stagger?: boolean;
  className?: string;
}

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  stagger = false,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const staggerClass = stagger && isVisible ? "animate-stagger" : "";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
}
