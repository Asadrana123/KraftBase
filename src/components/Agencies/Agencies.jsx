import { useState } from 'react';
import { ChatCircleDots, ShareNetwork, SealCheck, MapPinArea, Target } from '@phosphor-icons/react';
import SemiGauge from '../common/SemiGauge';
import { AGENCIES } from '../../data/agencies';
import './Agencies.css';

const ICONS = { ChatCircleDots, ShareNetwork, SealCheck, MapPinArea, Target };

export default function Agencies() {
  const [active, setActive] = useState(0);
  const tab = AGENCIES.tabs[active];

  return (
    <section className="agencies section">
      <div className="container">
        {/* heading */}
        <div className="agencies__head">
          <span className="eyebrow">{AGENCIES.eyebrow}</span>
          <h2 className="agencies__title">
            {AGENCIES.headingPlain}
            <span className="agencies__title-accent">{AGENCIES.headingAccent}</span>
          </h2>
        </div>

        {/* tabs */}
        <div className="agencies__tabs" role="tablist">
          {AGENCIES.tabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === i}
              className={`agencies__tab ${active === i ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="agencies__content" key={tab.id}>
          <div className="agencies__gauge-card">
            <p className="agencies__gauge-title">{tab.gaugeTitle}</p>
            <SemiGauge value={tab.gaugeValue} />
            <p className="agencies__gauge-caption">{tab.gaugeCaption}</p>
            <p className="agencies__gauge-sub">{tab.gaugeSub}</p>
          </div>

          <div className="agencies__points">
            {tab.points.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <div className="agencies__point" key={i}>
                  <span className="agencies__point-icon">
                    <Icon size={20} weight="fill" color="#1952f1" />
                  </span>
                  <p>{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
