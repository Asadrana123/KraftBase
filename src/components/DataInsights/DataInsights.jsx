import { ChartBar, MagnifyingGlass } from '@phosphor-icons/react';
import { AnalyticsVisual, AgencyVisual } from './DataVisuals';
import { DATA_INSIGHTS } from '../../data/dataInsights';
import '../Features/Features.css'; // reuse the two-column feature layout
import './DataInsights.css';

const ICONS = { ChartBar, MagnifyingGlass };
const VISUALS = { analytics: AnalyticsVisual, agency: AgencyVisual };

export default function DataInsights() {
  return (
    <section className="features data-insights section" id="for-agencies">
      <div className="container">
        <div className="features__grid features__grid--top">
          {DATA_INSIGHTS.cards.map((card) => {
            const Icon = ICONS[card.icon];
            const Visual = VISUALS[card.visual];
            return (
              <div className="feature" key={card.id}>
                <div className="feature__head">
                  <span className="feature__icon">
                    <Icon size={22} weight="fill" color="#1952f1" />
                  </span>
                  <h3 className="feature__title">
                    {card.titlePlain}
                    <span className="feature__title-accent">{card.titleAccent}</span>
                  </h3>
                </div>
                <p className="feature__desc">{card.description}</p>
                <Visual />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
