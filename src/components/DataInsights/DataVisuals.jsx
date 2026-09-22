import { CaretDown, SealCheck, Plus } from '@phosphor-icons/react';
import BarChart from '../common/BarChart';
import GaugeRing from '../common/GaugeRing';
import { AFL_STATS } from '../../data/hero';
import './DataVisuals.css';

/* "Driven by Data" — chart + gauge side by side, with an add tile */
export function AnalyticsVisual() {
  return (
    <div className="dvisual dvisual--analytics">
      <div className="dcard dcard--chart">
        <div className="dcard__head">
          <div>
            <p className="dcard__title">Interactions and amount collected</p>
            <p className="dcard__sub">Totals For 31 Feb</p>
          </div>
        </div>
        <BarChart />
      </div>

      <div className="dvisual__right">
        <div className="dcard dcard--gauge">
          <div className="dcard__head">
            <div>
              <p className="dcard__title">Operational Health</p>
              <p className="dcard__sub">April 2025</p>
            </div>
            <CaretDown size={14} weight="bold" color="#9aa6bd" />
          </div>
          <GaugeRing value={80} size={92} stroke={11} />
          <p className="dcard__foot">
            Address Actionable Cases Promptly To Maintain A Healthy Score.
          </p>
        </div>
        <button className="dvisual__add" aria-label="Add">
          <Plus size={22} weight="bold" color="#1952f1" />
        </button>
      </div>
    </div>
  );
}

/* "Discover Agency partners" — AFL card + Send Enquiry mini-form */
export function AgencyVisual() {
  return (
    <div className="dvisual dvisual--agency">
      <div className="agency-card">
        <p className="dcard__title">
          AFL Services <SealCheck size={16} weight="fill" color="#1952f1" />
        </p>
        <p className="dcard__sub">Cities Serviced: Bangalore, Chennai</p>
        <div className="agency-card__stats">
          {AFL_STATS.map((s) => (
            <div className="agency-card__stat" key={s.label}>
              <span className="agency-card__stat-value">{s.value}</span>
              <span className="agency-card__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="dcard__sub dcard__sub--tiny">Operating Since 2016</p>
      </div>

      {/* Send Enquiry mini card peeking out */}
      <div className="enquiry-card">
        <p className="enquiry-card__title">Send Enquiry AFL Services</p>
        <div className="enquiry-card__row">
          <span className="enquiry-card__field">Write A Message</span>
          <button className="enquiry-card__send">Send</button>
        </div>
      </div>
    </div>
  );
}
