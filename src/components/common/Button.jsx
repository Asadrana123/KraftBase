import './Button.css';

/**
 * Shared button used across the page.
 * variant: "primary" (gradient) | "outline" (white w/ border)
 * The arrow glyph mirrors the Figma buttons ("Get free Trial ↗", "How We work ↘").
 */
export default function Button({
  children,
  variant = 'primary',
  arrow,           // "up-right" | "down-right" | undefined
  className = '',
  ...rest
}) {
  return (
    <button className={`btn btn--${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && <Arrow direction={arrow} />}
    </button>
  );
}

function Arrow({ direction }) {
  const rotate = direction === 'down-right' ? 90 : 0;
  return (
    <svg
      className="btn__arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M4 12L12 4M12 4H5M12 4V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
