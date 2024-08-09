/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "dark", // Default theme set to dark
      "light",
      {
        mytheme1: {
          "primary": "#ffedd5",
          "secondary": "#fffbeb",
          "accent": "#fbbf24",
          "neutral": "#f97316",
          "base-100": "#06402B",
          "base-content": "#ffedd5",
          "info": "#3b82f6",
          "success": "#4ade80",
          "warning": "#facc15",
          "error": "#f43f5e",
        },
        mytheme2: {
          "primary": "#dc2626",
          "secondary": "#f87171",
          "base-content": "#323232",
          "accent": "#fbbf24",
          "neutral": "#9ca3af",
          "base-100": "#DDD0C8",
          "info": "#3b82f6",
          "success": "#34d399",
          "warning": "#fbbf24",
          "error": "#f87171",
        },
        mytheme3: {
          "primary": "#6366f1",
          "secondary": "#c7d2fe",
          "accent": "#a5b4fc",
          "neutral": "#6b7280",
          "base-content":"#000",
          "base-100": "#F9B872",
          "info": "#60a5fa",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
        // mytheme4: {
        //   "primary": "#0ea5e9",
        //   "secondary": "#bae6fd",
        //   "accent": "#7dd3fc",
        //   "neutral": "#0284c7",
        //   "base-100": "#e0f2fe",
        //   "info": "#38bdf8",
        //   "success": "#22d3ee",
        //   "warning": "#fde047",
        //   "error": "#f87171",
        // },
      },
    ],
    darkTheme: "dark", // Set dark theme as default
  },
}
