import './Avatar.css';

/**
 * Placeholder avatar (initials on a soft gradient).
 * Swap `src` in later for real photos — the API stays the same.
 */
export default function Avatar({ name = '', src, size = 40, className = '' }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const hue = (name.charCodeAt(0) || 200) * 3 % 360;

  return src ? (
    <img
      className={`avatar ${className}`}
      src={src}
      alt={name}
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  ) : (
    <span
      className={`avatar avatar--initials ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(135deg, hsl(${hue} 70% 82%), hsl(${hue + 30} 65% 68%))`,
      }}
      aria-label={name}
    >
      {initials || '•'}
    </span>
  );
}
