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
export const categoryColors: Record<string, string> = {
  "Back-end": colors.accentTeal,
  "Front-end": colors.accentPink,
  "Infrastructure / DevOps": colors.accentAmber,
};

// Carousel
export const TOP_IMAGE_COUNT = 13;

// Timing
export const LOADING_DISPLAY_MS = 3500;
export const LOADING_EXIT_MS = 2500;
