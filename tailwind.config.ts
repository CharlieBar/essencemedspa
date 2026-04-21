import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        essence: {
          black: "#050505",
          "black-soft": "#121212",
          white: "#FFFFFF",
          "white-off": "#EEEAE6",
          accent: "#FF4418",
          "accent-dark": "#CC3510",
          gold: "#CBA858",
          "gold-light": "#E4C985",
          muted: "#8A8A8A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Bodoni Moda", "serif"],
        editorial: ["var(--font-editorial)", "Instrument Serif", "serif"],
        body: ["var(--font-body)", "Outfit", "sans-serif"],
        sans: ["var(--font-body)", "Outfit", "sans-serif"],
      },
      fontSize: {
        "fluid-loader": "clamp(3rem, 12vw, 8rem)",
        "fluid-hero": "clamp(4rem, 10vw, 9rem)",
        "fluid-services": "clamp(3rem, 7vw, 6rem)",
        "fluid-cta": "clamp(3rem, 8vw, 7rem)",
        "fluid-about": "clamp(2.5rem, 5vw, 4.5rem)",
        "fluid-quote": "clamp(1.8rem, 4vw, 3.5rem)",
      },
      letterSpacing: {
        logo: "0.4em",
        eyebrow: "0.4em",
        brand: "0.3em",
        marquee: "0.3em",
        "ls-nav": "0.2em",
        btn: "0.2em",
        "hero-btn": "0.15em",
      },
      backgroundImage: {
        "hero-overlay-desktop":
          "linear-gradient(90deg, #050505 0%, #050505 40%, transparent 100%)",
        "hero-overlay-mobile":
          "linear-gradient(0deg, #050505 20%, rgba(5,5,5,0.8) 100%)",
        "service-card-hover":
          "linear-gradient(135deg, #FF4418 0%, #CC3510 100%)",
      },
      backdropBlur: {
        nav: "20px",
      },
      maxWidth: {
        "hero-content": "800px",
        "about-text": "500px",
        "cta-text": "500px",
        testimonial: "1000px",
        "service-desc": "350px",
      },
      keyframes: {
        marqueeScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollBounce: {
          "0%, 100%": { top: "10px", opacity: "1" },
          "50%": { top: "30px", opacity: "0.3" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        wordReveal: {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        marquee: "marqueeScroll 25s linear infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
        "slide-up": "slideUp 1s ease forwards",
        "word-reveal":
          "wordReveal 1.2s cubic-bezier(0.65,0,0.35,1) forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
      transitionTimingFunction: {
        essence: "cubic-bezier(0.65, 0, 0.35, 1)",
        "essence-dramatic": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
