import './BarChart.css';

/**
 * Coded bar chart (hero + data cards). Taller, thinner bars with y-axis
 * gridlines to match the Figma "Interactions and amount collected" card.
 */
export default function BarChart({
  data = [55, 78, 62, 100, 70, 48, 82],
  labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  yTicks = [150, 130, 110, 90, 70, 50],
  highlightIndex = 3,
  highlightLabel = '34%',
}) {
  const max = Math.max(...data);
  return (
    <div className="barchart">
      <div className="barchart__grid">
        <div className="barchart__yaxis">
          {yTicks.map((t) => (
            <span key={t} className="barchart__ytick">{t}</span>
          ))}
        </div>
        <div className="barchart__bars">
          {data.map((v, i) => {
            const h = (v / max) * 100;
            const active = i === highlightIndex;
            return (
              <div className="barchart__col" key={i}>
                {active && <span className="barchart__tag">{highlightLabel}</span>}
                <div
                  className={`barchart__bar ${active ? 'is-active' : ''}`}
                  style={{ '--h': `${h}%`, '--i': i }}
                />
                <span className="barchart__label">{labels[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
