
interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  background: string;
  text: string;
  border: string;
  hover: string;
}

export const colorSchemes: Record<string, ColorScheme> = {
  default: {
    primary: "#051A09", // Dark Green - from user
    secondary: "#DDE7DD", // Light Green - from user
    accent: "#F3F2E7", // Cream - from user
    neutral: "#4a5568", // Gray
    background: "#F3F2E7", // Cream - from user
    text: "#051A09", // Dark Green - from user
    border: "#DDE7DD", // Light Green - from user
    hover: "#EAE9DE", // Lighter Cream
  },
  ocean: {
    primary: "#0ea5e9", // Sky Blue
    secondary: "#f97316", // Orange
    accent: "#10b981", // Emerald
    neutral: "#64748b", // Slate
    background: "#ecfdf5", // Light Cyan
    text: "#0f172a", // Dark Blue
    border: "#e0f2fe", // Light Blue
    hover: "#f0fdfa", // Light Teal
  },
  sunset: {
    primary: "#d946ef", // Fuchsia
    secondary: "#f59e0b", // Amber
    accent: "#8b5cf6", // Violet
    neutral: "#6b7280", // Gray
    background: "#fff1f2", // Light Pink
    text: "#1e293b", // Dark Slate
    border: "#fce7f3", // Light Pink
    hover: "#faf5ff", // Light Purple
  },
  forest: {
    primary: "#059669", // Emerald
    secondary: "#f59e0b", // Amber
    accent: "#0369a1", // Blue
    neutral: "#78716c", // Stone
    background: "#f0fdf4", // Light Green
    text: "#1e3a8a", // Dark Blue
    border: "#d1fae5", // Light Green
    hover: "#f8fafc", // Light Blue
  }
};

export default colorSchemes;
