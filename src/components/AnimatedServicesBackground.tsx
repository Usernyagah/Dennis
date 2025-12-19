import { useEffect, useRef } from "react";

interface FloatingService {
  text: string;
  icon?: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
  animationType: "float" | "drift" | "orbit" | "wave";
}

const AnimatedServicesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const services: Omit<FloatingService, "x" | "y">[] = [
    { text: "Website", duration: 8, delay: 0, size: 1, opacity: 0.08, animationType: "float" },
    { text: "Software", duration: 10, delay: 1.2, size: 1.2, opacity: 0.1, animationType: "drift" },
    { text: "ERP", duration: 7, delay: 2.4, size: 0.9, opacity: 0.09, animationType: "orbit" },
    { text: "M-Pesa Payments", duration: 9, delay: 3.6, size: 1.1, opacity: 0.08, animationType: "wave" },
    { text: "Banking Payments", duration: 10, delay: 4.8, size: 1.15, opacity: 0.09, animationType: "float" },
    { text: "Analytics", duration: 9, delay: 6.0, size: 0.85, opacity: 0.07, animationType: "drift" },
    { text: "Database", duration: 8, delay: 7.2, size: 1.3, opacity: 0.1, animationType: "orbit" },
    { text: "API Integration", duration: 8, delay: 8.4, size: 1, opacity: 0.08, animationType: "wave" },
    { text: "Cloud Services", duration: 10, delay: 9.6, size: 0.95, opacity: 0.09, animationType: "float" },
    { text: "Mobile Apps", duration: 8, delay: 10.8, size: 1.05, opacity: 0.08, animationType: "drift" },
    { text: "E-commerce", duration: 9, delay: 12.0, size: 0.9, opacity: 0.07, animationType: "orbit" },
    { text: "CRM", duration: 10, delay: 13.2, size: 1.1, opacity: 0.09, animationType: "wave" },
    { text: "Inventory", duration: 8, delay: 14.4, size: 1.2, opacity: 0.1, animationType: "float" },
    { text: "Automation", duration: 10, delay: 15.6, size: 0.88, opacity: 0.08, animationType: "drift" },
    { text: "Reporting", duration: 8, delay: 16.8, size: 1.15, opacity: 0.09, animationType: "orbit" },
    { text: "Dashboards", duration: 11, delay: 18.0, size: 1, opacity: 0.08, animationType: "wave" },
    { text: "Integration", duration: 8, delay: 19.2, size: 1.05, opacity: 0.09, animationType: "float" },
    { text: "Data Analytics", duration: 9, delay: 20.4, size: 0.92, opacity: 0.08, animationType: "drift" },
    { text: "Business Intelligence", duration: 10, delay: 21.6, size: 1.1, opacity: 0.09, animationType: "orbit" },
    { text: "Consulting", duration: 8, delay: 22.8, size: 0.95, opacity: 0.08, animationType: "wave" },
    { text: "Custom Development", duration: 9, delay: 24.0, size: 1.2, opacity: 0.1, animationType: "float" },
    { text: "System Integration", duration: 10, delay: 25.2, size: 0.9, opacity: 0.07, animationType: "drift" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements: HTMLDivElement[] = [];

    services.forEach((service, index) => {
      const element = document.createElement("div");
      element.textContent = service.text;
      element.className = "floating-service";
      
      // Random horizontal position, but start at bottom
      const x = Math.random() * 100;
      const startY = 90 + Math.random() * 10; // Start near footer (90-100%)
      const endY = -10; // End above viewport
      const horizontalDrift = (Math.random() * 20 - 10); // Small horizontal movement
      const rotation = Math.random() * 10 - 5; // Small rotation
      
      element.style.cssText = `
        position: absolute;
        font-size: ${service.size * 2.5}rem;
        font-weight: 300;
        color: hsl(var(--foreground));
        opacity: 0;
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.05em;
        left: ${x}%;
        top: ${startY}%;
        transform: translate(-50%, -50%);
        animation: rise-${index} ${service.duration}s ease-out infinite;
        animation-delay: ${service.delay}s;
        will-change: transform, opacity;
      `;

      // Create keyframe animation that rises from footer
      const style = document.createElement("style");
      style.textContent = `
        @keyframes rise-${index} {
          0% {
            transform: translate(-50%, -50%) translate(${horizontalDrift}px, 0) rotate(${rotation}deg);
            opacity: 0;
            top: ${startY}%;
          }
          10% {
            opacity: ${service.opacity};
          }
          50% {
            transform: translate(-50%, -50%) translate(${horizontalDrift * 1.5}px, -50vh) rotate(${rotation * 1.2}deg);
            opacity: ${service.opacity};
          }
          100% {
            transform: translate(-50%, -50%) translate(${horizontalDrift * 2}px, -100vh) rotate(${rotation * 1.5}deg);
            opacity: 0;
            top: ${endY}%;
          }
        }
      `;
      document.head.appendChild(style);
      container.appendChild(element);
      elements.push(element);
    });

    return () => {
      elements.forEach((el) => el.remove());
      // Clean up styles
      const styles = document.querySelectorAll("style");
      styles.forEach((style) => {
        if (style.textContent?.includes("float-")) {
          style.remove();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    />
  );
};

export default AnimatedServicesBackground;

