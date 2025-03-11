
interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
}

export const colorSchemes: Record<string, ColorScheme> = {
  default: {
    primary: "#6366f1", // Indigo
    secondary: "#f59e0b", // Amber
    accent: "#10b981", // Emerald
    neutral: "#6b7280", // Gray
  },
  blue: {
    primary: "#3b82f6", // Blue
    secondary: "#ec4899", // Pink
    accent: "#22d3ee", // Cyan
    neutral: "#78716c", // Stone
  },
  purple: {
    primary: "#8b5cf6", // Violet
    secondary: "#f43f5e", // Rose
    accent: "#14b8a6", // Teal
    neutral: "#64748b", // Slate
  },
  green: {
    primary: "#10b981", // Emerald
    secondary: "#8b5cf6", // Violet
    accent: "#f59e0b", // Amber
    neutral: "#6b7280", // Gray
  }
};

export default colorSchemes;
