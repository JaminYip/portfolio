// Color values for JS-side dynamic styling (must stay in sync with globals.css @theme)
export const colors = {
  base: "#000000",
  sectionAbout: "#203a3d",
  sectionSkills: "#3d203a",
  accentTeal: "#b2dfdb",
  accentPink: "#f50057",
  accentAmber: "#ffc107",
} as const;

// Category accent colors for Skills section
export type SkillCategory = "Back-end" | "Front-end" | "Infrastructure / DevOps";

export const categoryColors: Record<SkillCategory, string> = {
  "Back-end": "#4db6ac",
  "Front-end": "#9e9e9e",
  "Infrastructure / DevOps": "#9e9e9e",
};

// Section names (used by NavBar and scroll navigation)
export const SECTION_NAMES = ["ABOUT", "SKILLS", "WORK"] as const;

// Carousel
export const TOP_IMAGE_COUNT = 13;
export const CAROUSEL_INTERVAL_MS = 1500;
export const CAROUSEL_FADE_CYCLES = 4;

// Timing
export const LOADING_DISPLAY_MS = 3500;
