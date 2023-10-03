import { styleVariants } from "@vanilla-extract/css";

export const SizeVariant = styleVariants({
  large: {
    padding: "0.5rem 1.375rem",
    fontSize: "0.9375rem",
    fontWeight: 500,
    lineHeight: "1.625rem",
    letterSpacing: "0.0288rem",
    width: "max-content",
  },
  medium: {
    padding: "0.375rem 1rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
    LetterSpacing: "0.025rem",
    width: "max-content",
  },
  small: {
    padding: "0.25rem 0.625rem",
    fontSize: "0.8125rem",
    fontWeight: 500,
    lineHeight: "1.375rem",
    LetterSpacing: "0.02875rem",
    width: "max-content",
  },
  auto: {
    padding: "0.25rem 0.625rem",
    fontSize: "0.8125rem",
    fontWeight: 500,
    lineHeight: "1.375rem",
    LetterSpacing: "0.02875rem",
  },
});
