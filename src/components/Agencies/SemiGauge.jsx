import './SemiGauge.css';

/**
 * Semicircle (half-donut) gauge for the "70% DPD Resolution Rate" card.
 * Pure SVG; the arc animates from 0 to `value` on mount.
 */
export default function SemiGauge({ value = 70, size = 220, stroke = 16 }) {
  const r = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  // semicircle arc length = PI * r
  const arc = Math.PI * r;
  const offset = arc - (value / 100) * arc;

  // knob position along the arc
  const angle = Math.PI - (value / 100) * Math.PI; // from left(180°) to right(0°)
  const knobX = cx + r * Math.cos(angle);
  const knobY = cy - r * Math.sin(angle);

  return (
    <div className="semi" style={{ width: size, height: size / 2 + stroke }}>
      <svg width={size} height={size / 2 + stroke} viewBox={`0 0 ${size} ${size / 2 + stroke}`}>
        <defs>
          <linearGradient id="semiGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b8d4fb" />
            <stop offset="100%" stopColor="#1952f1" />
          </linearGradient>
        </defs>
        {/* track */}
        <path
          d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`}
          fill="none"
          stroke="#e8eefc"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        {/* progress */}
        <path
          className="semi__arc"
          d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`}
          fill="none"
          stroke="url(#semiGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={arc}
          strokeDashoffset={offset}
        />
        {/* knob */}
        <circle cx={knobX} cy={knobY} r={stroke / 2 + 2} fill="#fff" stroke="#1952f1" strokeWidth="3" />
      </svg>
      <div className="semi__label">
        <span className="semi__value">{value}%</span>
      </div>
    </div>
  );
}
