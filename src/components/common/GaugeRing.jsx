import './GaugeRing.css';

/**
 * Circular progress gauge (Operational Health "80%").
 * Pure SVG — crisp at any size, animates its stroke on mount.
 */
export default function GaugeRing({ value = 80, size = 120, stroke = 12 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="gauge" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#418df8" />
            <stop offset="100%" stopColor="#1952f1" />
          </linearGradient>
        </defs>
        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e8eefc"
          strokeWidth={stroke}
        />
        {/* progress */}
        <circle
          className="gauge__progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="gauge__label">
        <span className="gauge__flame" aria-hidden="true">🔥</span>
        <span className="gauge__value">{value}%</span>
      </div>
    </div>
  );
}
